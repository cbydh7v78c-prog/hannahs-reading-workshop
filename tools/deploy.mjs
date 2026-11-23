/* 一键发布到 GitHub Pages
   用法（不要把 token 写进任何文件）：
     GH_TOKEN=xxx node tools/deploy.mjs                    # 默认仓库名 hannahs-reading-workshop
     GH_TOKEN=xxx node tools/deploy.mjs my-repo-name
   流程：建仓库 → 推送 main → 开启 Pages → 轮询构建 → 验证线上地址
*/
import { execSync } from 'node:child_process';
import path from 'node:path';

const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error('缺少 GH_TOKEN 环境变量');
  process.exit(1);
}
const REPO = process.argv[2] || 'hannahs-reading-workshop';
const ROOT = path.resolve(import.meta.dirname, '..');
const API = 'https://api.github.com';

const H = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'hannahs-reading-workshop-deploy',
  'Content-Type': 'application/json',
};

async function api(method, url, body) {
  const res = await fetch(API + url, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = { raw: text }; }
  return { status: res.status, data };
}

const log = (...a) => console.log(...a);
const step = (n, s) => log(`\n[${n}] ${s}`);

/* 1. 身份 */
step(1, '校验 Token');
const me = await api('GET', '/user');
if (me.status !== 200) {
  console.error('  ✗ Token 无效或权限不足：', me.status, me.data.message || '');
  process.exit(1);
}
const owner = me.data.login;
log(`  ✓ 已认证：${owner}`);

/* 2. 仓库 */
step(2, `确保仓库 ${owner}/${REPO}`);
let repo = await api('GET', `/repos/${owner}/${REPO}`);
if (repo.status === 404) {
  const created = await api('POST', '/user/repos', {
    name: REPO,
    description: "Hannah's Reading Workshop — Cambridge IGCSE ESL 阅读精讲",
    homepage: `https://${owner}.github.io/${REPO}/`,
    private: false,
    has_issues: true,
    has_wiki: false,
    auto_init: false,
  });
  if (created.status !== 201) {
    console.error('  ✗ 创建失败：', created.status, JSON.stringify(created.data).slice(0, 300));
    process.exit(1);
  }
  repo = created;
  log('  ✓ 已创建公开仓库');
} else if (repo.status === 200) {
  log('  ✓ 仓库已存在，直接使用');
} else {
  console.error('  ✗ 无法访问仓库：', repo.status, repo.data.message || '');
  process.exit(1);
}
const htmlUrl = repo.data.html_url;
const defaultBranch = repo.data.default_branch || 'main';
log(`  ${htmlUrl}`);

/* 3. 推送 */
step(3, '推送代码');
const remote = `https://x-access-token:${TOKEN}@github.com/${owner}/${REPO}.git`;
const run = (cmd) => execSync(cmd, { cwd: ROOT, stdio: 'pipe' }).toString();
try {
  let hasRemote = false;
  try { run('git remote get-url origin'); hasRemote = true; } catch { hasRemote = false; }
  if (hasRemote) run(`git remote set-url origin "${remote}"`);
  else run(`git remote add origin "${remote}"`);
  run(`git push -u origin HEAD:${defaultBranch} --force`);
  log(`  ✓ 已推送到 ${defaultBranch}：${run('git rev-parse --short HEAD').trim()}`);
  // 立刻把 remote 里的 token 抹掉，避免明文留在 .git/config
  run(`git remote set-url origin https://github.com/${owner}/${REPO}.git`);
  log('  ✓ 已清理 remote 中的凭据');
} catch (e) {
  console.error('  ✗ 推送失败：', (e.stderr || e.message || '').toString().slice(0, 400));
  process.exit(1);
}

/* 4. Pages */
step(4, '开启 GitHub Pages');
let pages = await api('GET', `/repos/${owner}/${REPO}/pages`);
if (pages.status === 404) {
  const created = await api('POST', `/repos/${owner}/${REPO}/pages`, {
    source: { branch: defaultBranch, path: '/' },
  });
  if (created.status !== 201) {
    console.error('  ✗ 开启失败：', created.status, JSON.stringify(created.data).slice(0, 300));
    process.exit(1);
  }
  log('  ✓ 已开启（build_type: legacy，分支 ' + defaultBranch + '）');
} else if (pages.status === 200) {
  log('  ✓ Pages 已存在：' + (pages.data.html_url || ''));
} else {
  console.error('  ✗ 读取 Pages 配置失败：', pages.status, pages.data.message || '');
}

/* 5. 轮询构建 */
step(5, '等待构建完成');
const siteUrl = `https://${owner.toLowerCase()}.github.io/${REPO}/`;
let built = false;
for (let i = 0; i < 40; i++) {
  await new Promise((r) => setTimeout(r, 6000));
  const st = await api('GET', `/repos/${owner}/${REPO}/pages`);
  const s = st.data && st.data.status;
  process.stdout.write(`  · ${i * 6 + 6}s status=${s || st.status}\n`);
  if (s === 'built') { built = true; break; }
  if (s === 'errored') break;
}
log(built ? '  ✓ 构建完成' : '  ! 未在 4 分钟内变为 built，稍后可能自动生效');

/* 6. 验证线上页面 */
step(6, '验证线上地址');
for (let i = 0; i < 10; i++) {
  try {
    const r = await fetch(siteUrl, { headers: { 'User-Agent': 'deploy-check' } });
    const html = await r.text();
    const ok = r.status === 200 && html.includes("Hannah's Reading Workshop");
    log(`  第 ${i + 1} 次：HTTP ${r.status}，标题匹配=${ok}，长度=${html.length}`);
    if (ok) {
      const cssOk = (await fetch(siteUrl + 'assets/style.css')).status;
      const jsOk = (await fetch(siteUrl + 'assets/app.js')).status;
      const d1 = (await fetch(siteUrl + 'data/p11.js')).status;
      log(`  资源检查：style.css=${cssOk} app.js=${jsOk} data/p11.js=${d1}`);
      console.log('\n=== 发布成功 ===');
      console.log('网址：' + siteUrl);
      process.exit(0);
    }
  } catch (e) {
    log(`  第 ${i + 1} 次：${e.message}`);
  }
  await new Promise((r) => setTimeout(r, 10000));
}
console.log('\n=== 已推送，但线上尚未生效 ===');
console.log('网址：' + siteUrl + '（CDN 生效通常需要 1–10 分钟）');
