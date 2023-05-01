import React from 'react';

const CheckButton = ({ selectedOption, checkAnswer }) => {
  return (
    <button
      type="button"
      className={`quiz-btn-style ${
        !selectedOption ? 'text-gray-500 bg-gray-300' : 'text-white dark:text-slate-800 bg-[#58CC02] dark:bg-lime-500 hover:bg-[#4CAD02] dark:hover:bg-lime-600'
      }`}
      onClick={() => checkAnswer(selectedOption)}
      disabled={!selectedOption}
    >
      Check
    </button>
  );
};

export default CheckButton;
