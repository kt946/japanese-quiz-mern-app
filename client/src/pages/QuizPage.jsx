import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { HiX } from 'react-icons/hi';
import { CheckButton, NextButton, SkipButton, FeedbackMessage, ContinueButton } from '../components';
import { CompleteScreen } from './';

import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_EXPERIENCE } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const QuizPage = ({ quiz }) => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const [questionState, setQuestionState] = useState(null);
  const [question, setQuestion] = useState(quiz.generateQuestion());
  const [quizComplete, setQuizComplete] = useState(false);
  const progress = quiz.getProgress();

  // check answer and update progress
  const checkAnswer = (answer) => {
    if (answer === question.answer) {
      setQuestionState('correct');
      quiz.incrementNumCorrect();
      quiz.incrementProgress(20);
    } else {
      setQuestionState('incorrect');
      quiz.incrementNumIncorrect();
      quiz.decrementProgress(10);
    }
  };

  // cycle to next question, or complete quiz
  const cycleNextQuestion = () => {
    if (progress < 100) {
      setQuestion(quiz.generateQuestion());
      setSelectedOption(null);
      setQuestionState(null);
    } else {
      const { xp } = quiz.getScoreAndXP();
      updateUserExperience(xp);
    }
  };

  // get the user's data from the server
  const { data } = useQuery(QUERY_ME);
  // set the user's data to a variable
  const user = data?.me || {};

  // set up the mutation for updating user's experience
  const [updateExperience, { loading }] = useMutation(UPDATE_EXPERIENCE);

  // update current user's experience
  const updateUserExperience = async (experience) => {
    // increment the user's current experience
    let currentExperience = user.experience;
    currentExperience += experience;

    try {
      // execute the mutation
      await updateExperience({
        // pass the new experience value to the mutation under the experience variable
        variables: {
          experience: currentExperience,
        },
      });

      // set the quiz to complete and render the complete screen
      setQuizComplete(true);
      setQuestionState(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      id="characters"
      className="w-full min-h-screen p-4 py-6 md:p-0 flex flex-col"
    >
      {/* Quiz Header */}
      {!quizComplete && (
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
            <div className="bg-gray-300 h-4 w-full rounded-2xl overflow-x-hidden">
              <div
                className={`${
                  progress <= 0 ? 'opacity-0' : ''
                } btn-transition h-full px-2 pt-1 bg-gradient-to-b from-primary-tint to-red-800 rounded-2xl`}
                style={{ width: `${progress}%` }}
              >
                {/* inner bar */}
                <div className="bg-white/30 h-1 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Main */}
      {!quizComplete && (
        <div className="grow w-full h-full my-6 flex flex-col justify-center items-center">
          <div className="grow md:grow-0 w-full md:max-w-2xl h-full md:min-h-[450px] flex flex-col justify-around gap-4">
            <h1 className="font-bold text-2xl sm:text-3xl">{question.question}</h1>
            <div className="grow md:grow-0 h-full grid grid-cols font-medium text-3xl sm:text-4xl gap-2 md:gap-4">
              {question.choices.map((choice) => (
                <button
                  key={`id-${choice}`}
                  type="button"
                  className={`grow md:grow-0 w-full md:py-3 rounded-xl border-2 ${
                    selectedOption === choice
                      ? 'bg-sky-200 border-2 border-sky-400'
                      : `border-gray-300 ${!questionState && 'hover:bg-gray-200'}`
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
      )}

      {/* Quiz Completion Screen */}
      {quizComplete && <CompleteScreen quiz={quiz} />}

      {/* Quiz Footer */}
      <div
        className={`-mx-4 -mb-6 pb-6 md:m-0 md:pb-0 md:h-36 ${
          questionState === 'correct'
            ? 'bg-[#CEFEA8]'
            : questionState === 'incorrect'
            ? 'bg-[#FED6DD]'
            : 'md:border-t-2 border-gray-300 '
        }`}
      >
        <div className="w-full h-full max-w-5xl mx-auto px-4 flex items-center">
          {/* Footer Buttons */}
          {!quizComplete && (
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
                  loading={loading}
                />
              )}
            </div>
          )}

          {/* Continue Button */}
          {quizComplete && (
            <div className="w-full flex justify-end">
              <ContinueButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
