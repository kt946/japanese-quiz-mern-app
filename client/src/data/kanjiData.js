// array of objects of kanji characters grouped by subject
// includes on-yomii and kun-yomi readings
const kanjiData = [
  {
    lessonNumber: 3,
    url: 'lesson-3',
    title: 'Daily Life',
    backgroundColor: 'bg-gradient-to-r from-blue-600 to-blue-500',
    backgroundImage: 'bg-curtain',
    kanji: [
      {
        character: '一',
        readings: 'いち',
        romaji: 'ichi',
        meanings: 'one',
      },
      {
        character: '二',
        readings: 'に',
        romaji: 'ni',
        meanings: 'two',
      },
      {
        character: '三',
        readings: 'さん',
        romaji: 'san',
        meanings: 'three',
      },
      {
        character: '四',
        readings: 'し, よん',
        romaji: 'yon',
        meanings: 'four',
      },
      {
        character: '五',
        readings: 'ご',
        romaji: 'go',
        meanings: 'five',
      },
      {
        character: '六',
        readings: 'ろく',
        romaji: 'roku',
        meanings: 'six',
      },
      {
        character: '七',
        readings: 'しち, なな',
        romaji: 'shichi, nana',
        meanings: 'seven',
      },
      {
        character: '八',
        readings: 'はち',
        romaji: 'hachi',
        meanings: 'eight',
      },
      {
        character: '九',
        readings: 'きゅう',
        romaji: 'kyuu',
        meanings: 'nine',
      },
      {
        character: '十',
        readings: 'じゅう',
        romaji: 'juu',
        meanings: 'ten',
      },
      {
        character: '百',
        readings: 'ひゃく',
        romaji: 'hyaku',
        meanings: 'hundred',
      },
      {
        character: '千',
        readings: 'せん, ぜん',
        romaji: 'sen, zen',
        meanings: 'thousand',
      },
      {
        character: '万',
        readings: 'まん',
        romaji: 'man',
        meanings: 'ten thousand',
      },
      {
        character: '円',
        readings: 'えん',
        romaji: 'en',
        meanings: 'yen, circle',
      },
      {
        character: '時',
        readings: 'じ, とき',
        romaji: 'ji, toki',
        meanings: 'time, moment',
      },
    ],
  },
  {
    lessonNumber: 4,
    url: 'lesson-4',
    title: "Mary's Weekend",
    backgroundColor: 'bg-gradient-to-r from-orange-600 to-orange-500',
    backgroundImage: 'bg-circles',
    kanji: [
      {
        character: '日',
        readings: 'に, にち, び',
        romaji: 'ni, nichi, bi',
        meanings: 'day, sun',
      },
      {
        character: '本',
        readings: 'ほん',
        romaji: 'hon',
        meanings: 'book, basis',
      },
      {
        character: '人',
        readings: 'じん, ひと',
        romaji: 'jin, hito',
        meanings: 'person',
      },
      {
        character: '月',
        readings: 'げつ, がつ',
        romaji: 'getsu, gatsu',
        meanings: 'moon, month',
      },
      {
        character: '火',
        readings: 'か, ひ',
        romaji: 'ka, hi',
        meanings: 'fire',
      },
      {
        character: '水',
        readings: 'すい, みず',
        romaji: 'sui, mizu',
        meanings: 'water',
      },
      {
        character: '木',
        readings: 'もく, き',
        romaji: 'moku, ki',
        meanings: 'tree, wood',
      },
      {
        character: '金',
        readings: 'きん, かね',
        romaji: 'kin, kane',
        meanings: 'gold, money',
      },
      {
        character: '土',
        readings: 'ど, と',
        romaji: 'do, to',
        meanings: 'soil',
      },
      {
        character: '曜',
        readings: 'よう',
        romaji: 'you',
        meanings: 'day of the week',
      },
      {
        character: '上',
        readings: 'うえ',
        romaji: 'ue',
        meanings: 'up',
      },
      {
        character: '下',
        readings: 'した',
        romaji: 'shita',
        meanings: 'down',
      },
      {
        character: '中',
        readings: 'なか',
        romaji: 'naka',
        meanings: 'inside, middle',
      },
      {
        character: '半',
        readings: 'はん',
        romaji: 'han',
        meanings: 'half',
      },
    ],
  },
  {
    lessonNumber: 5,
    url: 'lesson-5',
    title: 'Travel',
    backgroundColor: 'bg-gradient-to-r from-lime-600 to-lime-400',
    backgroundImage: 'bg-autumn',
    kanji: [
      {
        character: '山',
        readings: 'やま',
        romaji: 'yama',
        meanings: 'mountain',
      },
      {
        character: '川',
        readings: 'かわ',
        romaji: 'kawa',
        meanings: 'river',
      },
      {
        character: '元',
        readings: 'げん',
        romaji: 'gen',
        meanings: 'origin',
      },
      {
        character: '気',
        readings: 'き',
        romaji: 'ki',
        meanings: 'spirit, air',
      },
      {
        character: '天',
        readings: 'てん',
        romaji: 'ten',
        meanings: 'heaven',
      },
      {
        character: '私',
        readings: 'わたし',
        romaji: 'watashi',
        meanings: 'I, private',
      },
      {
        character: '今',
        readings: 'いま',
        romaji: 'ima',
        meanings: 'now',
      },
      {
        character: '田',
        readings: 'た, だ',
        romaji: 'ta, da',
        meanings: 'rice field',
      },
      {
        character: '女',
        readings: 'おんな',
        romaji: 'onna',
        meanings: 'woman',
      },
      {
        character: '男',
        readings: 'おとこ',
        romaji: 'otoko',
        meanings: 'man',
      },
      {
        character: '見',
        readings: 'み',
        romaji: 'mi',
        meanings: 'to see',
      },
      {
        character: '行',
        readings: 'い',
        romaji: 'i',
        meanings: 'to go',
      },
      {
        character: '食',
        readings: 'た',
        romaji: 'ta',
        meanings: 'to eat',
      },
      {
        character: '飲',
        readings: 'の',
        romaji: 'no',
        meanings: 'to drink',
      },
    ],
  },
  {
    lessonNumber: 6,
    url: 'lesson-6',
    title: 'My Favorite Restaurant',
    backgroundColor: 'bg-gradient-to-r from-[#c20323] to-[#ef233c]',
    backgroundImage: 'bg-i-like-food',
    kanji: [
      {
        character: '東',
        readings: 'とう, ひがし',
        romaji: 'tou, higashi',
        meanings: 'east',
      },
      {
        character: '西',
        readings: 'にし',
        romaji: 'nishi',
        meanings: 'west',
      },
      {
        character: '南',
        readings: 'みなみ',
        romaji: 'minami',
        meanings: 'south',
      },
      {
        character: '北',
        readings: 'きた',
        romaji: 'kita',
        meanings: 'north',
      },
      {
        character: '口',
        readings: 'こう, ぐち, くち',
        romaji: 'kou, guchi, kuchi',
        meanings: 'mouth',
      },
      {
        character: '出',
        readings: 'で',
        romaji: 'de',
        meanings: 'to exit',
      },
      {
        character: '右',
        readings: 'みぎ',
        romaji: 'migi',
        meanings: 'right',
      },
      {
        character: '左',
        readings: 'ひだり',
        romaji: 'hidari',
        meanings: 'left',
      },
      {
        character: '分',
        readings: 'ふん, ぷん',
        romaji: 'fun, pun',
        meanings: 'minute; to divide',
      },
      {
        character: '先',
        readings: 'せん',
        romaji: 'sen',
        meanings: 'ahead',
      },
      {
        character: '生',
        readings: 'せい',
        romaji: 'sei',
        meanings: 'birth',
      },
      {
        character: '大',
        readings: 'だい, おお',
        romaji: 'dai, oo',
        meanings: 'big',
      },
      {
        character: '学',
        readings: 'がく',
        romaji: 'gaku',
        meanings: 'learning',
      },
      {
        character: '外',
        readings: 'がい, そと',
        romaji: 'gai, soto',
        meanings: 'outside',
      },
      {
        character: '国',
        readings: 'こく, ごく',
        romaji: 'koku, goku',
        meanings: 'country',
      },
    ],
  },
  {
    lessonNumber: 7,
    url: 'lesson-7',
    title: "Mary's Letter",
    backgroundColor: 'bg-gradient-to-r from-purple-600 to-purple-500',
    backgroundImage: 'bg-groovy',
    kanji: [
      {
        character: '京',
        readings: 'きょう',
        romaji: 'kyou',
        meanings: 'capital',
      },
      {
        character: '子',
        readings: 'し, こ',
        romaji: 'shi, ko',
        meanings: 'child',
      },
      {
        character: '小',
        readings: 'ちい',
        romaji: 'chii',
        meanings: 'small',
      },
      {
        character: '会',
        readings: 'かい, あ',
        romaji: 'kai, a',
        meanings: 'meeting',
      },
      {
        character: '社',
        readings: 'しゃ',
        romaji: 'sha',
        meanings: 'company',
      },
      {
        character: '父',
        readings: 'ちち, とう',
        romaji: 'chichi, tou',
        meanings: 'father',
      },
      {
        character: '母',
        readings: 'はは, かあ',
        romaji: 'haha, kaa',
        meanings: 'mother',
      },
      {
        character: '高',
        readings: 'こう, たか',
        romaji: 'kou, taka',
        meanings: 'high',
      },
      {
        character: '校',
        readings: 'こう',
        romaji: 'kou',
        meanings: 'school',
      },
      {
        character: '毎',
        readings: 'まい',
        romaji: 'mai',
        meanings: 'every',
      },
      {
        character: '語',
        readings: 'ご',
        romaji: 'go',
        meanings: 'word',
      },
      {
        character: '文',
        readings: 'ぶん',
        romaji: 'bun',
        meanings: 'sentence',
      },
      {
        character: '帰',
        readings: 'かえ',
        romaji: 'kae',
        meanings: 'to return',
      },
      {
        character: '入',
        readings: 'はい',
        romaji: 'hai',
        meanings: 'to enter',
      },
    ],
  },
  {
    lessonNumber: 8,
    url: 'lesson-8',
    title: 'Japanese Office Workers',
    backgroundColor: 'bg-gradient-to-r from-cyan-600 to-cyan-400',
    backgroundImage: 'bg-signal',
    kanji: [
      {
        character: '員',
        readings: 'いん',
        romaji: 'in',
        meanings: 'member',
      },
      {
        character: '新',
        readings: 'しん, あたら',
        romaji: 'shin, atara',
        meanings: 'new',
      },
      {
        character: '聞',
        readings: 'ぶん, き',
        romaji: 'bun, ki',
        meanings: 'to listen',
      },
      {
        character: '作',
        readings: 'つく',
        romaji: 'tsuku',
        meanings: 'to make',
      },
      {
        character: '仕',
        readings: 'し',
        romaji: 'shi',
        meanings: 'to serve',
      },
      {
        character: '事',
        readings: 'ごと',
        romaji: 'goto',
        meanings: 'thing',
      },
      {
        character: '電',
        readings: 'でん',
        romaji: 'den',
        meanings: 'electricity',
      },
      {
        character: '車',
        readings: 'しゃ, くるま',
        romaji: 'sha, kuruma',
        meanings: 'car',
      },
      {
        character: '休',
        readings: 'やす',
        romaji: 'yasu',
        meanings: 'to rest',
      },
      {
        character: '言',
        readings: 'い',
        romaji: 'i',
        meanings: 'to say',
      },
      {
        character: '読',
        readings: 'よ',
        romaji: 'yo',
        meanings: 'to read',
      },
      {
        character: '思',
        readings: 'おも',
        romaji: 'omo',
        meanings: 'to think',
      },
      {
        character: '次',
        readings: 'つぎ',
        romaji: 'tsugi',
        meanings: 'next',
      },
      {
        character: '何',
        readings: 'なに, なん',
        romaji: 'nani, nan',
        meanings: 'what',
      },
    ],
  },
  {
    lessonNumber: 9,
    url: 'lesson-9',
    title: "Sora's Diary",
    backgroundColor: 'bg-gradient-to-r from-emerald-600 to-emerald-400',
    backgroundImage: 'bg-bathroom-floor',
    kanji: [
      {
        character: '午',
        readings: 'ご',
        romaji: 'go',
        meanings: 'noon',
      },
      {
        character: '後',
        readings: 'ご, あと,うし',
        romaji: 'go, ato, ushi',
        meanings: 'after',
      },
      {
        character: '前',
        readings: 'ぜん, まえ',
        romaji: 'zen, mae',
        meanings: 'before',
      },
      {
        character: '名',
        readings: 'な',
        romaji: 'na',
        meanings: 'name',
      },
      {
        character: '白',
        readings: 'しろ',
        romaji: 'shiro',
        meanings: 'white',
      },
      {
        character: '雨',
        readings: 'あめ',
        romaji: 'ame',
        meanings: 'rain',
      },
      {
        character: '書',
        readings: 'か',
        romaji: 'ka',
        meanings: 'to write',
      },
      {
        character: '友',
        readings: 'とも',
        romaji: 'tomo',
        meanings: 'friend',
      },
      {
        character: '間',
        readings: 'かん, あいだ',
        romaji: 'kan, aida',
        meanings: 'between',
      },
      {
        character: '家',
        readings: 'いえ',
        romaji: 'ie',
        meanings: 'house',
      },
      {
        character: '話',
        readings: 'わ, はな, はなし',
        romaji: 'wa, hana, hanashi',
        meanings: 'to speak',
      },
      {
        character: '少',
        readings: 'すこ',
        romaji: 'suko',
        meanings: 'little',
      },
      {
        character: '古',
        readings: 'ふる',
        romaji: 'furu',
        meanings: 'old',
      },
      {
        character: '知',
        readings: 'し',
        romaji: 'shi',
        meanings: 'to know',
      },
      {
        character: '来',
        readings: 'く, き, こ',
        romaji: 'ku, ki, ko',
        meanings: 'to come',
      },
    ],
  },
  {
    lessonNumber: 10,
    url: 'lesson-10',
    title: 'The Folktale Kasajizo',
    backgroundColor: 'bg-gradient-to-r from-amber-500 to-amber-400',
    backgroundImage: 'bg-bamboo',
    kanji: [
      {
        character: '住',
        readings: 'す',
        romaji: 'su',
        meanings: 'to live',
      },
      {
        character: '正',
        readings: 'しょう',
        romaji: 'shou',
        meanings: 'right/correct',
      },
      {
        character: '年',
        readings: 'ねん, とし',
        romaji: 'nen, toshi',
        meanings: 'year',
      },
      {
        character: '売',
        readings: 'う',
        romaji: 'u',
        meanings: 'to sell',
      },
      {
        character: '買',
        readings: 'か',
        romaji: 'ka',
        meanings: 'to buy',
      },
      {
        character: '町',
        readings: 'まち',
        romaji: 'machi',
        meanings: 'town',
      },
      {
        character: '長',
        readings: 'なが',
        romaji: 'naga',
        meanings: 'long',
      },
      {
        character: '道',
        readings: 'みち',
        romaji: 'michi',
        meanings: 'way; road',
      },
      {
        character: '雪',
        readings: 'ゆき',
        romaji: 'yuki',
        meanings: 'snow',
      },
      {
        character: '立',
        readings: 'た',
        romaji: 'ta',
        meanings: 'to stand',
      },
      {
        character: '自',
        readings: 'じ',
        romaji: 'ji',
        meanings: 'self',
      },
      {
        character: '夜',
        readings: 'よる',
        romaji: 'yoru',
        meanings: 'night',
      },
      {
        character: '朝',
        readings: 'あさ',
        romaji: 'asa',
        meanings: 'morning',
      },
      {
        character: '持',
        readings: 'も',
        romaji: 'mo',
        meanings: 'to hold',
      },
    ],
  },
  {
    lessonNumber: 11,
    url: 'lesson-11',
    title: 'Looking for Friends/Members',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
    backgroundImage: 'bg-jigsaw',
    kanji: [
      {
        character: '手',
        readings: 'しゅ, て',
        romaji: 'shu, te',
        meanings: 'hand',
      },
      {
        character: '紙',
        readings: 'がみ',
        romaji: 'gami',
        meanings: 'paper',
      },
      {
        character: '好',
        readings: 'す',
        romaji: 'su',
        meanings: 'to like',
      },
      {
        character: '近',
        readings: 'きん, ちか',
        romaji: 'kin, chika',
        meanings: 'near',
      },
      {
        character: '明',
        readings: 'あか',
        romaji: 'aka',
        meanings: 'bright',
      },
      {
        character: '病',
        readings: 'びょう',
        romaji: 'byou',
        meanings: 'ill; sick',
      },
      {
        character: '院',
        readings: 'いん',
        romaji: 'in',
        meanings: 'institution',
      },
      {
        character: '映',
        readings: 'えい',
        romaji: 'ei',
        meanings: 'to reflect',
      },
      {
        character: '画',
        readings: 'が',
        romaji: 'ga',
        meanings: 'picture',
      },
      {
        character: '歌',
        readings: 'か, うた',
        romaji: 'ka, uta',
        meanings: 'to sing',
      },
      {
        character: '市',
        readings: 'し, いち',
        romaji: 'shi, ichi',
        meanings: 'city',
      },
      {
        character: '所',
        readings: 'じょ, ところ',
        romaji: 'jo, tokoro',
        meanings: 'place',
      },
      {
        character: '勉',
        readings: 'べん',
        romaji: 'ben',
        meanings: 'to make efforts',
      },
      {
        character: '強',
        readings: 'きょう',
        romaji: 'kyou',
        meanings: 'strong',
      },
      {
        character: '有',
        readings: 'ゆう',
        romaji: 'yuu',
        meanings: 'to exist',
      },
      {
        character: '旅',
        readings: 'りょ',
        romaji: 'ryo',
        meanings: 'travel',
      },
    ],
  },
  {
    lessonNumber: 12,
    url: 'lesson-12',
    title: 'Tanabata Festival',
    backgroundColor: 'bg-gradient-to-r from-rose-600 to-rose-500',
    backgroundImage: 'bg-leaf',
    kanji: [
      {
        character: '昔',
        readings: 'むかし',
        romaji: 'mukashi',
        meanings: 'ancient times',
      },
      {
        character: '々',
        readings: 'symbol of repetition of kanji',
        romaji: 'symbol of repetition of kanji',
        meanings: 'symbol of repetition of kanji',
      },
      {
        character: '神',
        readings: 'じん, かみ',
        romaji: 'jin, kami',
        meanings: 'God',
      },
      {
        character: '早',
        readings: 'はや',
        romaji: 'haya',
        meanings: 'early',
      },
      {
        character: '起',
        readings: 'お',
        romaji: 'o',
        meanings: 'to get up',
      },
      {
        character: '牛',
        readings: 'うし',
        romaji: 'ushi',
        meanings: 'cow',
      },
      {
        character: '使',
        readings: 'つか',
        romaji: 'tsuka',
        meanings: 'to use',
      },
      {
        character: '働',
        readings: 'はたら',
        romaji: 'hatara',
        meanings: 'to work',
      },
      {
        character: '連',
        readings: 'つ',
        romaji: 'tsu',
        meanings: 'to link',
      },
      {
        character: '別',
        readings: 'べつ, わか',
        romaji: 'betsu, waka',
        meanings: 'to separate',
      },
      {
        character: '度',
        readings: 'ど',
        romaji: 'do',
        meanings: 'time; degrees',
      },
      {
        character: '赤',
        readings: 'あか',
        romaji: 'aka',
        meanings: 'red',
      },
      {
        character: '青',
        readings: 'あお',
        romaji: 'ao',
        meanings: 'blue',
      },
      {
        character: '色',
        readings: 'いろ',
        romaji: 'iro',
        meanings: 'color',
      },
    ],
  },
];

export default kanjiData;
