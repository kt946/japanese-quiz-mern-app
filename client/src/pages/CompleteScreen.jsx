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
        <div className="quiz-stat-container bg-amber-400">
          {/* Card Header */}
          <div className="p-1">
            <h2 className="uppercase">Score</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-amber-700 dark:text-amber-400">{score} %</h3>
          </div>
        </div>

        {/* XP Card */}
        <div className="quiz-stat-container bg-sky-400">
          {/* Card Header */}
          <div className="p-1">
            <h2 className="uppercase">Earned</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-sky-700 dark:text-sky-400">+{xp} XP</h3>
          </div>
        </div>

        {/* Time Card */}
        <div className="quiz-stat-container bg-lime-400">
          {/* Card Header */}
          <div className="p-1">
            <h2 className="uppercase">Time</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-lime-700 dark:text-lime-400">{time}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteScreen;
