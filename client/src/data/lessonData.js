// array of objects of vocabulary words grouped by subject
const lessonData = {
  lesson0: {
    greetings: {
      subject: 'Greetings',
      vocabulary: [
        // { character: '', romaji: '', meanings: '' },
        {
          character: 'おはよう。',
          romaji: 'Ohayoo',
          meanings: 'Good morning.',
        },
        {
          character: 'おはようございます。',
          romaji: 'Ohayoo gozaimasu',
          meanings: 'Good morning. (polite)',
        },
        {
          character: 'こんにちは。',
          romaji: 'Konnichiwa',
          meanings: 'Good afternoon.',
        },
        {
          character: 'こんばんは。',
          romaji: 'Konbanwa',
          meanings: 'Good evening.',
        },
        {
          character: 'さようなら。',
          romaji: 'Sayoonara',
          meanings: 'Goodbye.',
        },
        {
          character: 'おやすみ (なさい)。',
          romaji: 'Oyasumi (nasai)',
          meanings: 'Good night. (polite)',
        },
        {
          character: 'ありがとう。',
          romaji: 'Arigatoo',
          meanings: 'Thank you.',
        },
        {
          character: 'ありがとうございます。',
          romaji: 'Arigatoo gozaimasu',
          meanings: 'Thank you. (polite)',
        },
        {
          character: 'すみません。',
          romaji: 'Sumimasen',
          meanings: "Excuse me.; I'm sorry.",
        },
        {
          character: 'いいえ。',
          romaji: 'Iie',
          meanings: 'No.; Not at all.',
        },
        {
          character: 'いってきます。',
          romaji: 'Itte kimasu',
          meanings: "I'll go and come back.",
        },
        {
          character: 'いってらっしゃい。',
          romaji: 'Itterasshai',
          meanings: 'Please go and come back.',
        },
        {
          character: 'ただいま。',
          romaji: 'Tadaima',
          meanings: "I'm home.",
        },
        {
          character: 'おかえりなさい。',
          romaji: 'Okaeri (nasai)',
          meanings: 'Welcome home.',
        },
        {
          character: 'いただきます。',
          romaji: 'Itadakimasu',
          meanings: 'Thank you for the meal. (before eating)',
        },
        {
          character: 'ごちそうさま(でした)。',
          romaji: 'Gochisoosama (deshita)',
          meanings: 'Thank you for the meal. (after eating)',
        },
        {
          character: 'はじめまして。',
          romaji: 'Hajimemashite',
          meanings: 'How do you do?',
        },
        {
          character: '~です',
          romaji: '...desu',
          meanings: 'I am...',
        },
        {
          character: 'よろしくおねがいします。',
          romaji: 'Yoroshiku onegai shimasu',
          meanings: 'Nice to meet you.',
        },
      ],
      numbers: [
        {
          character: 'ぜろ/れい',
          romaji: 'zero/rei',
          meanings: '0',
        },
        {
          character: 'いち',
          romaji: 'ichi',
          meanings: '1',
        },
        {
          character: 'に',
          romaji: 'ni',
          meanings: '2',
        },
        {
          character: 'さん',
          romaji: 'san',
          meanings: '3',
        },
        {
          character: 'よん/し/(よ)',
          romaji: 'yon/shi/(yo)',
          meanings: '4',
        },
        {
          character: 'ご',
          romaji: 'go',
          meanings: '5',
        },
        {
          character: 'ろく',
          romaji: 'roku',
          meanings: '6',
        },
        {
          character: 'なな/しち',
          romaji: 'nana/shichi',
          meanings: '7',
        },

        {
          character: 'はち',
          romaji: 'hachi',
          meanings: '8',
        },
        {
          character: 'きゅう/く',
          romaji: 'kyuu/ku',
          meanings: '9',
        },
        {
          character: 'じゅう',
          romaji: 'juu',
          meanings: '10',
        },
        {
          character: 'じゅういち',
          romaji: 'juuichi',
          meanings: '11',
        },
        {
          character: 'じゅうに',
          romaji: 'juuni',
          meanings: '12',
        },
        {
          character: 'じゅうさん',
          romaji: 'juusan',
          meanings: '13',
        },
        {
          character: 'じゅうよん/じゅうし',
          romaji: 'juuyon/juushi',
          meanings: '14',
        },
        {
          character: 'じゅうご',
          romaji: 'juugo',
          meanings: '15',
        },
        {
          character: 'じゅうろく',
          romaji: 'juuroku',
          meanings: '16',
        },
        {
          character: 'じゅうなな/じゅうしち',
          romaji: 'juunana/juushichi',
          meanings: '17',
        },
        {
          character: 'じゅうはち',
          romaji: 'juuhachi',
          meanings: '18',
        },
        {
          character: 'じゅうきゅう/じゅうく',
          romaji: 'juukyuu/juuku',
          meanings: '19',
        },
        {
          character: 'にじゅう',
          romaji: 'nijuu',
          meanings: '20',
        },
        {
          character: 'さんじゅう',
          romaji: 'sanjuu',
          meanings: '30',
        },
        {
          character: 'よんじゅう',
          romaji: 'yonjuu',
          meanings: '40',
        },
        {
          character: 'ごじゅう',
          romaji: 'gojuu',
          meanings: '50',
        },
        {
          character: 'ろくじゅう',
          romaji: 'rokujuu',
          meanings: '60',
        },
        {
          character: 'ななじゅう',
          romaji: 'nanajuu',
          meanings: '70',
        },
        {
          character: 'はちじゅう',
          romaji: 'hachijuu',
          meanings: '80',
        },
        {
          character: 'きゅうじゅう',
          romaji: 'kyuujuu',
          meanings: '90',
        },
        {
          character: 'ひゃく',
          romaji: 'hyaku',
          meanings: '100',
        },
      ],
    },
  },
  lesson1: {
    newFriends: {
      subject: 'New Friends',
      vocabulary: [
        {
          character: '',
          romaji: '',
          meanings: '',
        },
      ],
    },
  },
};

export default lessonData;
