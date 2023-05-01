const ContinueButton = () => {
  return (
    <button
      type="button"
      className="quiz-btn-style text-white dark:text-slate-800 bg-[#58CC02] hover:bg-[#4CAD02]"
      onClick={() => history.back()}
    >
      Continue
    </button>
  );
};

export default ContinueButton;
