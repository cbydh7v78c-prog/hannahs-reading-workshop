/* 第 9 篇 · Zebras and their stripes — 0510/21/M/J/22 Exercise 1 */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p09', no: 9, page: 17,
  paper: '0510/21/M/J/22', topic: 'Science / Animals', title: 'Zebras and their stripes',
  intro: 'Read the blog article written by a student about her project on zebras, and then answer the following questions.',

  paragraphs: [
    'I’ve always wondered why zebras have stripes, so I decided to do a school project to find out. Before I started it, I knew that zebras are members of the horse family, which consists of seven different kinds of animals including horses and donkeys. And the three species of zebra, which live in Africa, are the only members of the horse family with stripes. Horses and zebras have many things in common, like diet and family living. However, zebras are naturally more aggressive, which means that humans tend to avoid them. And unlike horses, they bark to warn other family members of danger. I already knew these things, but my project was an opportunity to learn more.',
    'The first thing I discovered was that the striped pattern of each zebra is unique, which is amazing if you consider the number of zebras in the world. And they’re actually born with brown and white stripes, not black and white, something I hadn’t expected to learn. To understand more about the stripes, I decided to read about two scientific experiments.',
    'The first was in 2019, investigating why flies tend not to bite zebras. Zebra hair is short and thin, so in theory flies can easily bite their skin, but don’t for some reason. Professor Caro from the University of California, USA, wanted to find out why. Although he had studied zebras extensively in Tanzania, he chose to study a group of zebras in the UK. You might think that he would prefer to study animals in their natural environment, but these zebras were part of a wildlife conservation programme and so were used to humans approaching them. Professor Caro filmed close-up images of how flies behaved around the zebras and whether they landed on the animals or flew past. He then dressed a group of domestic horses in striped jackets and observed the flies’ behaviour in the same way, and then repeated this with plain-coloured horses without any jackets.',
    'The results were clear. All three groups – the zebras, the horses in striped jackets, and the plain horses with no jackets – experienced a similar number of flies around them. However, far fewer flies landed on the zebras and on the horses with striped jackets. Instead, the insects approaching these animals just bounced off, whereas the flies around the plain horses managed to land. This proved to Professor Caro that zebras’ stripes prevent them from being bitten by flies. Some farmers paint stripes onto cows for the same reason – I’ve actually seen some in a field near my house. My dad told me that it allows them to feed without interruption. He also told me that painting the cows improves their welfare. I’m not sure how many farmers do this though!',
    'The second experiment I read about was carried out by a former biology technician called Alison Cobb. She’d worked in Africa for many years and had been fascinated by zebras ever since reading stories about African animals as a child. Cobb believed that the function of the stripes was to keep zebras cool. I’d heard this before, but some of her detailed findings, such as the way the black hairs move up and down in the heat, I found remarkable. In her experiment, Cobb measured the temperature of zebras’ stripes every 15 minutes. She discovered that the black stripes get much hotter than the white ones – something that had never occurred to me before – and, astonishingly, zebras actually sweat through the ends of their hairs!',
    'After doing my project, I definitely know a lot more about zebras than I did before!'
  ],

  questions: [
    {
      no: 'Q1', marks: 1,
      stem: 'How many types of zebra are there?',
      key: ['the three species of zebra'],
      show: 'three / 3',
      accept: ['three', '3', 'three species', '3 species'],
      paraphrase: 'types ↔ species',
      why: 'the three species of zebra, which live in Africa —— 三种斑马。',
      trap: 'seven 是"马科动物共七种"，不是斑马的种类数。'
    },
    {
      no: 'Q2', marks: 2,
      stem: 'How is zebra behaviour different from horse behaviour? Give two details.',
      key: ['naturally more aggressive', 'they bark to warn other family members'],
      show: 'more aggressive；they bark (to warn others)',
      pts: [
        { label: '天性更好斗', need: ['more aggressive', 'aggressive'] },
        { label: '会"叫"（bark）来警告同伴', need: ['bark', 'warn other family members', 'warn others'] }
      ],
      paraphrase: 'behaviour different from horses ↔ However / unlike horses',
      why: '两点对比：zebras are naturally more aggressive；unlike horses, they bark to warn … 各 1 分。',
      trap: 'diet and family living 是"相同点"，题目问的是不同点。'
    },
    {
      no: 'Q3', marks: 1,
      stem: 'Where did Professor Caro’s experiment take place?',
      key: ['he chose to study a group of zebras in the UK'],
      show: 'the UK',
      accept: ['uk', 'the uk', 'britain', 'england', 'united kingdom', 'in the uk'],
      paraphrase: 'the experiment take place ↔ chose to study a group of zebras in …',
      why: 'Although he had studied zebras … in Tanzania, he chose to study a group of zebras in the UK —— 这次实验在英国。',
      trap: 'Tanzania 是他"以前"研究的地方；加州大学是他的单位。'
    },
    {
      no: 'Q4', marks: 1,
      stem: 'Why were the zebras in the wildlife conservation programme suitable for Professor Caro’s study?',
      key: ['used to humans approaching them'],
      show: 'they were used to humans approaching them',
      accept: ['used to humans approaching', 'used to humans', 'humans approaching', 'used to people', 'accustomed to humans'],
      paraphrase: 'suitable ↔ so were used to …（so 引出结果/原因）',
      why: '这些斑马属于野生动物保护项目，所以习惯了人类靠近，便于拍摄研究。',
      trap: 'natural environment 是"你可能会以为"的想法，原文用 You might think 引出并被 but 否定。'
    },
    {
      no: 'Q5', marks: 1,
      stem: 'What happened when the flies in Professor Caro’s study tried to land on the animals with stripes?',
      key: ['just bounced off'],
      show: 'they bounced off',
      accept: ['bounced off', 'bounced', 'bounce off', 'they bounced off'],
      paraphrase: 'tried to land ↔ approaching these animals；what happened ↔ just bounced off',
      why: 'the insects approaching these animals just bounced off —— 苍蝇被弹开，落不下去。',
      trap: 'managed to land 是"没有条纹的纯色马"的情况，形成对比。'
    },
    {
      no: 'Q6', marks: 2,
      stem: 'What are the benefits of protecting cows from being bitten by flies? Give two details.',
      key: ['allows them to feed without interruption', 'improves their welfare'],
      show: 'they can feed without interruption；it improves their welfare',
      pts: [
        { label: '能不受打扰地进食', need: ['feed without interruption', 'without interruption', 'feed', 'eat without interruption'] },
        { label: '改善动物福利（生活状况）', need: ['welfare', 'improves their welfare'] }
      ],
      paraphrase: 'benefits ↔ allows them to … / improves …',
      why: '爸爸说的两点：allows them to feed without interruption；improves their welfare。',
      trap: 'paint stripes onto cows 是"做法"，不是"好处"。'
    },
    {
      no: 'Q7', marks: 1,
      stem: 'What first inspired Alison Cobb’s interest in zebras?',
      key: ['reading stories about African animals as a child'],
      show: 'stories about African animals (as a child)',
      accept: ['stories about african animals', 'reading about african animals', 'african animals', 'stories'],
      paraphrase: 'first inspired ↔ ever since … as a child',
      why: 'had been fascinated by zebras ever since reading stories about African animals as a child。',
      trap: 'worked in Africa for many years 是"后来的经历"，不是最初的兴趣来源。'
    },
    {
      no: 'Q8', marks: 4,
      stem: 'What facts about zebras was the writer surprised to learn while doing her project? Give four details.',
      key: [
        'striped pattern of each zebra is unique',
        'born with brown and white stripes',
        'black hairs move up and down in the heat',
        'black stripes get much hotter than the white ones',
        'sweat through the ends of their hairs'
      ],
      show: '任答四点：each zebra’s pattern is unique；born with brown and white stripes；black hairs move up and down in the heat；black stripes get hotter than white ones；they sweat through the ends of their hairs',
      pts: [
        { label: '每只斑马的花纹都独一无二', need: ['unique', 'pattern of each zebra'] },
        { label: '出生时是棕白条纹而非黑白', need: ['brown and white', 'brown', 'born with'] },
        { label: '黑色毛在受热时上下移动', need: ['move up and down', 'up and down', 'hairs move'] },
        { label: '黑条纹比白条纹热得多', need: ['much hotter', 'hotter', 'black stripes get'] },
        { label: '通过毛的末端出汗', need: ['sweat', 'ends of their hairs', 'hairs'] }
      ],
      paraphrase: 'was surprised to learn ↔ which is amazing / I hadn’t expected / I found remarkable / never occurred to me / astonishingly',
      why: '五处"意外发现"的信号词很明确（amazing / hadn’t expected / remarkable / never occurred to me / astonishingly），任答四点。',
      trap: 'three species、more aggressive 是她"做项目前就知道"的，不算 surprised。'
    }
  ],

  vocab: [
    { w: 'species', ipa: '/ˈspiːʃiːz/', pos: 'n.', lvl: 'B2', cn: '物种（单复数同形）', q: 'the three species of zebra' },
    { w: 'aggressive', ipa: '/əˈɡresɪv/', pos: 'adj.', lvl: 'B2', cn: '好斗的；有攻击性的', q: 'zebras are naturally more aggressive' },
    { w: 'extensively', ipa: '/ɪkˈstensɪvli/', pos: 'adv.', lvl: 'C1', cn: '广泛地；大量地', q: 'he had studied zebras extensively in Tanzania' },
    { w: 'conservation', ipa: '/ˌkɒnsəˈveɪʃn/', pos: 'n.', lvl: 'B2', cn: '保护（野生动植物）', q: 'part of a wildlife conservation programme' },
    { w: 'domestic', ipa: '/dəˈmestɪk/', pos: 'adj.', lvl: 'C1', cn: '家养的；驯养的', q: 'a group of domestic horses' },
    { w: 'welfare', ipa: '/ˈwelfeə/', pos: 'n.', lvl: 'C1', cn: '福利；福祉', q: 'painting the cows improves their welfare' },
    { w: 'technician', ipa: '/tekˈnɪʃn/', pos: 'n.', lvl: 'C1', cn: '技术员', q: 'a former biology technician' },
    { w: 'fascinated', ipa: '/ˈfæsɪneɪtɪd/', pos: 'adj.', lvl: 'C1', cn: '着迷的', q: 'had been fascinated by zebras' },
    { w: 'remarkable', ipa: '/rɪˈmɑːkəbl/', pos: 'adj.', lvl: 'C1', cn: '引人注目的；不寻常的', q: 'I found remarkable' },
    { w: 'astonishingly', ipa: '/əˈstɒnɪʃɪŋli/', pos: 'adv.', lvl: 'C1', cn: '令人惊讶地', q: 'astonishingly, zebras actually sweat' }
  ],

  syntax: [
    {
      q: 'Zebra hair is short and thin, so in theory flies can easily bite their skin, but don’t for some reason.',
      tags: ['so 结果连词', '转折 but', '承前省略'],
      parts: [
        { r: '原因', t: 'Zebra hair is short and thin —— 斑马的毛又短又细' },
        { r: '结果', t: 'so in theory flies can easily bite their skin —— 理论上苍蝇很容易咬到它们的皮肤' },
        { r: '转折 + 省略', t: 'but don’t for some reason —— 但不知为何并不咬（承前省略 bite their skin）' }
      ],
      cn: '斑马的毛又短又细，理论上苍蝇很容易叮到它们的皮肤，但不知为何苍蝇就是不叮。'
    },
    {
      q: 'You might think that he would prefer to study animals in their natural environment, but these zebras were part of a wildlife conservation programme and so were used to humans approaching them.',
      tags: ['宾语从句', '转折 but', 'be used to doing'],
      parts: [
        { r: '让步性铺垫', t: 'You might think that he would prefer to study animals in their natural environment —— 你也许以为他更愿意在自然环境里研究动物' },
        { r: '事实 1', t: 'but these zebras were part of a wildlife conservation programme —— 但这些斑马属于野生动物保护项目' },
        { r: '事实 2', t: 'and so were used to humans approaching them —— 因此习惯了人类靠近' }
      ],
      cn: '你也许以为他更愿意在动物的自然栖息地做研究，但这些斑马属于一个野生动物保护项目，所以已经习惯了人类靠近。'
    },
    {
      q: 'All three groups – the zebras, the horses in striped jackets, and the plain horses with no jackets – experienced a similar number of flies around them.',
      tags: ['同位语插入', '主谓分隔'],
      parts: [
        { r: '主语', t: 'All three groups —— 三组动物' },
        { r: '同位语', t: 'the zebras, the horses in striped jackets, and the plain horses with no jackets —— 斑马、穿条纹外套的马、没穿外套的纯色马' },
        { r: '谓语', t: 'experienced a similar number of flies around them —— 周围苍蝇数量相近' }
      ],
      cn: '三组动物——斑马、穿条纹外套的马、以及没穿外套的纯色马——身边的苍蝇数量都差不多。'
    },
    {
      q: 'She’d worked in Africa for many years and had been fascinated by zebras ever since reading stories about African animals as a child.',
      tags: ['过去完成时', 'ever since + 动名词', '介词短语作时间状语'],
      parts: [
        { r: '并列 1', t: 'She’d worked in Africa for many years —— 她在非洲工作多年' },
        { r: '并列 2', t: 'and had been fascinated by zebras —— 并且一直对斑马着迷' },
        { r: '时间起点', t: 'ever since reading stories about African animals as a child —— 自童年读到非洲动物的故事起' }
      ],
      cn: '她在非洲工作了很多年，而她对斑马的着迷，始于童年时读到的那些非洲动物故事。'
    }
  ]
});
