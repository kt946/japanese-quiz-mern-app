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
    <div className="grow bg-slate-100 flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">Quiz Complete!</h1>
      <hr className="w-full max-w-4xl border-4 border-primary-shade" />
      <h2 className="text-2xl">
        You scored <span className="font-bold text-primary-shade">{score} %</span>
      </h2>
      <h2 className="text-2xl">
        You earned <span className="font-bold text-primary-shade">+{xp} XP</span>
      </h2>
      <h2 className="text-2xl">Time: {time}</h2>
    </div>
  );
};

export default CompleteScreen;
