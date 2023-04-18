import { hiraganaData } from '../data';

// combine selected hiragana data into one array and filter empty strings
const selectedDataArrays = [
  ...hiraganaData.basic,
  ...hiraganaData.diacritics,
  // hiraganaData.contracted,
  // hiraganaData.doubleConsonants
].filter((item) => item.character !== '');

// generate array of 4 answer options, must not include duplicate options
const generateAnswerOptions = (correctAnswer, answerType) => {
  // add correct answer to array
  const options = [correctAnswer];

  // while loop to generate 3 random options, must not include correct answer or duplicate options
  while (options.length < 4) {
    const randomHiragana = selectedDataArrays[Math.floor(Math.random() * selectedDataArrays.length)];

    // if answer type is romaji, random option is romaji
    // if answer type is character, random option is character
    let randomOption;
    if (answerType === 'romaji') {
      randomOption = randomHiragana.romaji;
    } else {
      randomOption = randomHiragana.character;
    }

    // if random option is not correct answer and not already in array, add to array
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  // shuffle options
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
};

// generate question object with question, answer, and answer options
const generateQuestion = () => {
  // get random hiragana
  const randomHiragana = selectedDataArrays[Math.floor(Math.random() * selectedDataArrays.length)];

  // randomly choose between romaji and character
  const questionType = Math.random() < 0.5 ? 'romaji' : 'character';

  // return question object with question, answer, and answer options
  // if question type is romaji, answer is character
  // if question type is character, answer is romaji
  if (questionType === 'romaji') {
    return {
      question: randomHiragana.romaji,
      answer: randomHiragana.character,
      options: generateAnswerOptions(randomHiragana.character, 'character'),
    };
  } else {
    return {
      question: randomHiragana.character,
      answer: randomHiragana.romaji,
      options: generateAnswerOptions(randomHiragana.romaji, 'romaji'),
    };
  }
};

// generate array of question objects with question, answer, and answer options
const generateQuiz = (numberOfQuestions) => {
  const quiz = [];

  // while loop to generate questions, must not include duplicate questions
  while (quiz.length < numberOfQuestions) {
    const question = generateQuestion();
    if (!quiz.includes(question)) {
      quiz.push(question);
    }
  }

  return quiz;
};

export { generateQuiz };
