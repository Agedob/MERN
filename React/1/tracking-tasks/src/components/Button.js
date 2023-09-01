const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;

// paused at 51:34 https://www.youtube.com/watch?v=w7ejDZ8SWv8
