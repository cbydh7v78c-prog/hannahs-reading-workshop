/* 第 1 篇 · Chocolate — 0510/22/O/N/21 Exercise 1 */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p01', no: 1, page: 1,
  paper: '0510/22/O/N/21', topic: 'Science', title: 'Chocolate',
  intro: 'Read the article about chocolate, and then answer the following questions.',

  paragraphs: [
    'When we hear the word ‘chocolate’, we probably think of the food that comes in the shape of a bar, or perhaps as individual sweets in a box. But over the time that humans have known about chocolate, it has typically been appreciated as a drink, and sugar didn’t have anything to do with it!',
    'Chocolate comes from cacao trees. They began spreading east from their original location in South America. This is the exact opposite to coffee trees, which were originally found in Ethiopia in Africa, and then travelled westwards. Cacao trees currently grow best in countries that lie within 10 degrees either side of the Equator, due to the combination of year-round moisture, heat and shade found there. However, in some areas, climate change is beginning to affect the growth of these trees.',
    'Cacao trees live for decades, but one issue for any farmer is that trees take years to become productive. By the time they do, the trees will be covered in flowers. Plants with flowers have to be pollinated, or fertilised, before they can produce fruit. Many are pollinated by bees, or sometimes butterflies or wasps. But in the case of cacao trees, this function is performed by a tiny fly. When flowers are pollinated, the trees go on to produce fruit – the oval-shaped cacao pods.',
    'Each pod contains cacao ‘beans’, which are the seeds used in chocolate production. There are between 20 and 60 seeds, each about as big as an olive, inside one pod. The seeds are surrounded by a milky-white substance, called the pith. The whole pod is quite tough, but can still be affected by black pod disease. This can kill individual pods and spread to the whole tree if not treated. Pods are typically harvested twice a year although the trees can produce pods all year round. Cacao harvesting is labour intensive, as pods are still gathered by hand.',
    'The precious cacao seeds are carefully transported to factories for processing. They are cleaned and roasted and the outer shell is removed, leaving behind the part known as the nib to be collected. Various heating and cooling methods are then used to produce a substance called cocoa mass, but after all these stages, each tree’s harvest results in a surprisingly small amount of cocoa mass. This can be treated to make natural cocoa powder and cocoa butter, or the mass can be turned into solid chocolate by adding ingredients like sugar. A technique that is often used to process cocoa powder further was developed in the 1880s by a Dutch chemist. He came up with a way of making cocoa powder so that it tastes more strongly of chocolate, as it is rather bitter in its natural state. The process also makes it darker in colour, which is why some bakery recipes list ‘Dutch cocoa’ in their ingredients.',
    'When you buy a bar of chocolate, following certain steps will keep it tasting good for longer. Ideally, keep it in a cool, dry place. You should also know that as chocolate picks up strong smells, it should be kept in an air-tight container. This will keep your chocolate edible for up to a year. If you need to store it for longer, first place it in the fridge for 24 hours to help to preserve its texture, then put it in a freezer for up to eighteen months. Once it is frozen, it will need to be taken out of the freezer and left to reach room temperature so you can enjoy this treat at its best.'
  ],

  questions: [
    {
      no: 'Q1', marks: 1,
      stem: 'What form of chocolate has been most commonly enjoyed throughout its history?',
      key: ['appreciated as a drink'],
      show: '(as) a drink',
      accept: ['drink', 'a drink', 'as a drink'],
      paraphrase: 'most commonly enjoyed throughout its history ↔ has typically been appreciated',
      why: '题目问"历史上最普遍的形态"，原文用 But 转折，直接给出 typically appreciated as a drink，答案就是 a drink。',
      trap: '第一句里的 a bar / individual sweets 是"我们现在想到的样子"，是干扰项，不是历史形态。'
    },
    {
      no: 'Q2', marks: 1,
      stem: 'On which continent were cacao trees first found?',
      key: ['original location in South America'],
      show: 'South America',
      accept: ['south america'],
      paraphrase: 'first found ↔ original location；on which continent ↔ 问大洲',
      why: '原文说 cacao trees began spreading east from their original location in South America，original location = 最初生长地。',
      trap: '同段出现的 Ethiopia in Africa 是咖啡树的原产地，属于典型的"邻近信息"干扰。'
    },
    {
      no: 'Q3', marks: 1,
      stem: 'Which type of insect is needed in order for cacao trees to produce fruit?',
      key: ['performed by a tiny fly'],
      show: '(a tiny) fly',
      accept: ['fly', 'a fly', 'tiny fly', 'flies'],
      paraphrase: 'is needed in order for … to produce fruit ↔ this function is performed by',
      why: '前文说 Many are pollinated by bees… But in the case of cacao trees，this function is performed by a tiny fly。',
      trap: '不要答 bees / butterflies / wasps —— 原文明确说这些是"多数植物"的传粉者，可可树是例外。'
    },
    {
      no: 'Q4', marks: 1,
      stem: 'What is a seed compared with in terms of its size?',
      key: ['each about as big as an olive'],
      show: '(an) olive',
      accept: ['olive', 'an olive'],
      paraphrase: 'is compared with in terms of its size ↔ each about as big as',
      why: 'as big as 就是"与……大小相比"，比较对象紧跟其后：an olive。',
      trap: '同句的 20 and 60 seeds 是数量不是大小；pith 是包裹种子的物质。'
    },
    {
      no: 'Q5', marks: 1,
      stem: 'How often are the pods picked from cacao trees?',
      key: ['Pods are typically harvested twice a year'],
      show: 'twice a year',
      accept: ['twice a year', 'two times a year'],
      paraphrase: 'how often are the pods picked ↔ are typically harvested（频率）',
      why: 'how often 问频率，harvested twice a year 直接回答。',
      trap: 'although the trees can produce pods all year round 是"全年都能结果"，不是采摘频率。'
    },
    {
      no: 'Q6', marks: 1,
      stem: 'Which part of the seed is kept after the roasting process?',
      key: ['known as the nib'],
      show: 'the nib',
      accept: ['nib', 'the nib'],
      paraphrase: 'the part … kept ↔ leaving behind the part known as',
      why: '外皮（outer shell）被去掉，留下的部分叫 the nib。',
      trap: '不要答 shell —— 那是被 remove 掉的部分。'
    },
    {
      no: 'Q7', marks: 2,
      stem: 'What changes are made to cocoa powder by a method that was invented in the 1880s? Give two details.',
      key: ['tastes more strongly of chocolate', 'makes it darker in colour'],
      show: 'tastes more strongly of chocolate（或 less bitter）；darker in colour',
      pts: [
        { label: '味道更像巧克力／没那么苦', need: ['tastes more strongly of chocolate', 'less bitter', 'stronger chocolate', 'less bitter taste'] },
        { label: '颜色更深', need: ['darker in colour', 'darker', 'darker colour'] }
      ],
      paraphrase: 'changes ↔ tastes more strongly / darker；invented in the 1880s ↔ developed in the 1880s',
      why: '两句并列：tastes more strongly of chocolate 与 makes it darker in colour，各 1 分。',
      trap: 'rather bitter in its natural state 是"改变之前"的状态，答 bitter 不得分。'
    },
    {
      no: 'Q8', marks: 1,
      stem: 'What is the recommended maximum time to keep chocolate frozen?',
      key: ['for up to eighteen months'],
      show: '(up to) 18 months',
      accept: ['18 months', 'eighteen months', 'up to 18 months'],
      paraphrase: 'recommended maximum time ↔ up to；keep frozen ↔ in a freezer',
      why: 'put it in a freezer for up to eighteen months 中的 up to 正是"最长"。',
      trap: '前面 24 hours 是"放冰箱冷藏"的时间，up to a year 是"密封常温"的保质期。'
    },
    {
      no: 'Q9', marks: 4,
      stem: 'What are the problems associated with cacao production? Give four details.',
      key: [
        'climate change is beginning to affect the growth',
        'trees take years to become productive',
        'can still be affected by black pod disease',
        'Cacao harvesting is labour intensive',
        'surprisingly small amount of cocoa mass'
      ],
      show: '任答四点：climate change；trees take years to become productive；black pod disease；labour-intensive / picked by hand；a very small amount of cocoa mass',
      pts: [
        { label: '气候变化影响生长', need: ['climate change'] },
        { label: '树要多年才结果（投入周期长）', need: ['take years to become productive', 'years to become productive', 'takes years'] },
        { label: '黑荚病', need: ['black pod disease', 'black pod'] },
        { label: '采摘靠人工／劳动密集', need: ['labour intensive', 'labor intensive', 'picked by hand', 'gathered by hand', 'by hand'] },
        { label: '每棵树产出可可膏极少', need: ['small amount of cocoa mass', 'little cocoa mass', 'small amount'] }
      ],
      paraphrase: 'problems ↔ affect / issue / affect / intensive / surprisingly small',
      why: '全文问题分散在 2–5 段：气候变化、结果周期长、黑荚病、人工采摘、产出量少，任答四点。',
      trap: '不要把"可可脂/可可粉的用途"当成问题；题目问的是 production 的困难。'
    }
  ],

  vocab: [
    { w: 'pollinate', pos: 'v.', lvl: 'C1', cn: '给……授粉', q: 'have to be pollinated' },
    { w: 'fertilise', pos: 'v.', lvl: 'C1', cn: '使受精；施肥', q: 'or fertilised' },
    { w: 'productive', pos: 'adj.', lvl: 'B2', cn: '有产出的；多产的', q: 'trees take years to become productive' },
    { w: 'substance', pos: 'n.', lvl: 'B2', cn: '物质', q: 'a milky-white substance' },
    { w: 'labour intensive', pos: 'adj.', lvl: 'C1', cn: '劳动密集的', q: 'Cacao harvesting is labour intensive' },
    { w: 'harvest', pos: 'v.', lvl: 'B2', cn: '收获；采摘', q: 'Pods are typically harvested twice a year' },
    { w: 'bitter', pos: 'adj.', lvl: 'B2', cn: '苦的', q: 'rather bitter in its natural state' },
    { w: 'edible', pos: 'adj.', lvl: 'C1', cn: '可食用的', q: 'keep your chocolate edible for up to a year' },
    { w: 'texture', pos: 'n.', lvl: 'C1', cn: '质地；口感', q: 'to help to preserve its texture' },
    { w: 'air-tight', pos: 'adj.', lvl: 'C1', cn: '密封的', q: 'kept in an air-tight container' },
    { w: 'decade', pos: 'n.', lvl: 'B2', cn: '十年', q: 'Cacao trees live for decades' }
  ],

  syntax: [
    {
      q: 'This is the exact opposite to coffee trees, which were originally found in Ethiopia in Africa, and then travelled westwards.',
      tags: ['非限制性定语从句', '对比结构'],
      parts: [
        { r: '主句', t: 'This is the exact opposite to coffee trees —— 这与咖啡树恰好相反' },
        { r: '定语从句', t: 'which were originally found in Ethiopia in Africa —— 咖啡树原产于非洲的埃塞俄比亚' },
        { r: '并列谓语', t: 'and then travelled westwards —— 然后向西传播' }
      ],
      cn: '这与咖啡树恰好相反：咖啡树最初生长在非洲的埃塞俄比亚，之后才向西传播。'
    },
    {
      q: 'A technique that is often used to process cocoa powder further was developed in the 1880s by a Dutch chemist.',
      tags: ['限制性定语从句', '被动语态', '主谓分隔'],
      parts: [
        { r: '主语', t: 'A technique —— 一种技术' },
        { r: '定语从句', t: 'that is often used to process cocoa powder further —— 常用来进一步加工可可粉的' },
        { r: '谓语', t: 'was developed in the 1880s by a Dutch chemist —— 由一位荷兰化学家在 1880 年代研发出来' }
      ],
      cn: '一种常用于进一步加工可可粉的技术，是 19 世纪 80 年代由一位荷兰化学家研发的。'
    },
    {
      q: 'He came up with a way of making cocoa powder so that it tastes more strongly of chocolate, as it is rather bitter in its natural state.',
      tags: ['so that 目的/结果状语从句', 'as 原因状语从句'],
      parts: [
        { r: '主句', t: 'He came up with a way of making cocoa powder —— 他想出了一种制作可可粉的方法' },
        { r: '结果状语', t: 'so that it tastes more strongly of chocolate —— 使其尝起来巧克力味更浓' },
        { r: '原因状语', t: 'as it is rather bitter in its natural state —— 因为它在自然状态下相当苦' }
      ],
      cn: '他想出了一种制作可可粉的方法，让它的巧克力味更浓，因为可可粉天然状态下相当苦。'
    },
    {
      q: 'Pods are typically harvested twice a year although the trees can produce pods all year round.',
      tags: ['让步状语从句'],
      parts: [
        { r: '主句', t: 'Pods are typically harvested twice a year —— 豆荚通常一年采收两次' },
        { r: '让步', t: 'although the trees can produce pods all year round —— 尽管这些树全年都能结荚' }
      ],
      cn: '尽管可可树全年都能结荚，豆荚通常每年只采收两次。'
    }
  ]
});
