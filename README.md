# Hannah's Reading Workshop

剑桥 IGCSE ESL **0511 / 0510 Reading Exercise 1** 真题精讲网站。
左栏原文 + 右栏题目，答案句用彩色高亮定位，配套 **B2–C1 词汇**与**长难句拆解**。

**在线访问：<https://cbydh7v78c-prog.github.io/hannahs-reading-workshop/>**

## 内容范围

Booklet 第 1–21 页，共 11 篇、99 题、143 分：

| # | Passage | Topic | Source | 页 |
|---|---------|-------|--------|----|
| 1 | Chocolate | Science | 0510/22/O/N/21 | 1 |
| 2 | Bringing beavers back to Scotland | Animals | 0510/21/O/N/23 | 3 |
| 3 | A message from the past | Society | 0510/22/M/J/20 | 5 |
| 4 | A dinosaur expert | Science / Animals | 0510/21/O/N/20 | 7 |
| 5 | Sweden's famous Icehotel | Society | 0510/21/M/J/21 | 9 |
| 6 | Percy Spencer: the inventor of the microwave oven | Technology | 0510/23/O/N/20 | 11 |
| 7 | Ancient rock art in Colombia | Society | 0510/22/O/N/23 | 13 |
| 8 | Photography for Teens | Student life | 0510/23/O/N/23 | 15 |
| 9 | Zebras and their stripes | Science / Animals | 0510/21/M/J/22 | 17 |
| 10 | Shelly Downley: young skateboarder | Student life | 0510/23/M/J/21 | 19 |
| 11 | Job profile – zookeeper | Work | 0510/22/M/J/21 | 21 |

所有答案、可接受表述、"任答 N 点"的给分规则，均依据 UCLES 官方 **Mark Scheme** 整理。

## 功能

**原文区（左）**
- 段落 / 句子两级渲染，有独立滚动条
- 答案句按题号配色高亮：半透明底 + 同色下划线 + 句末题号徽章
- 一句服务多题时，显示斜纹双色徽章（如 `Q5 Q9`）
- 点击句中高亮 → 右侧对应题目高亮并滚动到位

**题目区（右）**
- 每题含：题号、题干、分值、答案句所在段落、作答框
- 点「对答案」：单词题按官方可接受答案整词匹配；多分题按得分点逐条判定，顶部实时累计得分
- 点「解析」或题号：定位（原句）/ 同义替换 / 为什么 / 陷阱 四项讲解，同时进入聚焦模式
- 聚焦模式下，该题答案句加深、其余高亮淡灰，`Esc` 或再次点击退出

**语言点**
- **B2–C1 词汇**：每篇 16–18 条，含等级徽章、词性、英文释义、中文释义、常见搭配、原文例句（点任意词条可跳回原文）
- **长难句**：每篇 6–7 句，含语法标签、主干提取、逐成分拆解、参考译文、考点提示

## 本地运行

不需要构建、不需要服务器，双击 `index.html` 即可。
若要模拟线上环境（推荐）：

```bash
cd hannahs-reading-workshop
python -m http.server 8099
# 打开 http://127.0.0.1:8099
```

## 部署到 GitHub Pages

纯静态站点（HTML/CSS/JS，无后端、无构建、无外部 CDN），路径全部为相对路径，可直接托管在 GitHub Pages 的**项目子路径**下（`https://<user>.github.io/<repo>/`）。

```bash
git init -b main
git add .
git commit -m "feat: Hannah's Reading Workshop"
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

然后在仓库 **Settings → Pages** 中选择 `Deploy from a branch` → `main` / `/ (root)`。
仓库已包含 `.nojekyll`，避免 Jekyll 处理静态资源。

如果本机网络无法直连 `github.com:443`（`git push` 报 `Empty reply` 或 `CONNECT tunnel failed`），但 `api.github.com` 可达，可用 API 方式发布（不需要 git 传输层）：

```bash
GH_TOKEN=<classic PAT，勾 repo> node tools/deploy-api.mjs
```

它会用 Git Data API 提交整个文件树、开启 Pages，并轮询到构建完成后实测首页与资源状态码。发布后记得把 token 从 `.git/config` 和终端历史里清掉。

## 目录结构

```
hannahs-reading-workshop/
├── index.html            页面骨架（含脚本引入顺序）
├── assets/
│   ├── style.css         版式与配色
│   └── app.js            分句、高亮、判分、联动
├── data/
│   ├── p01.js … p11.js   每篇的原文、题目、答案与解析
│   └── extra.js          扩展语言点（词汇 / 长难句）
└── tools/check.mjs       数据校验脚本
```

## 数据校验

```bash
node tools/check.mjs        # 校验全部 11 篇
node tools/check.mjs 1 4    # 只校验 1–4 篇
```

检查项：总分是否为 13、答案句能否定位、多分题得分点是否齐全、词汇与长难句引用是否存在、单词题自测判分是否通过。

## 添加新文章

在 `data/` 下新建 `p12.js`，按以下结构填入内容，并在 `index.html` 里加一行 `<script src="data/p12.js"></script>`（放在 `extra.js` 之前）：

```js
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p12', no: 12, page: 23,
  paper: '0510/XX/X/XX', topic: '...', title: '...',
  intro: 'Read the article about ..., and then answer the following questions.',
  paragraphs: ['第一段原文……', '第二段原文……'],
  questions: [{
    no: 'Q1', marks: 1,
    stem: '题干',
    key: ['原文中作为答案的那一小段文字'],   // 必须是原文里的连续片段
    show: '标准答案',                        // 展示用
    accept: ['可接受写法 1', '可接受写法 2'], // 单词题判分用
    paraphrase: '同义替换说明',
    why: '为什么这句是答案',
    trap: '常见陷阱'
  }],
  vocab:  [{ w: 'word', pos: 'n.', lvl: 'B2', cn: '中文', q: '原文片段' }],
  syntax: [{ q: '原文句子', tags: ['定语从句'], parts: [{ r: '主句', t: '...' }], cn: '译文' }]
});
```

多分题把 `accept` 换成 `pts`：

```js
pts: [
  { label: '得分点 1 的中文说明', need: ['评分时认可的英文表述'] },
  { label: '得分点 2 的中文说明', need: ['...'] }
]
```

---

内容版权归 Cambridge Assessment International Education (UCLES) 所有，本网站仅用于课堂教学与学习讲解。
