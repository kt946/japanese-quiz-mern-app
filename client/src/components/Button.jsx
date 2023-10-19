const Button = ({ type, btnStyle, onClick, disabled, title, icon }) => {
  return (
    <button
      type={type}
      className={`quiz-btn-style ${btnStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;
