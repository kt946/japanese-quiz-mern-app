import { useEffect } from 'react';
import { runFireworks } from '../utils/confetti';

const CompleteScreen = ({ quiz }) => {
  useEffect(() => {
    runFireworks();
  }, []);

  // get score, xp, and formatted time from quiz
  const { score, xp } = quiz.getScoreAndXP();
  const time = quiz.getTime();

  return (
    <div className="grow flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">Quiz Complete!</h1>
      <hr className="w-full max-w-2xl border-4 border-primary" />
      {/* Quiz Statistics Cards */}
      <div className="w-full max-w-2xl flex flex-row gap-2 sm:gap-4 md:gap-8 font-bold">
        {/* Score Card */}
        <div className="quiz-stat-container border-amber-500">
          {/* Card Header */}
          <div className="bg-amber-200 p-2">
            <h2 className="uppercase text-amber-700">Score</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-amber-700">{score} %</h3>
          </div>
        </div>
        {/* XP Card */}
        <div className="quiz-stat-container border-sky-500">
          {/* Card Header */}
          <div className="bg-sky-200 p-2">
            <h2 className="uppercase text-sky-700">Earned</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-sky-700">+{xp} XP</h3>
          </div>
        </div>
        {/* Time Card */}
        <div className="quiz-stat-container border-lime-500">
          {/* Card Header */}
          <div className="bg-lime-200 p-2">
            <h2 className="uppercase text-lime-700">Time</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-lime-700">{time}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteScreen;
