import Button from "./Button";

const Header = ({ title, default_test_title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="gray" text="Add" />

      {/* <h1>Hello from header</h1>
      <button>Add</button>
      <h2>{title}</h2>
      <h3 style={{ backgroundColor: "gray" }}>{default_test_title}</h3>
      To add inline css use double curly && camle case no dash ie backgroundColor not background-color */}
    </header>
  );
};

Header.defaultProps = {
  default_test_title: "setting a default prop placeholder within component.",
};
export default Header;
