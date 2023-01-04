import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

// function App() {
//    const name = "Something";
//    return (
//       <div className="container">
//          <h1>Hello World</h1>
//          <h2>Hello {name} </h2>
//       </div>
//    );
// }

const App = () => {
   const [showAddTask, setShowAddTask] = useState(false);
   const [tasks, setTasks] = useState([
      {
         id: 1,
         text: "Doc",
         day: "Feb 1",
         reminder: true,
      },

      {
         id: 2,
         text: "Doc 2",
         day: "Feb 2",
         reminder: true,
      },

      {
         id: 3,
         text: "Doc 3",
         day: "Feb 3",
         reminder: false,
      },
   ]);
   // add task func
   const addTask = (task) => {
      // console.log(task);
      const id = Math.floor(Math.random() * 1000) + 1;
      const newTask = { id, ...task };
      setTasks([...tasks, newTask]);
   };

   // delete
   const deleteTask = (id) => {
      // console.log("delete", id);
      setTasks(tasks.filter((task) => task.id !== id));
   };

   // toggle rReminder
   const toggleReminder = (id) => {
      // console.log(id);
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, reminder: !task.reminder } : task
         )
      );
   };

   return (
      <div className="container">
         <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
         />
         {showAddTask && <AddTask onAdd={addTask} />}
         {/* how to run if statement */}
         {tasks.length > 0 ? (
            <Tasks
               tasks={tasks}
               onDelete={deleteTask}
               onToggle={toggleReminder}
            />
         ) : (
            "no more tasks"
         )}
      </div>
   );
};

export default App;
