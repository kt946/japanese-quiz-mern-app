import React from 'react';

const NextButton = ({ questionState, cycleNextQuestion }) => {
  return (
    <button
      type="button"
      className={`quiz-btn-style text-white ${
        questionState === 'correct' ? 'bg-[#58CC02] hover:bg-[#4CAD02]' : 'bg-red-500 hover:bg-red-600'
      }`}
      onClick={() => cycleNextQuestion()}
    >
      Next
    </button>
  );
};

export default NextButton;
