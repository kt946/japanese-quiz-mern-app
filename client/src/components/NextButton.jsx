import { AiOutlineLoading } from 'react-icons/ai';

const NextButton = ({ questionState, cycleNextQuestion, loading }) => {
  return (
    <button
      type="button"
      className={`quiz-btn-style text-white dark:text-slate-800 ${
        questionState === 'correct'
          ? 'bg-[#58CC02] dark:bg-lime-500 hover:bg-[#4CAD02] dark:hover:bg-lime-600'
          : 'bg-red-600 dark:bg-red-400 hover:bg-red-700 dark:hover:bg-red-500'
      }`}
      onClick={() => cycleNextQuestion()}
    >
      {loading ? <AiOutlineLoading className="text-white dark:text-slate-800 animate-spin h-6 w-6 mx-auto" /> : 'Next'}
    </button>
  );
};

export default NextButton;
