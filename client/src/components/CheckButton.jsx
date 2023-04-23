import React from 'react';

const CheckButton = ({ selectedOption, checkAnswer }) => {
  return (
    <button
      type="button"
      className={`quiz-btn-style ${
        !selectedOption ? 'text-gray-500 bg-gray-300' : 'text-white bg-blue-500 hover:bg-blue-600'
      }`}
      onClick={() => checkAnswer(selectedOption)}
      disabled={!selectedOption}
    >
      Check
    </button>
  );
};

export default CheckButton;
