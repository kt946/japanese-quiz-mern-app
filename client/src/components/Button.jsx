const Button = ({ type, style, onClick, disabled, title, icon }) => {
  return (
    <button
      type={type}
      className={`quiz-btn-style ${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;
