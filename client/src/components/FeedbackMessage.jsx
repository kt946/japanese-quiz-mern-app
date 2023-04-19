import React from 'react';
import { HiX, HiCheck } from 'react-icons/hi';

const FeedbackMessage = ({ questionState, answer }) => {
  return (
    <div className={`h-full flex  ${questionState === 'correct' ? 'text-[#4CAD02]' : 'text-red-600'}`}>
      <div className="w-20 h-20 mr-4 bg-white rounded-full flex justify-center items-center">
        {questionState === 'correct' ? (
          <HiCheck className="w-16 h-16 stroke-1" />
        ) : (
          <HiX className="w-16 h-16 stroke-1" />
        )}
      </div>
      <div>
        <h2 className="font-bold text-2xl">{questionState === 'correct' ? 'Correct!' : 'Correct Solution:'}</h2>
        {questionState === 'incorrect' && <p className="text-xl font-semibold">{answer}</p>}
      </div>
    </div>
  );
};

export default FeedbackMessage;
