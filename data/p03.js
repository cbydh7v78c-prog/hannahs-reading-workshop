/* 第 3 篇 · A message from the past — 0510/22/M/J/20 Exercise 1 */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p03', no: 3, page: 5,
  paper: '0510/22/M/J/20', topic: 'Society', title: 'A message from the past',
  intro: 'Read the article about a woman who discovered an old message inside a bottle, and then answer the following questions.',

  paragraphs: [
    'The idea of throwing a message in a bottle into the sea and hoping someone far away will read it one day is exciting. Where will it land? Who will find it? When? One Australian family found the answers to these questions while on a day out on a remote beach near the city of Perth.',
    'Tonya Illman and her family had all been swimming. While her husband was packing the car, she was picking up some rubbish when she saw an old bottle sticking out of the sand. She thought it would look nice on her bookshelf so she showed it to her son, who commented that it looked like one they had in their living room. They noticed something inside that looked like an old cigarette. Tonya shook it out and realised it was a rolled-up piece of paper, tied with string for protection. Although not much water had got in, the paper was still damp. Tonya was tempted to unroll it and let it dry in the hot sun, but decided to take it home and put it in a cool oven instead.',
    'Later, when she opened up the paper, Tonya was astonished to see that it was a form printed in German. The bottle’s thick glass meant the form had avoided exposure to the weather. She was really excited when she saw the date that had been filled in – 12 June 1886! The family looked online and found that the oldest message in a bottle dated from 1906 and was found in 2015. Tonya’s message was 20 years older, which was a new world record!',
    'The information on the form stated that the bottle had been thrown from a ship called Paula that was originally from Germany. It was heading from Wales to its destination in Indonesia. The form requested that anyone finding the bottle should contact the nearest German embassy with details of their discovery. Tonya’s family weren’t sure whether the form was genuine so they decided to take the bottle and its contents to the Western Australian Museum.',
    'After carefully examining the form, the museum staff told the family that it was in good condition for its age. They believed it had been buried in the sand for over a century, which had kept it safe, until a huge storm had most likely uncovered it.',
    'The museum contacted experts in Germany, who were able to check the captain’s diary from the ship Paula. The diary described the ship’s location when the bottle was thrown into the sea. Amazingly, this corresponded exactly with the location given on the form from the bottle! The diary had been handwritten by the captain, who gave his name as Captain O. Diekmann. Even more exciting was the fact that although there was no name given, the captain’s handwriting in the diary was identical to the handwriting on the form. This was final proof that the message in the bottle was indeed genuine.',
    'The museum explained that in the nineteenth century, German ships were conducting tests to study the movement of ocean currents. In order to do this, hundreds of bottles were thrown into the ocean. Each bottle contained a form with the ship’s name, the date, and the place where the bottle was dropped, with the hope that someone would report where it was found. The experiment lasted 69 years, and 662 bottles have been returned so far. Tonya’s bottle is the oldest – at least until the next one is discovered...'
  ],

  questions: [
    {
      no: 'Q1', marks: 1,
      stem: 'What was Tonya Illman doing when she found the bottle?',
      key: ['picking up some rubbish'],
      show: 'picking up rubbish',
      accept: ['picking up rubbish', 'picking up some rubbish', 'collecting rubbish', 'picking up litter', 'collecting litter'],
      paraphrase: 'what was she doing ↔ she was picking up … when she saw',
      why: 'While her husband was packing the car, she was picking up some rubbish when she saw an old bottle。',
      trap: 'swimming 是全家人"之前"做的事；packing the car 是丈夫在做的。'
    },
    {
      no: 'Q2', marks: 1,
      stem: 'Where did Tonya plan to display the bottle when she got home?',
      key: ['look nice on her bookshelf'],
      show: '(on her) bookshelf',
      accept: ['bookshelf', 'her bookshelf', 'on her bookshelf', 'book shelf'],
      paraphrase: 'display ↔ look nice on；when she got home ↔ take it home',
      why: 'She thought it would look nice on her bookshelf —— 打算摆在书架上。',
      trap: 'living room 是"儿子说家里也有一个"的那只瓶子所在处，不是她的计划。'
    },
    {
      no: 'Q3', marks: 1,
      stem: 'How did Tonya dry the piece of paper?',
      key: ['put it in a cool oven'],
      show: '(put it) in a cool oven',
      accept: ['oven', 'cool oven', 'in a cool oven', 'in the oven'],
      paraphrase: 'dry ↔ let it dry；how ↔ put it in a cool oven',
      why: '她本来想 unroll it and let it dry in the hot sun，但最后 decided to … put it in a cool oven instead。',
      trap: 'in the hot sun 是她"想过但没做"的方式，instead 一词是关键信号。'
    },
    {
      no: 'Q4', marks: 1,
      stem: 'What year was written on the form?',
      key: ['12 June 1886'],
      show: '1886',
      accept: ['1886'],
      paraphrase: 'the date that had been filled in ↔ written on the form',
      why: 'the date that had been filled in – 12 June 1886，年份即 1886。',
      trap: '1906 和 2015 是"此前最古老漂流瓶"的年份，属于对比信息。'
    },
    {
      no: 'Q5', marks: 1,
      stem: 'Where was the ship travelling to?',
      key: ['its destination in Indonesia'],
      show: 'Indonesia',
      accept: ['indonesia'],
      paraphrase: 'travelling to ↔ was heading from Wales to its destination',
      why: 'It was heading from Wales to its destination in Indonesia —— 目的地是印度尼西亚。',
      trap: 'Wales 是出发地，Germany 是船的注册地，都不是目的地。'
    },
    {
      no: 'Q6', marks: 1,
      stem: 'What was the person who found the form asked to do?',
      key: ['contact the nearest German embassy'],
      show: 'contact the nearest German embassy',
      accept: ['contact the nearest german embassy', 'german embassy', 'contact the embassy', 'contact embassy'],
      paraphrase: 'was asked to do ↔ the form requested that … should …',
      why: '表格要求发现者 contact the nearest German embassy with details of their discovery。',
      trap: '在表格上填写发现地点的是"扔瓶子的人"，不是发现者要做的事。'
    },
    {
      no: 'Q7', marks: 2,
      stem: 'Which two details in the ship’s diary matched those on the form?',
      key: ['The diary described the ship’s location', 'handwriting in the diary was identical'],
      show: 'the ship’s location；the captain’s handwriting',
      pts: [
        { label: '船只（投放瓶子时）的位置', need: ['location', 'ship’s location', 'place'] },
        { label: '船长的笔迹', need: ['handwriting', 'captain’s handwriting'] }
      ],
      paraphrase: 'matched ↔ corresponded exactly with / was identical to',
      why: '日记里的 ship’s location 与表格完全一致；船长的 handwriting 也与表格上的笔迹相同，两点各 1 分。',
      trap: '船长的名字（Captain O. Diekmann）虽然提到，但表格上没有名字，所以不算"相符的细节"。'
    },
    {
      no: 'Q8', marks: 1,
      stem: 'What was the purpose of the German experiment?',
      key: ['study the movement of ocean currents'],
      show: 'to study (the movement of) ocean currents',
      accept: ['study ocean currents', 'study the movement of ocean currents', 'ocean currents', 'study currents', 'the movement of ocean currents'],
      paraphrase: 'purpose ↔ conducting tests to study',
      why: 'German ships were conducting tests to study the movement of ocean currents。',
      trap: '662 bottles、69 years 是实验的规模与时长，不是目的。'
    },
    {
      no: 'Q9', marks: 4,
      stem: 'Why was the form so well preserved? Give four reasons.',
      key: [
        'tied with string',
        'not much water had got in',
        'The bottle’s thick glass',
        'avoided exposure to the weather',
        'buried in the sand'
      ],
      show: '任答四点：buried in the sand；tied with string；not much water had got in；the bottle’s thick glass；avoided exposure to the weather',
      pts: [
        { label: '被埋在沙里（隔绝外界）', need: ['buried in the sand', 'in the sand', 'buried'] },
        { label: '用绳子捆住', need: ['tied with string', 'string', 'tied'] },
        { label: '几乎没有进水', need: ['not much water', 'little water', 'water had got in'] },
        { label: '瓶身玻璃很厚', need: ['thick glass', 'glass'] },
        { label: '避免暴露在天气中', need: ['exposure to the weather', 'weather'] }
      ],
      paraphrase: 'well preserved ↔ in good condition / kept it safe / avoided exposure',
      why: '原因分散在 2、3、5 段：绳子捆扎、进水很少、玻璃厚、隔绝天气、埋在沙中，任答四点。',
      trap: '不要答"纸是 1886 年的""博物馆保管得好"，这些都不是原文给出的保存原因。'
    }
  ],

  vocab: [
    { w: 'remote', ipa: '/rɪˈməʊt/', pos: 'adj.', lvl: 'B2', cn: '偏远的；人迹罕至的', q: 'a remote beach near the city of Perth' },
    { w: 'damp', ipa: '/dæmp/', pos: 'adj.', lvl: 'C1', cn: '潮湿的（不滴水）', q: 'the paper was still damp' },
    { w: 'tempted', ipa: '/ˈtemptɪd/', pos: 'adj.', lvl: 'C1', cn: '很想（做某事）的', q: 'Tonya was tempted to unroll it' },
    { w: 'astonished', ipa: '/əˈstɒnɪʃt/', pos: 'adj.', lvl: 'B2', cn: '十分惊讶的', q: 'Tonya was astonished to see' },
    { w: 'exposure', ipa: '/ɪkˈspəʊʒə/', pos: 'n.', lvl: 'C1', cn: '暴露（于某种环境）', q: 'avoided exposure to the weather' },
    { w: 'genuine', ipa: '/ˈdʒenjuɪn/', pos: 'adj.', lvl: 'C1', cn: '真的；非伪造的', q: 'whether the form was genuine' },
    { w: 'correspond', ipa: '/ˌkɒrəˈspɒnd/', pos: 'v.', lvl: 'C1', cn: '相符；一致', q: 'this corresponded exactly with the location' },
    { w: 'identical', ipa: '/aɪˈdentɪkl/', pos: 'adj.', lvl: 'B2', cn: '完全相同的', q: 'was identical to the handwriting on the form' },
    { w: 'current', ipa: '/ˈkʌrənt/', pos: 'n.', lvl: 'C1', cn: '水流；洋流', q: 'the movement of ocean currents' },
    { w: 'embassy', ipa: '/ˈembəsi/', pos: 'n.', lvl: 'B2', cn: '大使馆', q: 'contact the nearest German embassy' }
  ],

  syntax: [
    {
      q: 'The idea of throwing a message in a bottle into the sea and hoping someone far away will read it one day is exciting.',
      tags: ['动名词作介词宾语', '宾语从句', '主谓分隔'],
      parts: [
        { r: '主语', t: 'The idea of throwing a message in a bottle into the sea and hoping … —— 把漂流瓶扔进大海并期待……的想法' },
        { r: '宾语从句', t: 'someone far away will read it one day —— 远方有人某天会读到它' },
        { r: '谓语', t: 'is exciting —— 令人兴奋' }
      ],
      cn: '把写好的信装进瓶子扔进大海、期待远方有人某天读到它——这个想法本身就令人兴奋。'
    },
    {
      q: 'Tonya was tempted to unroll it and let it dry in the hot sun, but decided to take it home and put it in a cool oven instead.',
      tags: ['不定式并列', '转折连词 but', 'instead 的语义'],
      parts: [
        { r: '前半句', t: 'was tempted to unroll it and let it dry in the hot sun —— 很想展开、放在烈日下晒干' },
        { r: '转折', t: 'but decided to take it home —— 但还是决定带回家' },
        { r: '方式', t: 'and put it in a cool oven instead —— 改放进低温烤箱' }
      ],
      cn: '托尼娅本想把它展开、放在烈日下晒干，但最终还是决定带回家，放进温度不高的烤箱里。'
    },
    {
      q: 'Even more exciting was the fact that although there was no name given, the captain’s handwriting in the diary was identical to the handwriting on the form.',
      tags: ['完全倒装', '同位语从句', '让步状语从句'],
      parts: [
        { r: '倒装', t: 'Even more exciting was the fact —— 更令人兴奋的是这个事实' },
        { r: '同位语从句', t: 'that although there was no name given —— 虽然表格上没有署名' },
        { r: '从句主干', t: 'the captain’s handwriting in the diary was identical to the handwriting on the form —— 日记里的笔迹与表格上的笔迹完全一致' }
      ],
      cn: '更令人兴奋的是：虽然表格上没有写名字，但日记中船长的笔迹与表格上的笔迹一模一样。'
    },
    {
      q: 'Each bottle contained a form with the ship’s name, the date, and the place where the bottle was dropped, with the hope that someone would report where it was found.',
      tags: ['定语从句', '同位语从句', 'with 复合结构'],
      parts: [
        { r: '主句', t: 'Each bottle contained a form with the ship’s name, the date, and the place —— 每个瓶子都装着一张表格，写明船名、日期和地点' },
        { r: '定语从句', t: 'where the bottle was dropped —— 瓶子被投放的地方' },
        { r: '同位语', t: 'with the hope that someone would report where it was found —— 希望有人报告它被发现的地点' }
      ],
      cn: '每个瓶子里都有一张表格，写着船名、日期和投放地点，希望有人能报告它被发现的位置。'
    }
  ]
});
