import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { HiX } from 'react-icons/hi';
import { CheckButton, NextButton, SkipButton, FeedbackMessage } from '../components';

const CharacterQuiz = ({ quiz }) => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const [questionState, setQuestionState] = useState(null);
  const [question, setQuestion] = useState(quiz.generateQuestion());

  const checkAnswer = (answer) => {
    if (answer === question.answer) {
      console.log('correct');
      setQuestionState('correct');
      quiz.incrementNumCorrect();
      quiz.incrementProgress(20);
    } else {
      console.log('incorrect');
      setQuestionState('incorrect');
      quiz.incrementNumIncorrect();
      quiz.decrementProgress(10);
    }

    console.log(`${quiz.progress}%`);
  };

  const cycleNextQuestion = () => {
    if (quiz.progress < 100) {
      setQuestion(quiz.generateQuestion());
      setSelectedOption(null);
      setQuestionState(null);
    } else {
      console.log('Quiz completed!');
      console.log(quiz.complete);
      console.log(`Correct: ${quiz.numCorrect}`);
      console.log(`Incorrect: ${quiz.numIncorrect}`);
      console.log(`Total questions: ${quiz.numCorrect + quiz.numIncorrect}`);
    }
  };

  return (
    <div
      id="characters"
      className="w-full min-h-screen p-4 py-6 md:p-0 bg-slate-100 flex flex-col"
    >
      {/* Quiz Header */}
      <div className="md:h-20">
        <div className="w-full h-full max-w-5xl mx-auto md:pt-12 md:px-4 flex items-center">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn-transition hover:opacity-60 mr-4"
          >
            <HiX className="w-7 h-7" />
          </button>

          {/* Progress Bar */}
          <div className="bg-slate-300 h-4 w-full rounded-2xl overflow-x-hidden">
            <div
              className={`${
                quiz.progress <= 0 ? 'opacity-0' : ''
              } btn-transition h-full px-2 pt-1 bg-gradient-to-b from-primary-tint to-red-800 rounded-2xl`}
              style={{ width: `${quiz.progress}%` }}
            >
              {/* inner bar */}
              <div className="bg-white/30 h-1 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Main */}
      <div className="grow w-full h-full my-6 flex flex-col justify-center items-center">
        <div className="grow md:grow-0 w-full md:max-w-2xl h-full md:min-h-[450px] flex flex-col justify-between gap-4">
          <h1 className="font-bold text-2xl md:text-3xl">
            Select the correct character(s) for "<span>{question.question}</span>"
          </h1>
          <div className="grow md:grow-0 h-full flex flex-col font-bold md:font-medium text-4xl md:text-5xl gap-2 md:gap-4">
            {question.choices.map((choice) => (
              <button
                key={`id-${choice}`}
                type="button"
                className={`grow md:grow-0 w-full md:py-3 rounded-xl border-2 ${
                  selectedOption === choice
                    ? 'bg-sky-200 border-2 border-sky-400'
                    : `border-slate-300 ${!questionState && 'hover:bg-slate-200'}`
                }`}
                onClick={() => setSelectedOption(choice)}
                disabled={questionState}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Footer */}
      <div
        className={`-mx-4 -mb-6 pb-6 md:m-0 md:pb-0 md:h-36 ${
          questionState === 'correct'
            ? 'bg-[#CEFEA8]'
            : questionState === 'incorrect'
            ? 'bg-[#FED6DD]'
            : 'md:border-t-2 border-slate-300 '
        }`}
      >
        <div className="w-full h-full max-w-5xl mx-auto px-4 flex items-center">
          {/* Footer Buttons */}
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
            {!questionState ? (
              // Skip Button
              <SkipButton checkAnswer={checkAnswer} />
            ) : (
              // Feedback Message
              <FeedbackMessage
                questionState={questionState}
                answer={question.answer}
              />
            )}

            {/* Check and Next Buttons */}
            {!questionState ? (
              // Check Button
              <CheckButton
                selectedOption={selectedOption}
                checkAnswer={checkAnswer}
              />
            ) : (
              // Next Button
              <NextButton
                questionState={questionState}
                cycleNextQuestion={cycleNextQuestion}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterQuiz;
