import React from 'react';
import { HiX, HiCheck } from 'react-icons/hi';

const FeedbackMessage = ({ questionState, answer }) => {
  return (
    <div className={`py-4 md:p-0 flex h-full ${questionState === 'correct' ? 'text-[#4CAD02] dark:text-lime-500' : 'text-red-600 dark:text-red-400'}`}>
      {/* Icon */}
      <div className={`hidden w-20 h-20 mr-4 rounded-full md:flex justify-center items-center bg-white ${questionState === 'correct' ? ' dark:bg-lime-500' : 'dark:bg-red-400'}`}>
        {questionState === 'correct' ? (
          <HiCheck className="w-16 h-16 stroke-1 dark:text-slate-800" />
        ) : (
          <HiX className="w-16 h-16 stroke-1 dark:text-slate-800" />
        )}
      </div>
      {/* Message */}
      <div>
        <h2 className="font-bold text-xl">{questionState === 'correct' ? 'Correct!' : 'Correct Solution:'}</h2>
        {questionState === 'incorrect' && <p className="sm:text-xl md:text-2xl font-semibold">{answer}</p>}
      </div>
    </div>
  );
};

export default FeedbackMessage;
