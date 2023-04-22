// class to generate quiz, takes in arrays of hiragana or katakana data
class QuizGenerator {
  constructor(type, ...arrays) {
    this.quizType = type;
    this.selectedDataArray = this.combineAndFilterArrays(...arrays);
    this.progress = 0;
    this.numCorrect = 0;
    this.numIncorrect = 0;
    this.complete = false;
    this.startTime = new Date();
    this.endTime = null;
    this.elapsedTime = null;
  }

  getQuizType() {
    return this.quizType;
  }

  // end the quiz timer
  endQuiz() {
    this.complete = true;
    this.endTime = new Date();
    // calculate elapsed time
    this.elapsedTime = (this.endTime - this.startTime) / 1000;
  }

  // combine selected data into one array and filter empty strings
  combineAndFilterArrays(...arrays) {
    const combinedArray = arrays.flat();
    return combinedArray.filter((item) => item.character !== '');
  }

  // return a question object with question, answer, and choices
  generateQuestion() {
    // choose random item from selected data array to create question
    const randomQuestion = this.selectedDataArray[Math.floor(Math.random() * this.selectedDataArray.length)];

    // if quiz type is kanji, generate kanji question, else generate hiragana or katakana question
    if (this.quizType === 'kanji') {
      return this.generateKanjiQuestion(randomQuestion);
    } else if (this.quizType === 'hiragana' || this.quizType === 'katakana') {
      return this.generateHiraKataQuestion(randomQuestion);
    }
  }

  // generate hiragana or kanji question, both have romaji and character
  generateHiraKataQuestion(randomQuestion) {
    // initialize variables for question, answer, and choices
    let question, answer, choices;

    // randomly choose between romaji and character for question
    if (Math.random() < 0.5) {
      question = `Select the correct character(s) for "${randomQuestion.romaji}"`;
      answer = randomQuestion.character;
      choices = this.generateAnswerOptions(answer, 'character');
    } else {
      question = `Select the correct character(s) for "${randomQuestion.character}"`;
      answer = randomQuestion.romaji;
      choices = this.generateAnswerOptions(answer, 'romaji');
    }

    // return question object
    return { question, answer, choices };
  }

  // generate kanji question with readings, meanings, and character
  generateKanjiQuestion(randomQuestion) {
    // initialize variables for question, answer, and choices
    let question, answer, choices;

    // randomly choose between readings, meanings, and character for question
    const randomIndex = Math.floor(Math.random() * 4);

    switch (randomIndex) {
      // Select the correct reading(s) for the character
      case 0:
        question = `Select the correct reading(s) for "${randomQuestion.character}"`;
        answer = randomQuestion.readings;
        choices = this.generateAnswerOptions(answer, 'readings');
        break;
      // Select the correct meaning(s) for the character
      case 1:
        question = `Select the correct meaning(s) for "${randomQuestion.character}"`;
        answer = randomQuestion.meanings;
        choices = this.generateAnswerOptions(answer, 'meanings');
        break;
      // Select the correct character for the reading(s)
      case 2:
        question = `Select the correct character for "${randomQuestion.readings}"`;
        answer = randomQuestion.character;
        choices = this.generateAnswerOptions(answer, 'character');
        break;
      // Select the correct character for the meaning(s)
      default:
        question = `Select the correct character for "${randomQuestion.meanings}"`;
        answer = randomQuestion.character;
        choices = this.generateAnswerOptions(answer, 'character');
        break;
    }

    // return question object
    return { question, answer, choices };
  }

  // generate array of choices for each question
  generateAnswerOptions(correctAnswer, answerType) {
    // add correct answer to array
    const choices = [correctAnswer];

    // while loop to generate 3 random choices, must not include correct answer or duplicate choices
    while (choices.length < 4) {
      // choose random item from selected data array
      const randomItem = this.selectedDataArray[Math.floor(Math.random() * this.selectedDataArray.length)];
      let randomChoice;

      // match answer type to choice type
      switch (answerType) {
        case 'romaji':
          randomChoice = randomItem.romaji;
          break;
        case 'readings':
          randomChoice = randomItem.readings;
          break;
        case 'meanings':
          randomChoice = randomItem.meanings;
          break;
        default:
          randomChoice = randomItem.character;
      }

      // add choice to array if not already in array
      if (!choices.includes(randomChoice)) {
        choices.push(randomChoice);
      }
    }

    // shuffle choices
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    return choices;
  }

  // increment progress and check if complete
  incrementProgress(num) {
    this.progress += num;
    if (this.progress >= 100) {
      this.progress = 100;
      this.endQuiz();
    }
  }

  // decrement progress
  decrementProgress(num) {
    this.progress -= num;
    if (this.progress < 0) {
      this.progress = 0;
    }
  }

  // increment numCorrect
  incrementNumCorrect() {
    this.numCorrect += 1;
  }

  // increment numIncorrect
  incrementNumIncorrect() {
    this.numIncorrect += 1;
  }

  // calculate score and xp
  getScoreAndXP() {
    const totalQuestions = this.numCorrect + this.numIncorrect;
    const percentage = Math.round((this.numCorrect / totalQuestions) * 100);

    let score = percentage;
    let xp = Math.round((percentage / 100) * 15);

    if (score === 100) {
      xp = 15;
    }

    return { score, xp };
  }

  // calculate time taken, format as mm:ss
  getTime() {
    const minutes = Math.floor(this.elapsedTime / 60);
    const seconds = Math.floor(this.elapsedTime % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

export default QuizGenerator;
