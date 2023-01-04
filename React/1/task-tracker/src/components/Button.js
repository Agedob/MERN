const Button = ({ color, text, onAdd }) => {
   const onClick = () => {
      console.log("click");
      onAdd();
   };
   return (
      <button
         style={{ backgroundColor: color }}
         className="btn"
         onClick={onClick}
      >
         {text}
      </button>
   );
};

Button.defaultProps = {
   btnText: "Add",
   color: "steelblue",
};

export default Button;
