// class to generate quiz, takes in arrays of hiragana or katakana data
class QuizGenerator {
  constructor(...arrays) {
    this.selectedDataArray = this.combineAndFilterArrays(...arrays);
    this.progress = 0;
    this.numCorrect = 0;
    this.numIncorrect = 0;
    this.complete = false;
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

    // randomly choose between romaji and character for question
    if (Math.random() < 0.5) {
      return {
        question: randomQuestion.romaji,
        answer: randomQuestion.character,
        choices: this.generateAnswerOptions(randomQuestion.character, 'character'),
      };
    } else {
      return {
        question: randomQuestion.character,
        answer: randomQuestion.romaji,
        choices: this.generateAnswerOptions(randomQuestion.romaji, 'romaji'),
      };
    }
  }

  // generate array of choices for each question
  generateAnswerOptions(correctAnswer, answerType) {
    // add correct answer to array
    const choices = [correctAnswer];

    // while loop to generate 3 random choices, must not include correct answer or duplicate choices
    // match choices to answer type
    while (choices.length < 4) {
      const randomItem = this.selectedDataArray[Math.floor(Math.random() * this.selectedDataArray.length)];

      let randomChoice;
      if (answerType === 'character') {
        randomChoice = randomItem.character;
      } else {
        randomChoice = randomItem.romaji;
      }

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
      this.complete = true;
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
}

export default QuizGenerator;
