/* ============================================================
   扩展语言点：为每篇补充 B2–C1 词汇与长难句
   - vocab : { w, pos, lvl, cn, def, col, q }
   - syntax: { q, tags, main, parts, cn, note }
   合并后按在原文出现的先后排序
   ============================================================ */
window.EXTRA = {

  /* ---------- 1 Chocolate ---------- */
  p01: {
    vocab: [
      { w: 'typically', pos: 'adv.', lvl: 'C1', cn: '通常；一般说来', def: 'in most cases; usually', col: '~ + 动词', q: 'it has typically been appreciated' },
      { w: 'moisture', pos: 'n.', lvl: 'C1', cn: '水分；湿气', def: 'small amounts of water present in the air or in something', col: 'year-round ~', q: 'year-round moisture' },
      { w: 'surround', pos: 'v.', lvl: 'B2', cn: '围绕；包围', def: 'to be or go all around something', col: 'be surrounded by', q: 'are surrounded by a milky-white substance' },
      { w: 'transport', pos: 'v.', lvl: 'B2', cn: '运输；运送', def: 'to move goods or people from one place to another', col: '~ sth to a place', q: 'carefully transported to factories' },
      { w: 'process', pos: 'v.', lvl: 'B2', cn: '加工；处理', def: 'to treat food or a material with a special method', col: '~ cocoa / food', q: 'process cocoa powder further' },
      { w: 'preserve', pos: 'v.', lvl: 'C1', cn: '保存；保鲜', def: 'to keep something in good condition for a long time', col: '~ texture / food', q: 'to help to preserve its texture' }
    ],
    syntax: [
      {
        q: 'Cacao trees currently grow best in countries that lie within 10 degrees either side of the Equator, due to the combination of year-round moisture, heat and shade found there',
        tags: ['定语从句', 'due to 原因状语', '过去分词作定语'],
        main: 'Cacao trees grow best in countries（可可树在某些国家长得最好）',
        parts: [
          { r: '主句', t: 'Cacao trees currently grow best in countries —— 可可树目前在某些国家长得最好' },
          { r: '定语从句', t: 'that lie within 10 degrees either side of the Equator —— 位于赤道南北各 10 度以内' },
          { r: '原因', t: 'due to the combination of year-round moisture, heat and shade found there —— 因为那里常年有适宜的湿度、热量与遮阴' }
        ],
        cn: '可可树目前最适合生长在赤道南北各 10 度以内的国家，因为那里常年具备湿度、热量与遮阴的理想组合。',
        note: 'due to 后接名词短语（不是句子）；found there 是过去分词后置定语，修饰 moisture, heat and shade。这类"主语 + 介词短语 + 分词"的堆叠是长难句的典型难点。'
      },
      {
        q: 'Once it is frozen, it will need to be taken out of the freezer and left to reach room temperature so you can enjoy this treat at its best',
        tags: ['once 时间状语从句', '被动语态', 'so 目的状语'],
        main: 'it will need to be taken out and left to reach room temperature',
        parts: [
          { r: '时间状语', t: 'Once it is frozen —— 一旦冻好' },
          { r: '主句', t: 'it will need to be taken out of the freezer and left to reach room temperature —— 就要从冷冻室取出，让它回到室温' },
          { r: '目的', t: 'so you can enjoy this treat at its best —— 这样你才能享用它最佳的风味' }
        ],
        cn: '一旦冻好，就要把它从冷冻室取出，放置到室温，这样你才能品尝到它最好的状态。',
        note: 'once = as soon as（一旦）；need to be done 是"需要被……"的被动表达；at its best 是固定搭配，意为"处于最佳状态"。'
      }
    ]
  },

  /* ---------- 2 Beavers ---------- */
  p02: {
    vocab: [
      { w: 'sighting', pos: 'n.', lvl: 'C1', cn: '目击；看到', def: 'an occasion when someone sees something rare or unusual', col: 'recorded ~s', q: 'no recorded sightings' },
      { w: 'survive', pos: 'v.', lvl: 'B2', cn: '存活；幸存', def: 'to continue to live or exist', col: '~ until / ~ in', q: 'a few beavers survived until' },
      { w: 'affordable', pos: 'adj.', lvl: 'B2', cn: '负担得起的', def: 'cheap enough for most people to buy', col: 'more ~ / ~ price', q: 'were more affordable' },
      { w: 'proposal', pos: 'n.', lvl: 'C1', cn: '提案；计划', def: 'a formal plan or suggestion', col: 'submit a ~', q: 'a proposal to submit' },
      { w: 'grant', pos: 'v.', lvl: 'C1', cn: '授予；批准', def: 'to officially give or allow something', col: 'permission is granted', q: 'after permission was granted' },
      { w: 'block', pos: 'v.', lvl: 'B2', cn: '堵塞；阻挡', def: 'to stop something from moving through', col: '~ a river / pipe', q: 'the beavers’ habit of blocking rivers' }
    ],
    syntax: [
      {
        q: 'The first application was turned down because it was felt that beavers might damage ancient forests',
        tags: ['被动语态', '原因状语从句', 'it was felt that 主语从句'],
        main: 'The first application was turned down（第一份申请被驳回）',
        parts: [
          { r: '主句', t: 'The first application was turned down —— 第一份申请被驳回' },
          { r: '原因状语', t: 'because it was felt that … —— 因为有人认为……' },
          { r: '主语从句', t: 'that beavers might damage ancient forests —— 海狸可能会破坏古老森林' }
        ],
        cn: '第一份申请被驳回，因为有人认为海狸可能会破坏古老的森林。',
        note: 'it was felt that = 人们认为，被动语态在此隐去施动者；turn down（驳回）与 approve（批准）是这类"申请类"文章的高频反义对。'
      },
      {
        q: 'Other concerns expressed by some people that the beavers’ habit of blocking rivers would create floods were not seen as a serious issue',
        tags: ['过去分词作定语', '同位语从句', '主谓分隔'],
        main: 'Other concerns were not seen as a serious issue（其他担忧没有被视为严重问题）',
        parts: [
          { r: '主语', t: 'Other concerns —— 其他担忧' },
          { r: '后置定语', t: 'expressed by some people —— 一些人表达的' },
          { r: '同位语从句', t: 'that the beavers’ habit of blocking rivers would create floods —— 即海狸堵河的习惯会造成洪水' },
          { r: '谓语', t: 'were not seen as a serious issue —— 并未被视为严重问题' }
        ],
        cn: '至于一些人担心的"海狸堵河会引发洪水"，则并未被当作严重问题。',
        note: '主语 concerns 后面挂了两个后置成分，谓语 were not seen 被推得很远。遇到长主语，先跳过修饰语找谓语动词，是长难句的第一动作。'
      }
    ]
  },

  /* ---------- 3 A message from the past ---------- */
  p03: {
    vocab: [
      { w: 'uncover', pos: 'v.', lvl: 'C1', cn: '使露出；发现', def: 'to discover something that was hidden or covered', col: '~ a secret / the truth', q: 'a huge storm had most likely uncovered it' },
      { w: 'examine', pos: 'v.', lvl: 'B2', cn: '检查；检验', def: 'to look at something carefully', col: 'carefully ~ sth', q: 'After carefully examining the form' },
      { w: 'handwriting', pos: 'n.', lvl: 'B2', cn: '笔迹；字迹', def: 'the way a particular person writes with a pen', col: 'sb’s ~', q: 'the captain’s handwriting in the diary' },
      { w: 'conduct', pos: 'v.', lvl: 'C1', cn: '进行（试验、调查）', def: 'to organise and carry out a particular activity', col: '~ tests / research', q: 'were conducting tests' },
      { w: 'experiment', pos: 'n.', lvl: 'B2', cn: '实验', def: 'a scientific test done to find out something', col: 'carry out an ~', q: 'The experiment lasted 69 years' },
      { w: 'contents', pos: 'n.', lvl: 'C1', cn: '（容器内的）东西', def: 'the things that are inside something', col: 'the ~ of a bottle', q: 'the bottle and its contents' }
    ],
    syntax: [
      {
        q: 'While her husband was packing the car, she was picking up some rubbish when she saw an old bottle sticking out of the sand',
        tags: ['while 时间状语从句', 'when 时间状语从句', '现在分词作定语'],
        main: 'she was picking up some rubbish（她正在捡垃圾）',
        parts: [
          { r: '背景', t: 'While her husband was packing the car —— 她丈夫在收拾车的时候' },
          { r: '主句', t: 'she was picking up some rubbish —— 她正在捡垃圾' },
          { r: '突发动作', t: 'when she saw an old bottle sticking out of the sand —— 这时她看见一个旧瓶子从沙里露出来' }
        ],
        cn: '她丈夫在收拾车子时，她正在捡垃圾，忽然看见沙子里露出一个旧瓶子。',
        note: '题干问"她当时在做什么"，答案在 while 之后的主句；sticking out of the sand 是现在分词作后置定语（= which stuck out）。'
      },
      {
        q: 'Although not much water had got in, the paper was still damp',
        tags: ['让步状语从句', '过去完成时'],
        main: 'the paper was still damp（纸仍然是潮的）',
        parts: [
          { r: '让步', t: 'Although not much water had got in —— 虽然没进多少水' },
          { r: '主句', t: 'the paper was still damp —— 纸还是潮的' }
        ],
        cn: '虽然没进多少水，纸还是潮的。',
        note: 'although 从句是"让步"，主句才是事实重心；had got in 用过去完成时，表示在"打开瓶子"之前就已发生。'
      }
    ]
  },

  /* ---------- 4 A dinosaur expert ---------- */
  p04: {
    vocab: [
      { w: 'asteroid', pos: 'n.', lvl: 'C1', cn: '小行星', def: 'a large rock that travels around the sun', col: 'an ~ crashed into Earth', q: 'a huge asteroid crashed into Earth' },
      { w: 'environmental', pos: 'adj.', lvl: 'B2', cn: '环境的', def: 'relating to the natural world', col: '~ damage / destruction', q: 'massive environmental destruction' },
      { w: 'colleague', pos: 'n.', lvl: 'B2', cn: '同事', def: 'a person you work with', col: 'a ~ of mine', q: 'he and two colleagues' },
      { w: 'feather', pos: 'n.', lvl: 'B2', cn: '羽毛', def: 'one of the light soft things that cover a bird', col: 'be covered in ~s', q: 'many were covered in feathers' },
      { w: 'entertainment', pos: 'n.', lvl: 'B2', cn: '娱乐；消遣', def: 'things that amuse or interest people', col: 'excellent ~', q: 'the films are excellent entertainment' },
      { w: 'career', pos: 'n.', lvl: 'B2', cn: '职业；事业', def: 'the job or series of jobs you do in your life', col: 'a ~ in / develop into a ~', q: 'developing their interest into a career' }
    ],
    syntax: [
      {
        q: 'he and other dinosaur experts tend to agree that it’s about 65 million years since what is known as the Age of the Dinosaurs ended',
        tags: ['宾语从句', 'since 时间从句', 'what 引导主语从句'],
        main: 'he and other experts tend to agree（他和其他专家倾向于认为）',
        parts: [
          { r: '主句', t: 'he and other dinosaur experts tend to agree —— 他和其他恐龙专家大多认为' },
          { r: '宾语从句', t: 'that it’s about 65 million years since … —— 自……以来大约已过了 6500 万年' },
          { r: 'since 从句主语', t: 'what is known as the Age of the Dinosaurs —— 所谓的"恐龙时代"' }
        ],
        cn: '他和其他恐龙专家大多认为，所谓的"恐龙时代"结束至今大约已有 6500 万年。',
        note: 'tend to agree = 倾向于认为；what is known as… 是主语从句作 since 从句的主语，等于 the thing that is known as…。'
      },
      {
        q: 'Some were giants, but many were very small, and lots had large brains',
        tags: ['并列句', 'but 对比', 'and 递进'],
        main: 'Some were giants, but many were very small（有些是巨兽，但很多很小）',
        parts: [
          { r: '分句 1', t: 'Some were giants —— 有些是庞然大物' },
          { r: '转折', t: 'but many were very small —— 但很多体型很小' },
          { r: '递进', t: 'and lots had large brains —— 而且很多脑子很大' }
        ],
        cn: '有些是庞然大物，但很多体型很小，还有不少脑子很大。',
        note: '这种"三重并列"在笔记题里往往一一对应得分点（giants / small / large brains），读到时就要有意识地分点记。'
      }
    ]
  },

  /* ---------- 5 Icehotel ---------- */
  p05: {
    vocab: [
      { w: 'sculpture', pos: 'n.', lvl: 'B2', cn: '雕塑（品）', def: 'a work of art made from stone, wood, ice, etc.', col: 'ice ~s', q: 'surrounded by spectacular ice sculptures' },
      { w: 'charge', pos: 'v.', lvl: 'B2', cn: '充电', def: 'to put electricity into a battery', col: 'fully ~ a phone', q: 'fully charge their phones' },
      { w: 'opportunity', pos: 'n.', lvl: 'B2', cn: '机会', def: 'a situation that makes it possible to do something', col: 'see an ~ to do', q: 'saw an opportunity to attract tourists' },
      { w: 'freeze', pos: 'v.', lvl: 'B2', cn: '结冰；冻结', def: 'to become hard and solid because of cold', col: 'the river freezes', q: 'the river freezes into ice' },
      { w: 'storage', pos: 'n.', lvl: 'C1', cn: '储存；存放', def: 'the act of keeping something until it is needed', col: 'cold ~', q: 'kept in cold storage' },
      { w: 'safari', pos: 'n.', lvl: 'C1', cn: '（乘车）观赏之旅', def: 'a trip to watch wild animals', col: 'a snowmobile ~', q: 'a snowmobile safari' }
    ],
    syntax: [
      {
        q: 'The focus of the Icehotel is as much on beautiful art as it is on accommodation, and guests are encouraged to find out about the artists’ work before they visit',
        tags: ['as much … as 比较', '被动语态', 'before 时间状语从句'],
        main: 'The focus is as much on art as on accommodation（重心在艺术，也在住宿）',
        parts: [
          { r: '主句 1', t: 'The focus of the Icehotel is as much on beautiful art as it is on accommodation —— 冰酒店的重点既是住宿，也同样在艺术' },
          { r: '主句 2', t: 'and guests are encouraged to find out about the artists’ work —— 并鼓励客人先去了解艺术家们的作品' },
          { r: '时间状语', t: 'before they visit —— 在到访之前' }
        ],
        cn: '冰酒店同样看重艺术与住宿，并鼓励客人在到访前先了解艺术家们的作品。',
        note: 'as much A as B = A 与 B 同等重要（不是"和……一样多"的字面义）；are encouraged to 是"建议类"得分点的典型信号。'
      },
      {
        q: 'While they were doing that, some visitors to the village wanted to stay but there was no accommodation available',
        tags: ['while 时间状语从句', 'but 转折', 'there be 句型'],
        main: 'some visitors wanted to stay but there was no accommodation',
        parts: [
          { r: '时间状语', t: 'While they were doing that —— 就在他们建造冰厅的时候' },
          { r: '分句 1', t: 'some visitors to the village wanted to stay —— 一些来村里的游客想住下' },
          { r: '转折', t: 'but there was no accommodation available —— 但没有可住的地方' }
        ],
        cn: '就在他们建造冰厅的时候，有些来村里的游客想住下来，却没有地方可住。',
        note: '此处 while 是"当……的时候"，不是对比；but 之后的"没有住处"正是访客睡在冰厅里的原因 —— 因果常在转折后面。'
      }
    ]
  },

  /* ---------- 6 Percy Spencer ---------- */
  p06: {
    vocab: [
      { w: 'only child', pos: 'n.', lvl: 'B2', cn: '独生子女', def: 'a child who has no brothers or sisters', col: 'an ~', q: 'He was an only child' },
      { w: 'advertise', pos: 'v.', lvl: 'B2', cn: '登广告（招聘）', def: 'to tell people about a job or product publicly', col: '~ for sb', q: 'the paper mill advertised for people' },
      { w: 'apply', pos: 'v.', lvl: 'B2', cn: '申请', def: 'to formally ask for a job or a place', col: '~ for a job', q: 'Spencer applied and got the job' },
      { w: 'guard', pos: 'v.', lvl: 'C1', cn: '守卫；看守', def: 'to protect a place or person', col: '~ a base / building', q: 'while guarding the navy base' },
      { w: 'melt', pos: 'v.', lvl: 'B2', cn: '融化', def: 'to become liquid because of heat', col: 'the chocolate melted', q: 'the candy bar in his pocket had melted' },
      { w: 'put off', pos: 'phr. v.', lvl: 'C1', cn: '使打消念头；使反感', def: 'to make someone not want to do something', col: 'be put off doing sth', q: 'many people were put off buying them' }
    ],
    syntax: [
      {
        q: 'Spencer wasn’t the first to discover that some substances warmed up unexpectedly when near radars, but he was the first to fully investigate it',
        tags: ['不定式作定语', '宾语从句', '状语从句的省略', 'but 对比'],
        main: 'Spencer wasn’t the first … but he was the first to investigate it',
        parts: [
          { r: '分句 1', t: 'Spencer wasn’t the first to discover that … —— 斯宾塞不是第一个发现……的人' },
          { r: '宾语从句', t: 'that some substances warmed up unexpectedly when near radars —— 某些物质靠近雷达时会意外发热' },
          { r: '转折', t: 'but he was the first to fully investigate it —— 但他是第一个彻底研究这一现象的人' }
        ],
        cn: '斯宾塞并非第一个发现"某些物质靠近雷达会意外发热"的人，但他是第一个把它彻底研究清楚的人。',
        note: 'when near radars 是 when they were near radars 的省略（主语与主句一致时省）；not the first… but the first… 是典型的"让步—转折"得分结构。'
      },
      {
        q: 'And even if their kitchens were big enough, nobody could afford one',
        tags: ['even if 让步状语从句', '递进论证'],
        main: 'nobody could afford one（没人买得起）',
        parts: [
          { r: '让步', t: 'And even if their kitchens were big enough —— 即使他们的厨房够大' },
          { r: '主句', t: 'nobody could afford one —— 也没人买得起' }
        ],
        cn: '而且即使厨房够大，也没有人买得起。',
        note: 'even if（即使，多为假设）≠ even though（尽管，多为事实）；这句用"退一步"的写法进一步强化"太贵"这个原因。'
      }
    ]
  },

  /* ---------- 7 Ancient rock art ---------- */
  p07: {
    vocab: [
      { w: 'settle', pos: 'v.', lvl: 'C1', cn: '定居；安顿', def: 'to start living permanently in a place', col: '~ in a region', q: 'humans first settled in the region' },
      { w: 'pattern', pos: 'n.', lvl: 'B2', cn: '图案；纹样', def: 'a repeated design or shape', col: 'abstract ~s', q: 'animals and abstract patterns' },
      { w: 'indicate', pos: 'v.', lvl: 'C1', cn: '表明；显示', def: 'to show that something is true', col: 'This ~s that …', q: 'This indicates that the region' },
      { w: 'trek', pos: 'n.', lvl: 'C1', cn: '长途跋涉', def: 'a long and difficult walk', col: 'a four-hour ~', q: 'a four-hour trek through the jungle' },
      { w: 'remains', pos: 'n.', lvl: 'C1', cn: '遗迹；残骸', def: 'the parts of something that are left', col: 'the ~ of sth', q: 'the remains of ropes' },
      { w: 'clue', pos: 'n.', lvl: 'B2', cn: '线索', def: 'a piece of information that helps solve a problem', col: 'a ~ to sth', q: 'There are clues in a few paintings' }
    ],
    syntax: [
      {
        q: 'Some of the paintings may have been created no more than 400 years ago, but it seems likely that others date back to 12500 years ago',
        tags: ['情态动词 + have done', 'it seems likely that', 'but 对比'],
        main: 'Some may have been created 400 years ago, but others date back to 12500 years ago',
        parts: [
          { r: '分句 1', t: 'Some of the paintings may have been created no more than 400 years ago —— 有些画可能不过是 400 年前画的' },
          { r: '转折', t: 'but it seems likely that others … —— 但另一些很可能……' },
          { r: '主语从句', t: 'date back to 12500 years ago —— 可追溯到 12500 年前' }
        ],
        cn: '有些岩画可能不过 400 年历史，但另一些很可能可以追溯到 12500 年前。',
        note: 'may have done 表示对过去的推测；no more than = 仅仅；date back to 是"追溯到"，也是年代题的定位信号。'
      },
      {
        q: 'It’s thought that humans first settled in the region about 13000 years ago',
        tags: ['形式主语被动句', '主语从句'],
        main: 'It’s thought that humans settled there 13000 years ago',
        parts: [
          { r: '形式主语', t: 'It’s thought —— 据认为' },
          { r: '主语从句', t: 'that humans first settled in the region about 13000 years ago —— 人类最早约 13000 年前定居于此' }
        ],
        cn: '据认为，人类最早大约在 13000 年前定居在这一地区。',
        note: 'It is thought/believed/said that… 是说明文的"客观表述"句式。注意 13000（定居）与 12500（作画）这两个数字极易被互换设陷。'
      }
    ]
  },

  /* ---------- 8 Photography for Teens ---------- */
  p08: {
    vocab: [
      { w: 'explore', pos: 'v.', lvl: 'B2', cn: '探索；尝试', def: 'to try different ways of doing something', col: '~ how to do sth', q: 'you will explore how to take' },
      { w: 'appeal to', pos: 'phr. v.', lvl: 'C1', cn: '对……有吸引力', def: 'to be attractive or interesting to someone', col: '~ sb / ~ students', q: 'What tends to appeal to students above all' },
      { w: 'portrait', pos: 'n.', lvl: 'B2', cn: '肖像（照）', def: 'a photograph or painting of a person', col: '~ photography', q: 'is portrait photography' },
      { w: 'equipment', pos: 'n.', lvl: 'B2', cn: '设备；器材', def: 'the tools or machines needed for an activity', col: 'photographic ~', q: 'the equipment photographers use' },
      { w: 'studio', pos: 'n.', lvl: 'B2', cn: '工作室；摄影棚', def: 'a room where an artist or photographer works', col: 'in the ~', q: 'back in the studio at college' },
      { w: 'fee', pos: 'n.', lvl: 'B2', cn: '费用；学费', def: 'money paid for a service or a course', col: 'the course ~', q: 'included in the course fee' }
    ],
    syntax: [
      {
        q: 'What tends to appeal to students above all is portrait photography, but everyone loves street photography and action shots too',
        tags: ['主语从句', 'but 转折'],
        main: 'What appeals most is portrait photography（最受欢迎的是人像摄影）',
        parts: [
          { r: '主语从句', t: 'What tends to appeal to students above all —— 最吸引学生的' },
          { r: '谓语', t: 'is portrait photography —— 是人像摄影' },
          { r: '转折', t: 'but everyone loves street photography and action shots too —— 但大家也都喜欢街拍与动感抓拍' }
        ],
        cn: '最吸引学生的通常是人像摄影，不过大家也都喜欢街拍和动感抓拍。',
        note: 'What 引导主语从句（= The thing that…）；above all 是"最"的强信号词，直接对应题干里的 most popular。'
      },
      {
        q: 'After you’ve had a chance to download the photos you’ve taken, you take part in a group discussion',
        tags: ['after 时间状语从句', '省略关系词的定语从句', '现在完成时'],
        main: 'you take part in a group discussion（你们参加小组讨论）',
        parts: [
          { r: '时间状语', t: 'After you’ve had a chance to download the photos (that) you’ve taken —— 在你有机会下载自己拍的照片之后' },
          { r: '主句', t: 'you take part in a group discussion —— 你们参加小组讨论' }
        ],
        cn: '在你有机会下载自己拍的照片之后，你们会进行小组讨论。',
        note: 'the photos (that) you’ve taken 省略了关系代词 that（作宾语时可省）；after 从句用现在完成时，强调"先下完再讨论"的先后顺序。'
      }
    ]
  },

  /* ---------- 9 Zebras ---------- */
  p09: {
    vocab: [
      { w: 'unique', pos: 'adj.', lvl: 'B2', cn: '独一无二的', def: 'being the only one of its kind', col: 'be ~ to sb/sth', q: 'the striped pattern of each zebra is unique' },
      { w: 'behave', pos: 'v.', lvl: 'B2', cn: '表现；行动', def: 'to do things in a particular way', col: '~ around sb', q: 'how flies behaved around the zebras' },
      { w: 'approach', pos: 'v.', lvl: 'C1', cn: '接近；靠近', def: 'to come nearer to someone or something', col: '~ an animal', q: 'insects approaching these animals' },
      { w: 'prevent', pos: 'v.', lvl: 'B2', cn: '阻止；防止', def: 'to stop something from happening', col: '~ sb from doing sth', q: 'prevent them from being bitten' },
      { w: 'interruption', pos: 'n.', lvl: 'C1', cn: '打扰；中断', def: 'an occasion when something stops temporarily', col: 'without ~', q: 'feed without interruption' },
      { w: 'occur to', pos: 'phr. v.', lvl: 'C1', cn: '（想法）浮现在脑中', def: 'if an idea occurs to you, you suddenly think of it', col: 'it occurs to sb that …', q: 'had never occurred to me before' }
    ],
    syntax: [
      {
        q: 'And they’re actually born with brown and white stripes, not black and white, something I hadn’t expected to learn',
        tags: ['补充同位语 something', '省略关系词的定语从句'],
        main: 'they’re born with brown and white stripes（它们出生时是棕白条纹）',
        parts: [
          { r: '主句', t: 'they’re actually born with brown and white stripes, not black and white —— 它们出生时其实是棕白条纹，而非黑白' },
          { r: '同位语', t: 'something (that) I hadn’t expected to learn —— 这是我事先没料到的' }
        ],
        cn: '而且它们出生时其实是棕白条纹，而不是黑白条纹——这一点我事先没料到。',
        note: 'something 指代前面整句内容（≈ which was something…），这种"追加评论"结构在口语化文章中很常见，理解时可译成"……这一点"。'
      },
      {
        q: 'Instead, the insects approaching these animals just bounced off, whereas the flies around the plain horses managed to land',
        tags: ['现在分词作定语', 'whereas 对比', 'instead 语义'],
        main: 'the insects bounced off, whereas the flies managed to land',
        parts: [
          { r: '分句 1', t: 'the insects approaching these animals just bounced off —— 靠近这些动物的昆虫被弹开了' },
          { r: '对比', t: 'whereas the flies around the plain horses managed to land —— 而纯色马周围的苍蝇却成功落下' }
        ],
        cn: '相反，靠近这些动物的苍蝇被弹开，而纯色马周围的苍蝇却能落在它们身上。',
        note: 'whereas = 而（对比连词，比 but 更书面）；approaching 是现在分词作后置定语修饰 insects。两侧现象分别对应"有条纹/无条纹"，切勿张冠李戴。'
      }
    ]
  },

  /* ---------- 10 Shelly Downley ---------- */
  p10: {
    vocab: [
      { w: 'develop an interest in', pos: 'phr.', lvl: 'B2', cn: '培养出对……的兴趣', def: 'to gradually start to be interested in something', col: '~ sth', q: 'She developed an interest in skateboarding' },
      { w: 'helmet', pos: 'n.', lvl: 'B2', cn: '头盔', def: 'a hard hat that protects your head', col: 'wear a ~', q: 'the need to wear a helmet' },
      { w: 'medal', pos: 'n.', lvl: 'B2', cn: '奖牌', def: 'a metal disc given as a prize', col: 'win a ~', q: 'she got a special medal' },
      { w: 'title', pos: 'n.', lvl: 'C1', cn: '冠军称号', def: 'the position of being the winner of a competition', col: 'hold a ~', q: 'she held three competition titles' },
      { w: 'upload', pos: 'v.', lvl: 'C1', cn: '上传', def: 'to move data to the internet', col: '~ videos to a blog', q: 'Shelly uploaded some video clips' },
      { w: 'progress', pos: 'n.', lvl: 'B2', cn: '进步；进展', def: 'improvement or development', col: 'make ~', q: 'helped her make progress' }
    ],
    syntax: [
      {
        q: 'By the time she was six, Shelly’s parents realised how much she enjoyed the sport, so they put her name down for a local skateboarding contest',
        tags: ['by the time 时间状语', '宾语从句', 'so 结果连词'],
        main: 'her parents realised … so they put her name down for a contest',
        parts: [
          { r: '时间状语', t: 'By the time she was six —— 到她六岁时' },
          { r: '分句 1', t: 'Shelly’s parents realised how much she enjoyed the sport —— 父母看出她有多喜欢这项运动' },
          { r: '结果', t: 'so they put her name down for a local skateboarding contest —— 于是替她报名了当地的滑板比赛' }
        ],
        cn: '到她六岁时，父母看出她有多喜欢这项运动，就替她报名参加了当地的一场滑板比赛。',
        note: 'put one’s name down for = 报名参加；题目问"几岁第一次参赛"，答案由 By the time she was six 给出，而不是 at the age of four。'
      },
      {
        q: 'In 2016, she became the youngest competitor in the national Open Series, and discovered what it’s like to compete against women with much more skateboarding experience',
        tags: ['宾语从句', 'what it’s like to do', 'with 短语作定语'],
        main: 'she became the youngest competitor and discovered …',
        parts: [
          { r: '分句 1', t: 'she became the youngest competitor in the national Open Series —— 她成为全国公开系列赛中最年轻的选手' },
          { r: '分句 2', t: 'and discovered what it’s like to compete against women with much more experience —— 并体会到与经验丰富得多的成年女性同场竞技是什么感觉' }
        ],
        cn: '2016 年，她成为全国公开系列赛中最年轻的参赛者，也第一次体会到与经验远比自己丰富的成年女性同场竞技是什么滋味。',
        note: 'what it’s like to do sth = 做某事是什么感觉；competitor 与 compete 同根，是本题"何时与成人比赛"的定位依据。'
      }
    ]
  },

  /* ---------- 11 Zookeeper ---------- */
  p11: {
    vocab: [
      { w: 'brief', pos: 'adj.', lvl: 'B2', cn: '简短的', def: 'lasting only a short time', col: 'a ~ meeting', q: 'It’s always brief' },
      { w: 'relevant', pos: 'adj.', lvl: 'C1', cn: '相关的', def: 'closely connected with the subject', col: '~ information / updates', q: 'we’re given relevant updates' },
      { w: 'patience', pos: 'n.', lvl: 'B2', cn: '耐心', def: 'the ability to wait calmly without getting annoyed', col: 'need ~', q: 'so you need patience' },
      { w: 'mental', pos: 'adj.', lvl: 'B2', cn: '心理的；精神的', def: 'relating to the mind', col: '~ health', q: 'their mental health is important too' },
      { w: 'breeding', pos: 'n.', lvl: 'C1', cn: '繁殖；饲养', def: 'the process of keeping animals so they produce young', col: 'a ~ programme', q: 'a breeding programme' },
      { w: 'volunteer', pos: 'v.', lvl: 'C1', cn: '自愿做；做志愿者', def: 'to offer to do something without being paid', col: '~ at a zoo', q: 'she was volunteering at her local zoo' }
    ],
    syntax: [
      {
        q: 'It has got a huge personality for its small size',
        tags: ['for 表"相对于"的介词短语'],
        main: 'It has got a huge personality（它个性十足）',
        parts: [
          { r: '主句', t: 'It has got a huge personality —— 它个性很强' },
          { r: '对比状语', t: 'for its small size —— 就它这么小的体型而言' }
        ],
        cn: '就它那么小的体型来说，它的个性可真够强的。',
        note: 'for + 名词在此表"相对于……而言"（= considering），不是"为了"。这类小词的多义是阅读理解的隐形难点。'
      },
      {
        q: 'She then tells me that they are one of about 27000 species which are in danger of extinction, and that around 2000 individuals were left when they were last surveyed in their native Colombia in 2008',
        tags: ['并列宾语从句', '定语从句', '时间状语从句', '被动语态'],
        main: 'She tells me that … and that …（她告诉我两件事）',
        parts: [
          { r: '宾语从句 1', t: 'that they are one of about 27000 species which are in danger of extinction —— 它们是约 27000 种濒危物种之一' },
          { r: '宾语从句 2', t: 'and that around 2000 individuals were left —— 而且仅剩约 2000 只' },
          { r: '时间状语', t: 'when they were last surveyed in their native Colombia in 2008 —— 2008 年最后一次在其原产地哥伦比亚调查时' }
        ],
        cn: '她接着告诉我，它们是约 27000 种濒危物种之一；2008 年最后一次在它们的原产地哥伦比亚进行调查时，只剩下约 2000 只。',
        note: '两个 that 并列作 tells 的宾语，第二个 that 不能省；27000（物种数）与 2000（个体数）是本题最易混的两个数字。'
      }
    ]
  }
};
