import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { HiX } from 'react-icons/hi';
import { generateQuiz } from '../utils/quiz';

const hiraganaQuiz = generateQuiz(5);

console.log(hiraganaQuiz);

const HiraganaQuiz = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questionState, setQuestionState] = useState(null);

  const handleProgressBarWidth = (width) => {
    let newWidth = progressBarWidth + width;
    console.log(newWidth);
    if (newWidth >= 100) {
      setProgressBarWidth(100);
    } else if (newWidth <= 0) {
      setProgressBarWidth(0);
    } else {
      setProgressBarWidth(newWidth);
    }
  };

  const checkAnswer = (answer) => {
    if (answer === hiraganaQuiz[currentQuestion].answer) {
      console.log('correct');
      setQuestionState('correct');
      handleProgressBarWidth(20);
    } else {
      console.log('incorrect');
      setQuestionState('incorrect');
      handleProgressBarWidth(-10);
    }
  };

  const cycleNextQuestion = () => {
    if (currentQuestion < hiraganaQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
      console.log('Quiz completed!');
    }
    setSelectedOption(null);
    setQuestionState(null);
  };

  return (
    <div
      id="characters"
      className="w-full min-h-screen bg-slate-100 flex flex-col justify-between"
    >
      {/* Quiz Header */}
      <div className="h-20">
        <div className="w-full h-full max-w-5xl mx-auto pt-12 px-4 flex items-center">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn-transition hover:opacity-60"
          >
            <HiX className="w-7 h-7 mr-4" />
          </button>

          {/* Progress Bar */}
          <div className="bg-slate-300 h-4 w-full rounded-2xl overflow-x-hidden">
            <div
              className={`${
                progressBarWidth <= 0 ? 'opacity-0' : ''
              } btn-transition h-full px-2 pt-1 bg-gradient-to-b from-primary-tint to-red-800 rounded-2xl`}
              style={{ width: `${progressBarWidth}%` }}
            >
              {/* inner bar */}
              <div className="bg-white/30 h-1 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Main */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-2xl h-full min-h-[450px] mx-4 flex flex-col">
          <h1 className="font-bold text-3xl">
            Select the correct character(s) for "<span>{hiraganaQuiz[currentQuestion].question}</span>"
          </h1>
          <div className="flex flex-col grow justify-center items-center border-t-2 border-slate-300 font-medium text-5xl gap-4">
            {hiraganaQuiz[currentQuestion].options.map((option) => (
              <button
                key={`id-${option}`}
                type="button"
                className={`w-full py-2 rounded-xl border-2 ${
                  selectedOption === option
                    ? 'bg-sky-200 border-2 border-sky-400'
                    : 'border-slate-300 hover:bg-slate-200'
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Footer */}
      <div
        className={`h-32 ${
          questionState === 'correct'
            ? 'bg-[#DAFEBE]'
            : questionState === 'incorrect'
            ? 'bg-[#FFEBEE]'
            : 'border-t-2 border-slate-300 '
        }`}
      >
        <div className="w-full h-full max-w-5xl mx-auto px-4 flex items-center">
          {/* Answer Buttons */}
          <div className="flex flex-row justify-between w-full">
            {/* Skip Button */}
            <button
              type="button"
              className="quiz-btn-style text-blue-500 border-2 border-blue-500 bg-white hover:bg-slate-200 rounded-xl"
              onClick={() => handleProgressBarWidth(-10)}
            >
              Skip
            </button>

            {!questionState ? (
              // Check Button
              <button
                type="button"
                className="quiz-btn-style text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
                onClick={() => checkAnswer(selectedOption)}
              >
                Check
              </button>
            ) : (
              // Next Button
              <button
                type="button"
                className={`quiz-btn-style text-white ${
                  questionState === 'correct' ? 'bg-[#58CC02] hover:bg-[#4CAD02]' : 'bg-red-500 hover:bg-red-600'
                } rounded-xl`}
                onClick={() => cycleNextQuestion()}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiraganaQuiz;
