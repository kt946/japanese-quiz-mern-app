// array of objects of kanji characters and romaji grouped by units
const kanjiData = {
  unit1: {
    subject: 'Numbers and Money',
    kanji: [
      { character: '一', romaji: 'ichi', meanings: 'one' },
      { character: '二', romaji: 'ni', meanings: 'two' },
      { character: '三', romaji: 'san', meanings: 'three' },
      { character: '四', romaji: 'shi/yon', meanings: 'four' },
      { character: '五', romaji: 'go', meanings: 'five' },
      { character: '六', romaji: 'roku', meanings: 'six' },
      { character: '七', romaji: 'nana/shichi', meanings: 'seven' },
      { character: '八', romaji: 'hachi', meanings: 'eight' },
      { character: '九', romaji: 'kyuu', meanings: 'nine' },
      { character: '十', romaji: 'juu', meanings: 'ten' },
      { character: '百', romaji: 'hyaku', meanings: 'hundred' },
      { character: '千', romaji: 'sen', meanings: 'thousand' },
      { character: '円', romaji: 'en', meanings: 'yen' },
    ],
  },
  unit2: {
    subject: 'Date and Time',
    kanji: [
      { character: '本', romaji: 'hon', meanings: 'book' },
      { character: '今', romaji: 'ima', meanings: 'now' },
      { character: '時', romaji: 'ji', meanings: 'time/hour' },
      { character: '分', romaji: 'fun', meanings: 'minute' },
      { character: '秒', romaji: 'byou', meanings: 'second' },
      { character: '月', romaji: 'getsu/gatsu', meanings: 'month' },
      { character: '日', romaji: 'ni/nichi', meanings: 'day/sun' },
      { character: '年', romaji: 'nen', meanings: 'year' },
      { character: '火', romaji: 'ka', meanings: 'fire' },
      { character: '水', romaji: 'sui', meanings: 'water' },
      { character: '木', romaji: 'moku', meanings: 'tree' },
      { character: '金', romaji: 'kin', meanings: 'gold' },
      { character: '土', romaji: 'do', meanings: 'earth' },
      { character: '曜', romaji: 'you', meanings: 'weekday' },
    ],
  },
  unit3: {
    subject: 'Colors',
    kanji: [
      { character: '色', romaji: 'iro', meanings: 'color' },
      { character: '赤', romaji: 'aka', meanings: 'red' },
      { character: '青', romaji: 'ao', meanings: 'blue' },
      { character: '黄', romaji: 'ki', meanings: 'yellow' },
      { character: '緑', romaji: 'midori', meanings: 'green' },
      { character: '白', romaji: 'shiro', meanings: 'white' },
      { character: '黒', romaji: 'kuro', meanings: 'black' },
      { character: '茶', romaji: 'cha', meanings: 'brown' },
      { character: '灰', romaji: 'hai', meanings: 'gray' },
      { character: '紫', romaji: 'murasaki', meanings: 'purple' },
      { character: '橙', romaji: 'daidai', meanings: 'orange' },
      { character: '桃', romaji: 'momomo', meanings: 'peach' },
      { character: '水色', romaji: 'mizuiro', meanings: 'light blue' },
      { character: '銀色', romaji: 'giniro', meanings: 'silver' },
      { character: '金色', romaji: 'kiniro', meanings: 'gold' },
    ],
  },
  unit4: {
    subject: 'Food',
    kanji: [
      { character: '飯', romaji: 'han', meanings: 'cooked rice/meal' },
      { character: '肉', romaji: 'niku', meanings: 'meat' },
      { character: '野菜', romaji: 'yasai', meanings: 'vegetable' },
      { character: '果物', romaji: 'kudamono', meanings: 'fruit' },
      { character: '麦', romaji: 'mugi', meanings: 'wheat' },
      { character: '米', romaji: 'kome', meanings: 'rice' },
      { character: '酒', romaji: 'sake', meanings: 'alcohol' },
      { character: '茶', romaji: 'cha', meanings: 'tea' },
    ],
  },
  unit5: {
    subject: 'Animals',
    kanji: [
      { character: '犬', romaji: 'inu', meanings: 'dog' },
      { character: '猫', romaji: 'neko', meanings: 'cat' },
      { character: '魚', romaji: 'sakana', meanings: 'fish' },
      { character: '兎', romaji: 'usagi', meanings: 'rabbit' },
      { character: '鳥', romaji: 'tori', meanings: 'bird' },
      { character: '熊', romaji: 'kuma', meanings: 'bear' },
      { character: '牛', romaji: 'ushi', meanings: 'cow' },
      { character: '馬', romaji: 'uma', meanings: 'horse' },
      { character: '羊', romaji: 'hitsuji', meanings: 'sheep' },
      { character: '豚', romaji: 'buta', meanings: 'pig' },
      { character: '鶏', romaji: 'tori', meanings: 'chicken' },
    ],
  },
  unit6: {
    subject: 'Places',
    kanji: [
      { character: '山', romaji: 'yama', meanings: 'mountain' },
      { character: '川', romaji: 'kawa', meanings: 'river' },
      { character: '海', romaji: 'umi', meanings: 'sea' },
      { character: '島', romaji: 'shima', meanings: 'island' },
      { character: '市', romaji: 'shi', meanings: 'city' },
      { character: '町', romaji: 'machi', meanings: 'town' },
      { character: '村', romaji: 'mura', meanings: 'village' },
      { character: '家', romaji: 'ie', meanings: 'house' },
      { character: '店', romaji: 'mise', meanings: 'shop' },
      { character: '駅', romaji: 'eki', meanings: 'station' },
      { character: '道', romaji: 'michi', meanings: 'road' },
      { character: '院', romaji: 'in', meanings: 'institution' },
    ],
  },
  unit7: {
    subject: 'Actions',
    kanji: [
      { character: '行', romaji: 'iku/gyou', meanings: 'to go' },
      { character: '来', romaji: 'kuru', meanings: 'to come' },
      { character: '立', romaji: 'tatsu', meanings: 'to stand' },
      { character: '坐', romaji: 'su', meanings: 'to sit' },
      { character: '歩', romaji: 'aruku', meanings: 'to walk' },
      { character: '走', romaji: 'hashiru', meanings: 'to run' },
      { character: '泳', romaji: 'oyogu', meanings: 'to swim' },
      { character: '食', romaji: 'tabe/shoku', meanings: 'to eat' },
      { character: '飲', romaji: 'no/in', meanings: 'to drink' },
      { character: '見', romaji: 'mi', meanings: 'to see' },
      { character: '聞', romaji: 'kiku', meanings: 'to hear' },
      { character: '作', romaji: 'tsukuru', meanings: 'to make' },
      { character: '待', romaji: 'matsu', meanings: 'to wait' },
      { character: '話', romaji: 'hanasu', meanings: 'to talk' },
      { character: '読', romaji: 'yomu', meanings: 'to read' },
      { character: '書', romaji: 'kaku', meanings: 'to write' },
      { character: '買', romaji: 'kau', meanings: 'to buy' },
      { character: '売', romaji: 'uru', meanings: 'to sell' },
    ],
  },
  unit8: {
    subject: 'Objects',
    kanji: [
      { character: '本', romaji: 'hon', meanings: 'book' },
      { character: '紙', romaji: 'kami', meanings: 'paper' },
      { character: '車', romaji: 'kuruma', meanings: 'car' },
      { character: '電車', romaji: 'densha', meanings: 'train' },
      { character: '自転車', romaji: 'jitensha', meanings: 'bicycle' },
      { character: '飛行機', romaji: 'hikouki', meanings: 'airplane' },
      { character: '船', romaji: 'fun', meanings: 'ship' },
      { character: '鉄道', romaji: 'tetsudou', meanings: 'railway' },
    ],
  },
  unit9: {
    subject: 'Body Parts',
    kanji: [
      { character: '頭', romaji: 'atama', meanings: 'head' },
      { character: '顔', romaji: 'kao', meanings: 'face' },
      { character: '耳', romaji: 'mimi', meanings: 'ear' },
      { character: '目', romaji: 'me', meanings: 'eye' },
      { character: '鼻', romaji: 'hana', meanings: 'nose' },
      { character: '口', romaji: 'kuchi', meanings: 'mouth' },
      { character: '手', romaji: 'te', meanings: 'hand' },
      { character: '足', romaji: 'ashi', meanings: 'foot' },
      { character: '肩', romaji: 'kata', meanings: 'shoulder' },
      { character: '胸', romaji: 'mune', meanings: 'chest' },
      { character: '腕', romaji: 'ude', meanings: 'arm' },
      { character: '腰', romaji: 'koshi', meanings: 'waist' },
      { character: '脚', romaji: 'kutsu', meanings: 'leg' },
      { character: '髪', romaji: 'kami', meanings: 'hair' },
      { character: '歯', romaji: 'ha', meanings: 'tooth' },
    ],
  },
  unit10: {
    subject: 'Family',
    kanji: [
      { character: '人', romaji: 'hito', meanings: 'person' },
      { character: '父', romaji: 'chichi', meanings: 'father' },
      { character: '母', romaji: 'haha', meanings: 'mother' },
      { character: '兄', romaji: 'ani', meanings: 'older brother' },
      { character: '弟', romaji: 'otouto', meanings: 'younger brother' },
      { character: '姉', romaji: 'ane', meanings: 'older sister' },
      { character: '妹', romaji: 'imouto', meanings: 'younger sister' },
      { character: '子', romaji: 'ko', meanings: 'child' },
      { character: '息子', romaji: 'musuko', meanings: 'son' },
      { character: '娘', romaji: 'musume', meanings: 'daughter' },
      { character: '夫', romaji: 'otto', meanings: 'husband' },
      { character: '妻', romaji: 'tsuma', meanings: 'wife' },
      { character: '祖父', romaji: 'sofu', meanings: 'grandfather' },
      { character: '祖母', romaji: 'sobo', meanings: 'grandmother' },
      { character: '孫', romaji: 'mago', meanings: 'grandchild' },
      { character: '孫娘', romaji: 'mago musume', meanings: 'granddaughter' },
      { character: '孫息子', romaji: 'mago musuko', meanings: 'grandson' },
      { character: '家族', romaji: 'kazoku', meanings: 'family' },
    ],
  },
};

export default kanjiData;
