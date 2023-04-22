import { AiOutlineLoading } from 'react-icons/ai';

const NextButton = ({ questionState, cycleNextQuestion, loading }) => {
  return (
    <button
      type="button"
      className={`quiz-btn-style text-white ${
        questionState === 'correct' ? 'bg-[#58CC02] hover:bg-[#4CAD02]' : 'bg-red-600 hover:bg-red-700'
      }`}
      onClick={() => cycleNextQuestion()}
    >
      {loading ? <AiOutlineLoading className="text-white animate-spin h-6 w-6 mx-auto" /> : 'Next'}
    </button>
  );
};

export default NextButton;
