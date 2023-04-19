import React from 'react';

const CheckButton = ({ selectedOption, checkAnswer }) => {
  return (
    <button
      type="button"
      className="quiz-btn-style text-white bg-blue-500 hover:bg-blue-600"
      onClick={() => checkAnswer(selectedOption)}
    >
      Check
    </button>
  );
};

export default CheckButton;
