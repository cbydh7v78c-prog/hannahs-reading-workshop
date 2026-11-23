/* 第 7 篇 · Ancient rock art in Colombia — 0510/22/O/N/23 Exercise 1 */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p07', no: 7, page: 13,
  paper: '0510/22/O/N/23', topic: 'Society', title: 'Ancient rock art in Colombia',
  intro: 'Read the article about some ancient rock art in a place called Serranía la Lindosa in Colombia, South America, and then answer the following questions.',

  paragraphs: [
    '‘There are thousands of these prehistoric paintings,’ the researcher said, pointing to a high rock wall covered with pictures of humans, animals and abstract patterns, all in the same reddish colour.',
    'I had joined some archaeologists studying ancient rock art in the Serranía la Lindosa mountains in Colombia. It’s thought that humans first settled in the region about 13000 years ago. Some of the paintings may have been created no more than 400 years ago, but it seems likely that others date back to 12500 years ago. ‘We have different ways of finding out how old the images are,’ one archaeologist told me. ‘We’ve found tools made of animal bone which we think were used by the people who did the paintings, and we know how to estimate the age of these tools. Also, there are some paintings that show animal species which died out about 12000 years ago – so they must’ve been painted before that.’ The archaeologist also described how her team had done tests on ancient fruit seeds found at the site. ‘People responsible for some of the paintings probably ate that fruit and the tests give us accurate information about the age of the seeds – which tells us how old the paintings are.’',
    'Some of the extinct animals painted on the rocks were huge; they include prehistoric relatives of elephants. This indicates that the region around the art-covered cliffs has changed considerably. Thousands of years ago, there were open grasslands – the best environment for large animals – rather than the thick jungle it has since become.',
    'Serranía la Lindosa is not very accessible; arriving by plane is not an option. Our journey there from the town of San José del Guaviare was supposed to be a two-hour drive, followed by a four-hour trek through the jungle. A flat tyre delayed us initially, however. Then, we were held up by flooding on the route through the jungle. But despite this, it was fascinating. The jungle was full of wildlife – including monkeys, birds and plants that we would later see illustrated in the rock art. There was one thing that I never felt very comfortable about, however. The crocodiles in the rivers were easy to avoid, but the jungle is home to very poisonous snakes, which I certainly didn’t want to meet.',
    'You could spend days staring at the rock paintings, but certain features stood out for me. I loved the pictures of prehistoric horses. They seemed very natural. What struck me more than anything, though, was how detailed they were. However, because these animals are now extinct, we can’t be sure how realistic the images are.',
    'Many of the paintings are high up on the cliffs. I asked a researcher how the painters got up there. ‘We’ve looked for the remains of ropes but haven’t found any,’ she said. ‘We’ve discovered fish bones, and analysis of them tells us a little about the painters’ diet and when they lived. But we now believe they climbed wooden towers to work. There are clues in a few paintings.’ She then pointed out pictures on the rock wall of large man-made structures.',
    'Some of the art shows human activity. As far as I’m aware, images of people actually involved in painting are yet to be found. There are some where human figures are clearly dancing, however. I don’t know if there are any scenes of everyday routines like toolmaking or cooking, although burnt wood has been found, showing they were able to make fires at the time. I also saw some paintings with individuals hunting. It’s a fascinating view into an ancient world.'
  ],

  questions: [
    {
      no: 'Q1', marks: 1,
      stem: 'When do experts think the oldest rock art at Serranía la Lindosa was made?',
      key: ['others date back to 12500 years ago'],
      show: '12 500 years ago',
      accept: ['12500 years ago', '12,500 years ago', '12500', '12 500 years ago', '12,500'],
      paraphrase: 'the oldest ↔ others（指比 400 年前更早的那些）；was made ↔ date back to',
      why: '文中给出两个时间：400 年前与 12500 年前，最古老的对应 date back to 12500 years ago。',
      trap: '13000 years ago 是"人类最早定居"的时间，不是画作年代；12000 年前是"动物灭绝"的时间。'
    },
    {
      no: 'Q2', marks: 1,
      stem: 'What was the surrounding area like when the early rock art was made?',
      key: ['there were open grasslands'],
      show: '(open) grasslands',
      accept: ['grasslands', 'open grasslands', 'grassland'],
      paraphrase: 'what was the area like ↔ there were open grasslands … rather than the thick jungle',
      why: 'Thousands of years ago, there were open grasslands —— 而不是现在这样的密林。',
      trap: 'thick jungle 是"现在"的样子，rather than 之后的内容要排除。'
    },
    {
      no: 'Q3', marks: 2,
      stem: 'What caused the writer to take longer than expected to reach Serranía la Lindosa? Give two details.',
      key: ['A flat tyre delayed us', 'held up by flooding'],
      show: 'a flat tyre；flooding',
      pts: [
        { label: '轮胎爆了（爆胎）', need: ['flat tyre', 'flat tire', 'tyre', 'tire', 'puncture'] },
        { label: '洪水／道路被淹', need: ['flooding', 'flood', 'floods'] }
      ],
      paraphrase: 'take longer than expected ↔ delayed us / held up',
      why: 'A flat tyre delayed us initially；Then, we were held up by flooding —— 两处延误各 1 分。',
      trap: 'two-hour drive、four-hour trek 是"原计划"的时长，不是延误原因。'
    },
    {
      no: 'Q4', marks: 1,
      stem: 'What did the writer feel anxious about during the journey to Serranía la Lindosa?',
      key: ['very poisonous snakes'],
      show: 'poisonous snakes',
      accept: ['poisonous snakes', 'snakes', 'snake', 'the poisonous snakes'],
      paraphrase: 'felt anxious ↔ never felt very comfortable about / didn’t want to meet',
      why: '作者说 jungle is home to very poisonous snakes, which I certainly didn’t want to meet。',
      trap: 'crocodiles 也说到了，但原文明确 easy to avoid，不构成焦虑。'
    },
    {
      no: 'Q5', marks: 1,
      stem: 'What impressed the writer most about the paintings of horses?',
      key: ['how detailed they were'],
      show: 'how detailed they were',
      accept: ['detailed', 'how detailed', 'the detail', 'detail', 'they were detailed'],
      paraphrase: 'impressed … most ↔ What struck me more than anything',
      why: 'What struck me more than anything, though, was how detailed they were —— 最打动他的是细节之精细。',
      trap: 'They seemed very natural 是"看起来自然"，不是 most impressed 的那一点。'
    },
    {
      no: 'Q6', marks: 1,
      stem: 'How do experts think the artists were able to paint high up on the rocks?',
      key: ['they climbed wooden towers to work'],
      show: 'they climbed wooden towers',
      accept: ['climbed wooden towers', 'wooden towers', 'towers', 'wooden tower'],
      paraphrase: 'were able to paint high up ↔ climbed … to work',
      why: 'We now believe they climbed wooden towers to work —— 研究者认为他们爬上木塔作画。',
      trap: 'ropes 是被找过但 haven’t found any 的，不是答案。'
    },
    {
      no: 'Q7', marks: 2,
      stem: 'What does the rock art show people doing? Give two details.',
      key: ['human figures are clearly dancing', 'paintings with individuals hunting'],
      show: 'dancing；hunting',
      pts: [
        { label: '跳舞', need: ['dancing', 'dance'] },
        { label: '打猎／狩猎', need: ['hunting', 'hunt'] }
      ],
      paraphrase: 'show people doing ↔ images of people / human figures are clearly …',
      why: '第 7 段明确提到 dancing 与 hunting 两种人物活动，各 1 分。',
      trap: 'toolmaking、cooking 原文说 I don’t know if there are any scenes of…，属于不确定信息。'
    },
    {
      no: 'Q8', marks: 4,
      stem: 'What evidence has helped experts to work out when the rock art was made? Give four details.',
      key: [
        'tools made of animal bone',
        'animal species which died out about 12000 years ago',
        'ancient fruit seeds found at the site',
        'We’ve discovered fish bones',
        'burnt wood has been found'
      ],
      show: '任答四点：tools made of animal bone；paintings of species that died out about 12 000 years ago；ancient fruit seeds；fish bones；burnt wood',
      pts: [
        { label: '兽骨制成的工具', need: ['tools made of animal bone', 'animal bone', 'bone tools', 'bones'] },
        { label: '画有约 12000 年前灭绝的动物', need: ['12000 years ago', '12,000 years ago', 'died out', 'extinct animals'] },
        { label: '古代果实的种子', need: ['fruit seeds', 'seeds', 'seed'] },
        { label: '鱼骨', need: ['fish bones', 'fish bone'] },
        { label: '烧过的木头（能生火）', need: ['burnt wood', 'burned wood', 'charcoal', 'wood'] }
      ],
      paraphrase: 'evidence ↔ we’ve found / tests on / analysis of',
      why: '证据分散在第 2、6、7 段：骨制工具、已灭绝动物的画、果籽、鱼骨、烧焦的木柴，任答四点。',
      trap: '“木塔的线索”也是证据，但官方给分点里用的是上述五项；不要写“绳子的痕迹”（原文说没找到）。'
    }
  ],

  vocab: [
    { w: 'prehistoric', pos: 'adj.', lvl: 'B2', cn: '史前的', q: 'thousands of these prehistoric paintings' },
    { w: 'abstract', pos: 'adj.', lvl: 'C1', cn: '抽象的', q: 'animals and abstract patterns' },
    { w: 'archaeologist', pos: 'n.', lvl: 'C1', cn: '考古学家', q: 'I had joined some archaeologists' },
    { w: 'estimate', pos: 'v.', lvl: 'B2', cn: '估计；估算', q: 'how to estimate the age of these tools' },
    { w: 'extinct', pos: 'adj.', lvl: 'C1', cn: '已灭绝的', q: 'Some of the extinct animals painted on the rocks' },
    { w: 'considerably', pos: 'adv.', lvl: 'C1', cn: '相当大的程度上', q: 'has changed considerably' },
    { w: 'accessible', pos: 'adj.', lvl: 'C1', cn: '可到达的；易接近的', q: 'is not very accessible' },
    { w: 'fascinating', pos: 'adj.', lvl: 'B2', cn: '极有吸引力的', q: 'it was fascinating' },
    { w: 'realistic', pos: 'adj.', lvl: 'C1', cn: '逼真的；写实的', q: 'how realistic the images are' },
    { w: 'man-made', pos: 'adj.', lvl: 'C1', cn: '人造的', q: 'large man-made structures' }
  ],

  syntax: [
    {
      q: 'We’ve found tools made of animal bone which we think were used by the people who did the paintings, and we know how to estimate the age of these tools.',
      tags: ['过去分词作定语', '定语从句嵌套', '插入语 we think', '宾语从句'],
      parts: [
        { r: '主句 1', t: 'We’ve found tools made of animal bone —— 我们找到了兽骨做的工具' },
        { r: '定语从句', t: 'which we think were used by the people who did the paintings —— 我们认为这些工具是作画者使用过的' },
        { r: '并列', t: 'and we know how to estimate the age of these tools —— 而且我们知道如何测定它们的年代' }
      ],
      cn: '我们找到了用兽骨制作的工具，我们认为这些工具是当年作画的人使用过的；我们也知道如何测定这些工具的年代。'
    },
    {
      q: 'Thousands of years ago, there were open grasslands – the best environment for large animals – rather than the thick jungle it has since become.',
      tags: ['插入语（同位语）', 'rather than 对比', '省略关系词的定语从句'],
      parts: [
        { r: '主句', t: 'there were open grasslands —— 那里是开阔的草原' },
        { r: '同位语', t: 'the best environment for large animals —— 大型动物最理想的栖息环境' },
        { r: '对比', t: 'rather than the thick jungle it has since become —— 而不是它后来变成的密林' }
      ],
      cn: '数千年前那里是开阔的草原——大型动物最理想的生存环境——而不是它后来变成的浓密丛林。'
    },
    {
      q: 'What struck me more than anything, though, was how detailed they were.',
      tags: ['主语从句', '表语从句', '插入语 though'],
      parts: [
        { r: '主语从句', t: 'What struck me more than anything —— 最让我震撼的' },
        { r: '插入语', t: 'though —— 不过' },
        { r: '表语从句', t: 'was how detailed they were —— 是它们精细到什么程度' }
      ],
      cn: '不过，最让我震撼的是这些画精细的程度。'
    },
    {
      q: 'I don’t know if there are any scenes of everyday routines like toolmaking or cooking, although burnt wood has been found, showing they were able to make fires at the time.',
      tags: ['宾语从句', '让步状语从句', '现在分词作伴随状语'],
      parts: [
        { r: '宾语从句', t: 'I don’t know if there are any scenes of everyday routines like toolmaking or cooking —— 我不知道是否有制工具、做饭这类日常场景' },
        { r: '让步', t: 'although burnt wood has been found —— 尽管发现了烧过的木头' },
        { r: '分词状语', t: 'showing they were able to make fires at the time —— 说明当时他们已能生火' }
      ],
      cn: '我不知道是否有制作工具或做饭这类日常场景，不过既然发现了烧焦的木头，说明当时他们已经会生火。'
    }
  ]
});
