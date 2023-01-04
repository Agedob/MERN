// const Header = (props) => {
//    return (
//       <header>
//          <h1>Task Tracker</h1>
//          <h2>{props.title}</h2>
//          <h3>{props.default}</h3>
//       </header>
//    );
// };

// export default Header;

import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
   return (
      <header className="header">
         <h1>{title}</h1>
         <Button
            onAdd={onAdd}
            color={showAdd ? "red" : "green"}
            text={showAdd ? "close" : "Add"}
         />
      </header>
   );
};

Header.defaultProps = {
   default: "Task Tracker",
   title: "Task Tracker",
};

export default Header;
