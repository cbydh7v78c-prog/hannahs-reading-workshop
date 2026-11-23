/* 开发期数据校验：在 Node 中复用 app.js 的分句/定位/判分逻辑
   用法：node tools/check.mjs [起始篇号] [结束篇号] */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const from = Number(process.argv[2] || 1);
const to = Number(process.argv[3] || 11);

const appSrc = fs.readFileSync(path.join(root, 'assets/app.js'), 'utf8');
const cut = appSrc.indexOf('/* ---------- 9.');
if (cut < 0) throw new Error('app.js 结构变化，无法定位裁剪点');

const sandbox = { window: { PASSAGES: [] }, console, setTimeout, clearTimeout };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

// 先加载数据文件
for (let i = from; i <= to; i++) {
  const f = path.join(root, `data/p${String(i).padStart(2, '0')}.js`);
  if (!fs.existsSync(f)) { console.log(`! 缺少 ${path.basename(f)}`); continue; }
  vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f });
}

// 再加载扩展语言点
const extra = path.join(root, 'data/extra.js');
if (fs.existsSync(extra)) vm.runInContext(fs.readFileSync(extra, 'utf8'), sandbox, { filename: extra });

// 最后加载 app.js 的前半段（纯逻辑，不触碰 DOM）
const head = appSrc.slice(0, cut) + `
globalThis.__X = { PASSAGES: PASSAGES, buildIndex: buildIndex, splitSentences: splitSentences,
                   norm: norm, patternHit: patternHit, judge: judge, PALETTE: PALETTE };
})();`;
vm.runInContext(head, sandbox, { filename: 'app-head.js' });

const { PASSAGES, buildIndex, splitSentences, norm, judge } = sandbox.__X;

let errors = 0, warns = 0;
const pad = (s, n) => String(s).padEnd(n, ' ');

for (const p of PASSAGES) {
  if (p.no < from || p.no > to) continue;
  buildIndex(p);
  const total = p.questions.reduce((a, q) => a + q.marks, 0);
  const line = `P${String(p.no).padStart(2, '0')} ${pad(p.title.slice(0, 34), 34)} 段${p.paragraphs.length} 句${p._sents.length} 题${p.questions.length} 分${total} 词${(p.vocab || []).length} 句法${(p.syntax || []).length}`;
  const flags = [];
  if (total !== 13) { flags.push(`总分=${total}（应为 13）`); errors++; }

  p.questions.forEach((q) => {
    if (!q.key || !q.key.length) { flags.push(`${q.no} 无 key`); errors++; }
    if (!q._hits.length) { flags.push(`${q.no} 答案句未定位`); errors++; }
    if (q.marks > 1 && (!q.pts || !q.pts.length)) { flags.push(`${q.no} 多分题缺 pts`); errors++; }
    if (q.pts && q.pts.length < q.marks) { flags.push(`${q.no} pts<分数`); errors++; }
    if (!q.show) { flags.push(`${q.no} 缺 show`); errors++; }
    ['paraphrase', 'why', 'trap'].forEach((f) => { if (!q[f]) { flags.push(`${q.no} 缺 ${f}`); errors++; } });
    if (q.marks === 1 && (!q.accept || !q.accept.length)) { flags.push(`${q.no} 缺 accept`); errors++; }
  });

  // 词汇/句法引用必须能在原文里找到
  (p.vocab || []).forEach((v) => {
    if (!p._sents.some((s) => s.search.includes(norm(v.q)))) { flags.push(`词汇「${v.w}」定位失败`); errors++; }
  });
  (p.syntax || []).forEach((sx) => {
    if (!p._sents.some((s) => s.search.includes(norm(sx.q)))) { flags.push(`句法定位失败：${sx.q.slice(0, 24)}`); errors++; }
    if (!sx.parts || !sx.parts.length || !sx.cn) { flags.push(`句法条目不完整`); errors++; }
  });

  // 自测判分：用 show 的首个答案喂回去应得分
  p.questions.forEach((q) => {
    if (q.marks !== 1) return;
    const r = judge(q, q.accept[0]);
    if (r.hit !== q.marks) { flags.push(`${q.no} 自测失败（accept[0] 判错）`); errors++; }
  });

  const multi = p._sents.filter((s) => s.qs.length > 1).map((s) => s.sid + '=' + s.qs.join('/'));
  console.log(line + (multi.length ? `  多题共句:${multi.length}` : ''));
  if (p._sents.some((s) => s.text.length < 8 && s.qs.length)) { flags.push('疑似残缺句被用作答案'); warns++; }
  flags.forEach((f) => console.log('   ✗ ' + f));
}

console.log(errors ? `\n发现 ${errors} 个问题` : '\n全部通过');
process.exit(errors ? 1 : 0);
