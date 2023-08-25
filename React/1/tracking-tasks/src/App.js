import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [Tasks_list, setTask] = useState([
    {
      id: 1,
      text: "Doctor",
      day: "Feb 5th at 2pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Gym",
      day: "Feb 1th at 2pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Games",
      day: "Feb 3th at 2pm",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks Tasks_list={Tasks_list} />
      {/* <h1>Hello world</h1> */}
    </div>
  );
}

export default App;
