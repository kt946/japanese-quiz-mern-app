import React from 'react';
import { HiX, HiCheck } from 'react-icons/hi';

const FeedbackMessage = ({ questionState, answer }) => {
  return (
    <div className={`py-4 md:p-0 flex h-full ${questionState === 'correct' ? 'text-[#4CAD02]' : 'text-red-600'}`}>
      {/* Icon */}
      <div className="hidden w-20 h-20 mr-4 bg-white rounded-full md:flex justify-center items-center">
        {questionState === 'correct' ? (
          <HiCheck className="w-16 h-16 stroke-1" />
        ) : (
          <HiX className="w-16 h-16 stroke-1" />
        )}
      </div>
      {/* Message */}
      <div>
        <h2 className="font-bold text-xl">{questionState === 'correct' ? 'Correct!' : 'Correct Solution:'}</h2>
        {questionState === 'incorrect' && <p className="text-2xl font-semibold">{answer}</p>}
      </div>
    </div>
  );
};

export default FeedbackMessage;
