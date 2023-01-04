const Button = ({ color, btnText }) => {
   const onClick = () => {
      console.log("click");
   };
   return (
      <button
         onClick={onClick}
         style={{ backgroundColor: color }}
         className="btn"
      >
         {btnText}
      </button>
   );
};

Button.defaultProps = {
   btnText: "Add",
   color: "steelblue",
};

export default Button;
