/* 第 4 篇 · A dinosaur expert — 0510/21/O/N/20 Exercise 1 */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p04', no: 4, page: 7,
  paper: '0510/21/O/N/20', topic: 'Science / Animals', title: 'A dinosaur expert',
  intro: 'Read the article about a dinosaur expert called Paul Kearney, and then answer the following questions.',

  paragraphs: [
    'According to Paul Kearney, he and other dinosaur experts tend to agree that it’s about 65 million years since what is known as the Age of the Dinosaurs ended. It started around 215 million years ago, which means it lasted approximately 150 million years. The end came when a huge asteroid crashed into Earth and caused a series of natural disasters, which then led to massive environmental destruction and the disappearance of most dinosaur species.',
    'Kearney is keen to tell people about the latest thinking on dinosaurs. ‘At school, I was taught that they were all enormous. That was what everyone used to think. I was also told they were all stupid,’ he said. ‘But recent studies show something very different. Some were giants, but many were very small, and lots had large brains.’',
    'I arranged to meet Kearney in a valley in the countryside, where he and two colleagues were searching for fossils – the remains of dinosaur bones. ‘Most days when we go fossil-hunting, we get really extreme weather. You’re lucky today,’ he smiled. ‘It’s beautiful.’ He was right, the sky was blue and the sun warm. ‘Also, the ground here’s quite flat, but we normally go to very rocky locations,’ he explained.',
    'Kearney has discovered a total of 13 new dinosaur species in the last 20 years. ‘When I first started fossil-hunting,’ he said, ‘only about 5 previously unknown dinosaur species were found per year, but it’s around 50 these days. The thing is, fossil-hunting has become much more popular around the world.’',
    'I asked Kearney if he’d seen the Jurassic Park films. ‘Yes,’ he said. ‘I love them, though they’re not always very accurate. The dinosaurs are all green or brown – and that’s actually what people once assumed they were like. However, scientists have discovered that many dinosaurs had bright colours. Also, the Jurassic Park dinosaurs have scaly skin, like crocodiles, because experts used to think all dinosaurs had skin like that. But the truth is that many were covered in feathers, like birds. Anyway, the films are excellent entertainment. And the best thing for me is that they inspire many people to study dinosaurs.’',
    'Kearney told me how scientists are using new technology to make significant advances in dinosaur studies. ‘Scientists used to think that dinosaurs changed relatively quickly over time,’ he said. ‘However, data shows the opposite was true – dinosaur species changed very little over millions of years.’ Kearney himself was in charge of a team which used some new evidence to work out how certain types of dinosaur interacted with each other. ‘That study finished last year,’ he said, ‘but we’re beginning a new project next month looking at how dinosaurs moved. And before long, I’ll also be joining a team which is studying the food that different species ate. There’s so much going on.’',
    'Kearney thinks the future for dinosaur studies is very bright. ‘I give talks in schools and young people are very interested in dinosaurs,’ Kearney told me. ‘Many of them learn a lot about dinosaurs by visiting museums, though I always tell them to learn computer programming if they are serious about developing their interest into a career as it’s so essential in research.’',
    'A year ago, Kearney decided to write an up-to-date book about dinosaurs. ‘I didn’t want to write a kids’ book – there are plenty of them already,’ he said. As a parent myself, I knew this to be true. What I hadn’t expected him to tell me, though, is that hardly any are written for adults. Kearney’s recently published book, The Story of the Dinosaurs, should help to fill the gap.'
  ],

  questions: [
    {
      no: 'Q1', marks: 1,
      stem: 'When did the Age of the Dinosaurs begin?',
      key: ['It started around 215 million years ago'],
      show: '(around) 215 million years ago',
      accept: ['215 million years ago', '215 million', 'around 215 million years ago'],
      paraphrase: 'begin ↔ It started',
      why: '第 1 段先说 65 million years since … ended，紧接着 It started around 215 million years ago 回答"开始"的时间。',
      trap: '65 million 是"结束"时间，150 million 是"持续时长"，三个数字最易混。'
    },
    {
      no: 'Q2', marks: 2,
      stem: 'What conditions does Kearney generally work in when he’s looking for dinosaur remains? Give two details.',
      key: ['we get really extreme weather', 'we normally go to very rocky locations'],
      show: 'extreme weather；rocky locations',
      pts: [
        { label: '极端天气', need: ['extreme weather', 'weather'] },
        { label: '多岩石的地点', need: ['rocky', 'rocky locations'] }
      ],
      paraphrase: 'conditions … generally work in ↔ most days / normally（注意 generally 对应一般情况）',
      why: 'Most days … we get really extreme weather 与 we normally go to very rocky locations，两点各 1 分。',
      trap: 'flat ground、blue sky、warm sun 都是"今天"的特殊情况，题目问 generally，不能用。'
    },
    {
      no: 'Q3', marks: 1,
      stem: 'How many new species of dinosaur are now discovered each year?',
      key: ['it’s around 50 these days'],
      show: '(around) 50',
      accept: ['50', 'fifty', 'around 50', 'about 50'],
      paraphrase: 'now ↔ these days；each year ↔ per year',
      why: 'now = these days，数量是 around 50。',
      trap: 'about 5 是"他刚入行时"的数字，13 是他个人发现的总数。'
    },
    {
      no: 'Q4', marks: 1,
      stem: 'What does Kearney like most about the Jurassic Park films?',
      key: ['they inspire many people to study dinosaurs'],
      show: 'they inspire people to study dinosaurs',
      accept: ['inspire people to study dinosaurs', 'inspire many people to study dinosaurs', 'inspire people', 'inspire'],
      paraphrase: 'like most ↔ the best thing for me is',
      why: 'the best thing for me is that they inspire many people to study dinosaurs —— 最高级对应 like most。',
      trap: 'excellent entertainment 是他对电影的整体评价，不是 the best thing。'
    },
    {
      no: 'Q5', marks: 2,
      stem: 'Which two areas of research will Kearney soon start working on? Give two details.',
      key: ['looking at how dinosaurs moved', 'studying the food that different species ate'],
      show: 'how dinosaurs moved；the food different species ate',
      pts: [
        { label: '恐龙如何移动', need: ['how dinosaurs moved', 'dinosaurs moved', 'how they moved'] },
        { label: '不同物种吃什么', need: ['food that different species ate', 'what dinosaurs ate', 'food different species', 'the food'] }
      ],
      paraphrase: 'soon start working on ↔ next month / before long',
      why: 'next month 的新项目 looking at how dinosaurs moved；before long 加入 studying the food that different species ate。',
      trap: 'how certain types of dinosaur interacted 是"去年已完成"的研究，不是即将开始的。'
    },
    {
      no: 'Q6', marks: 1,
      stem: 'What advice does Kearney give to students who want to become dinosaur experts?',
      key: ['learn computer programming'],
      show: 'learn computer programming',
      accept: ['learn computer programming', 'computer programming', 'learn programming', 'study computer programming', 'learn to program'],
      paraphrase: 'give advice ↔ I always tell them to',
      why: 'I always tell them to learn computer programming if they are serious about developing their interest into a career。',
      trap: 'visiting museums 是学生"已经在做"的事，不是他的建议。'
    },
    {
      no: 'Q7', marks: 1,
      stem: 'What was the writer surprised to find out about dinosaur books?',
      key: ['hardly any are written for adults'],
      show: 'hardly any are written for adults',
      accept: ['hardly any are written for adults', 'few are written for adults', 'hardly any for adults', 'hardly any books for adults', 'not many for adults'],
      paraphrase: 'was surprised ↔ What I hadn’t expected',
      why: 'What I hadn’t expected him to tell me … is that hardly any are written for adults。',
      trap: 'plenty of kids’ books 是大家都知道的事实，不是让作者意外的点。'
    },
    {
      no: 'Q8', marks: 4,
      stem: 'What facts did people use to believe about dinosaurs that scientists now know are wrong? Give four details.',
      key: [
        'they were all enormous',
        'they were all stupid',
        'The dinosaurs are all green or brown',
        'have scaly skin, like crocodiles',
        'dinosaurs changed relatively quickly over time'
      ],
      show: '任答四点：all enormous / giants；all stupid / small brains；green or brown；scaly skin (like crocodiles)；changed quickly',
      pts: [
        { label: '全都巨大', need: ['enormous', 'giants', 'huge', 'very big'] },
        { label: '全都愚蠢／脑子小', need: ['stupid', 'small brains', 'not intelligent'] },
        { label: '只有绿色或棕色', need: ['green or brown', 'green and brown', 'brown'] },
        { label: '皮肤像鳄鱼一样有鳞', need: ['scaly', 'crocodiles', 'scales'] },
        { label: '进化变化很快', need: ['changed relatively quickly', 'changed quickly', 'changed fast', 'quickly'] }
      ],
      paraphrase: 'people used to believe ↔ everyone used to think / people once assumed / experts used to think',
      why: '五处"过去的错误认知"分布在 2、5、6 段，任答四点，每点 1 分。',
      trap: '不要写"很多有小脑子/大脑袋""有羽毛""颜色鲜艳"等现在的正确结论，题目问的是过去的错误看法。'
    }
  ],

  vocab: [
    { w: 'approximately', ipa: '/əˈprɒksɪmətli/', pos: 'adv.', lvl: 'B2', cn: '大约；大概', q: 'it lasted approximately 150 million years' },
    { w: 'destruction', ipa: '/dɪˈstrʌkʃn/', pos: 'n.', lvl: 'C1', cn: '毁灭；破坏', q: 'massive environmental destruction' },
    { w: 'fossil', ipa: '/ˈfɒsl/', pos: 'n.', lvl: 'B2', cn: '化石', q: 'searching for fossils' },
    { w: 'previously', ipa: '/ˈpriːviəsli/', pos: 'adv.', lvl: 'B2', cn: '先前；以前', q: '5 previously unknown dinosaur species' },
    { w: 'accurate', ipa: '/ˈækjərət/', pos: 'adj.', lvl: 'B2', cn: '准确的；符合事实的', q: 'they’re not always very accurate' },
    { w: 'assume', ipa: '/əˈsjuːm/', pos: 'v.', lvl: 'C1', cn: '假定；想当然地认为', q: 'what people once assumed they were like' },
    { w: 'scaly', ipa: '/ˈskeɪli/', pos: 'adj.', lvl: 'C1', cn: '有鳞的', q: 'have scaly skin, like crocodiles' },
    { w: 'significant', ipa: '/sɪɡˈnɪfɪkənt/', pos: 'adj.', lvl: 'B2', cn: '重大的；显著的', q: 'make significant advances in dinosaur studies' },
    { w: 'interact', ipa: '/ˌɪntərˈækt/', pos: 'v.', lvl: 'C1', cn: '互动；相互作用', q: 'how certain types of dinosaur interacted with each other' },
    { w: 'essential', ipa: '/ɪˈsenʃl/', pos: 'adj.', lvl: 'B2', cn: '必不可少的', q: 'as it’s so essential in research' }
  ],

  syntax: [
    {
      q: 'The end came when a huge asteroid crashed into Earth and caused a series of natural disasters, which then led to massive environmental destruction and the disappearance of most dinosaur species.',
      tags: ['时间状语从句', '非限制性定语从句', '因果链条'],
      parts: [
        { r: '主句', t: 'The end came —— 终结来临' },
        { r: '时间状语', t: 'when a huge asteroid crashed into Earth and caused a series of natural disasters —— 当一颗巨大行星撞上地球，引发一连串自然灾害' },
        { r: '定语从句', t: 'which then led to massive environmental destruction and the disappearance of most dinosaur species —— 进而导致环境大规模破坏、大多数恐龙物种消失' }
      ],
      cn: '终结发生在一颗巨大的小行星撞击地球、引发一连串自然灾害之时，这些灾害进而造成环境的大规模破坏与大多数恐龙物种的消失。'
    },
    {
      q: 'Kearney himself was in charge of a team which used some new evidence to work out how certain types of dinosaur interacted with each other.',
      tags: ['定语从句', '宾语从句', '不定式表目的'],
      parts: [
        { r: '主句', t: 'Kearney himself was in charge of a team —— 科尔尼本人负责一个团队' },
        { r: '定语从句', t: 'which used some new evidence to work out —— 该团队用一些新证据来推算出' },
        { r: '宾语从句', t: 'how certain types of dinosaur interacted with each other —— 某些恐龙之间如何相互作用' }
      ],
      cn: '科尔尼本人负责一个团队，该团队利用一些新证据推算出某些种类的恐龙之间是如何互动的。'
    },
    {
      q: 'What I hadn’t expected him to tell me, though, is that hardly any are written for adults.',
      tags: ['主语从句', '表语从句', '插入语 though'],
      parts: [
        { r: '主语从句', t: 'What I hadn’t expected him to tell me —— 我没料到他告诉我的事' },
        { r: '插入语', t: 'though —— 不过（表转折）' },
        { r: '表语从句', t: 'is that hardly any are written for adults —— 是几乎没有一本是写给成人的' }
      ],
      cn: '不过，我没料到他会告诉我的是：几乎没有一本恐龙书是写给成年人看的。'
    },
    {
      q: 'Many of them learn a lot about dinosaurs by visiting museums, though I always tell them to learn computer programming if they are serious about developing their interest into a career',
      tags: ['让步状语从句', '条件状语从句', 'tell sb to do'],
      parts: [
        { r: '让步', t: 'Many of them learn a lot about dinosaurs by visiting museums —— 很多年轻人通过参观博物馆了解恐龙' },
        { r: '主句', t: 'though I always tell them to learn computer programming —— 但我总是让他们学编程' },
        { r: '条件', t: 'if they are serious about developing their interest into a career —— 如果真想把兴趣发展成职业' }
      ],
      cn: '很多年轻人通过参观博物馆了解恐龙，但我总是告诉他们：如果真想把兴趣变成职业，就去学计算机编程。'
    }
  ]
});
