import React from 'react';

const SkipButton = ({ checkAnswer }) => {
  return (
    <button
      type="button"
      className="hidden md:inline-block quiz-btn-style text-sky-500 border-2 border-sky-500 bg-transparent hover:bg-gray-200 dark:hover:bg-slate-800"
      onClick={() => checkAnswer('selectedOption')}
    >
      Skip
    </button>
  );
};

export default SkipButton;
