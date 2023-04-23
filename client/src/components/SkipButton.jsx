import React from 'react';

const SkipButton = ({ checkAnswer }) => {
  return (
    <button
      type="button"
      className="hidden md:inline-block quiz-btn-style text-blue-500 border-2 border-blue-500 bg-white hover:bg-gray-200"
      onClick={() => checkAnswer('selectedOption')}
    >
      Skip
    </button>
  );
};

export default SkipButton;
