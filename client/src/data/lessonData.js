// array of objects of vocabulary words grouped by subject
const lessonData = [
  // Lesson Objects
  {
    lessonNumber: 0,
    lessonTitle: 'Greetings and Numbers',
    lessonUrl: 'lesson-0',
    lessonUnits: [
      {
        unitTitle: 'Greetings',
        unitUrl: 'greetings',
        unitContent: [
          // { character: '', meanings: '' },
          {
            character: 'おはよう。',
            meanings: 'Good morning.',
          },
          {
            character: 'おはようございます。',
            meanings: 'Good morning. (polite)',
          },
          {
            character: 'こんにちは。',
            meanings: 'Good afternoon.',
          },
          {
            character: 'こんばんは。',
            meanings: 'Good evening.',
          },
          {
            character: 'さようなら。',
            meanings: 'Goodbye.',
          },
          {
            character: 'おやすみ (なさい)。',
            meanings: 'Good night. (polite)',
          },
          {
            character: 'ありがとう。',
            meanings: 'Thank you.',
          },
          {
            character: 'ありがとうございます。',
            meanings: 'Thank you. (polite)',
          },
          {
            character: 'すみません。',
            meanings: "Excuse me.; I'm sorry.",
          },
          {
            character: 'いいえ。',
            meanings: 'No.; Not at all.',
          },
          {
            character: 'いってきます。',
            meanings: "I'll go and come back.",
          },
          {
            character: 'いってらっしゃい。',
            meanings: 'Please go and come back.',
          },
          {
            character: 'ただいま。',
            meanings: "I'm home.",
          },
          {
            character: 'おかえりなさい。',
            meanings: 'Welcome home.',
          },
          {
            character: 'いただきます。',
            meanings: 'Thank you for the meal. (before eating)',
          },
          {
            character: 'ごちそうさま(でした)。',
            meanings: 'Thank you for the meal. (after eating)',
          },
          {
            character: 'はじめまして。',
            meanings: 'How do you do?',
          },
          {
            character: '~です',
            meanings: 'I am...',
          },
          {
            character: 'よろしくおねがいします。',
            meanings: 'Nice to meet you.',
          },
        ],
      },
      {
        unitTitle: 'Numbers',
        unitUrl: 'numbers',
        unitContent: [
          {
            character: 'ぜろ/れい',
            meanings: '0',
          },
          {
            character: 'いち',
            meanings: '1',
          },
          {
            character: 'に',
            meanings: '2',
          },
          {
            character: 'さん',
            meanings: '3',
          },
          {
            character: 'よん/し/(よ)',
            meanings: '4',
          },
          {
            character: 'ご',
            meanings: '5',
          },
          {
            character: 'ろく',
            meanings: '6',
          },
          {
            character: 'なな/しち',
            meanings: '7',
          },

          {
            character: 'はち',
            meanings: '8',
          },
          {
            character: 'きゅう/く',
            meanings: '9',
          },
          {
            character: 'じゅう',
            meanings: '10',
          },
          {
            character: 'じゅういち',
            meanings: '11',
          },
          {
            character: 'じゅうに',
            meanings: '12',
          },
          {
            character: 'じゅうさん',
            meanings: '13',
          },
          {
            character: 'じゅうよん/じゅうし',
            meanings: '14',
          },
          {
            character: 'じゅうご',
            meanings: '15',
          },
          {
            character: 'じゅうろく',
            meanings: '16',
          },
          {
            character: 'じゅうなな/じゅうしち',
            meanings: '17',
          },
          {
            character: 'じゅうはち',
            meanings: '18',
          },
          {
            character: 'じゅうきゅう/じゅうく',
            meanings: '19',
          },
          {
            character: 'にじゅう',
            meanings: '20',
          },
          {
            character: 'さんじゅう',
            meanings: '30',
          },
          {
            character: 'よんじゅう',
            meanings: '40',
          },
          {
            character: 'ごじゅう',
            meanings: '50',
          },
          {
            character: 'ろくじゅう',
            meanings: '60',
          },
          {
            character: 'ななじゅう',
            meanings: '70',
          },
          {
            character: 'はちじゅう',
            meanings: '80',
          },
          {
            character: 'きゅうじゅう',
            meanings: '90',
          },
          {
            character: 'ひゃく',
            meanings: '100',
          },
        ],
      },
    ],
  },
  {
    lessonNumber: 1,
    lessonTitle: 'New Friends',
    lessonUrl: 'lesson-1',
    lessonUnits: [
      {
        unitTitle: 'Vocabulary',
        unitUrl: 'vocabulary',
        unitContent: [
          {
            character: 'だいがく',
            meanings: 'college; university',
          },
          {
            character: 'こうこう',
            meanings: 'high school',
          },
          {
            character: 'がくせい',
            meanings: 'student',
          },
          {
            character: 'だいがくせい',
            meanings: 'college student',
          },
          {
            character: 'りゅうがくせい',
            meanings: 'international student',
          },
          {
            character: 'せんせい',
            meanings: 'teacher; Professor ...',
          },
          {
            character: '～ねんせい',
            meanings: '... year student',
          },
          {
            character: 'いちねんせい',
            meanings: 'first-year student',
          },
          {
            character: 'せんこう',
            meanings: 'major',
          },
          {
            character: 'わたし',
            meanings: 'I',
          },
          {
            character: 'ともだち',
            meanings: 'friend',
          },
          {
            character: '～さん',
            meanings: 'Mr./Ms. ...',
          },
          {
            character: '～じん',
            meanings: '... people',
          },
          {
            character: 'にほんじん',
            meanings: 'Japanese people',
          },
          {
            character: 'いま',
            meanings: 'now',
          },
          {
            character: 'ごぜん',
            meanings: 'a.m.',
          },
          {
            character: 'ごご',
            meanings: 'p.m.',
          },
          {
            character: '～じ',
            meanings: "o'clock",
          },
          {
            character: 'いちじ',
            meanings: "one o'clock",
          },
          {
            character: 'はん',
            meanings: 'half',
          },
          {
            character: 'にじはん',
            meanings: 'half past two; two thirty',
          },
          {
            character: 'にほん',
            meanings: 'Japan',
          },
          {
            character: 'アメリカ',
            meanings: 'America',
          },
          {
            character: '～ご',
            meanings: '... language',
          },
          {
            character: 'にほんご',
            meanings: 'Japanese language',
          },
          {
            character: '～さい',
            meanings: '... years old',
          },
          {
            character: 'でんわ',
            meanings: 'telephone',
          },
          {
            character: '～ばん',
            meanings: 'number ...',
          },
          {
            character: 'ばんごう',
            meanings: 'number',
          },
          {
            character: 'なん／なに',
            meanings: 'what',
          },
          {
            character: 'あのう',
            meanings: 'um...',
          },
          {
            character: 'はい',
            meanings: 'yes',
          },
          {
            character: 'そうです',
            meanings: "That's right.",
          },
          {
            character: 'そうですか',
            meanings: 'I see.; Is that so?',
          },
          {
            character: 'くに',
            meanings: 'country',
          },
          {
            character: 'イギリス',
            meanings: 'Britain',
          },
          {
            character: 'オーストラリア',
            meanings: 'Australia',
          },
          {
            character: 'かんこく',
            meanings: 'Korea',
          },
          {
            character: 'カナダ',
            meanings: 'Canada',
          },
          {
            character: 'ちゅうごく',
            meanings: 'China',
          },
          {
            character: 'インド',
            meanings: 'India',
          },
          {
            character: 'エジプト',
            meanings: 'Egypt',
          },
          {
            character: 'フィリピン',
            meanings: 'Philippines',
          },
          {
            character: 'アジアけんきゅう',
            meanings: 'Asian studies',
          },
          {
            character: 'けいざい',
            meanings: 'economics',
          },
          {
            character: 'こうがく',
            meanings: 'engineering',
          },
          {
            character: 'こくさいかんけい',
            meanings: 'international relations',
          },
          {
            character: 'コンピューター',
            meanings: 'computer',
          },
          {
            character: 'せいじ',
            meanings: 'politics',
          },
          {
            character: 'せいぶつがく',
            meanings: 'biology',
          },
          {
            character: 'ビジネス',
            meanings: 'business',
          },
          {
            character: 'ぶんがく',
            meanings: 'literature',
          },
          {
            character: 'れきし',
            meanings: 'history',
          },
          {
            character: 'しごと',
            meanings: 'job; occupation',
          },
          {
            character: 'いしゃ',
            meanings: 'doctor',
          },
          {
            character: 'かいしゃいん',
            meanings: 'office worker',
          },
          {
            character: 'かんごし',
            meanings: 'nurse',
          },
          {
            character: 'こうこうせい',
            meanings: 'high school student',
          },
          {
            character: 'しゅふ',
            meanings: 'housewife',
          },
          {
            character: 'だいがくいんせい',
            meanings: 'graduate student',
          },
          {
            character: 'べんごし',
            meanings: 'lawyer',
          },
          {
            character: 'かぞく',
            meanings: 'family',
          },
          {
            character: 'おかあさん',
            meanings: 'mother',
          },
          {
            character: 'おとうさん',
            meanings: 'father',
          },
          {
            character: 'おねえさん',
            meanings: 'older sister',
          },
          {
            character: 'おにいさん',
            meanings: 'older brother',
          },
          {
            character: 'いもうと',
            meanings: 'younger sister',
          },
          {
            character: 'おとうと',
            meanings: 'younger brother',
          },
        ],
      },
    ],
  },
];

export default lessonData;
