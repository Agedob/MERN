import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import About from "./components/About";

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
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      const getTasks = async () => {
         const tasksFromServer = await fetchTasks();
         setTasks(tasksFromServer);
      };
      getTasks();
   }, []);

   // async function to fetch data from backend (json-server) find all
   const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      // console.log(data);
      return data;
   };
   // find by id
   const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      // console.log(data);
      return data;
   };

   // add task func
   const addTask = async (task) => {
      const res = await fetch(`http://localhost:5000/tasks`, {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(task),
      });
      const data = await res.json();
      setTasks([...tasks, data]);
      // console.log(task);
      // const id = Math.floor(Math.random() * 1000) + 1;
      // const newTask = { id, ...task };
      // setTasks([...tasks, newTask]);
   };

   // delete
   const deleteTask = async (id) => {
      // console.log("delete", id);
      await fetch(`http://localhost:5000/tasks/${id}`, {
         method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
   };

   // toggle Reminder
   const toggleReminder = async (id) => {
      // console.log(id);
      const taskToToggle = await fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
         method: "PUT",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(updTask),
      });
      const data = await res.json();

      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, reminder: data.reminder } : task
         )
      );
   };

   return (
      <Router>
         <div className="container">
            <Header
               onAdd={() => setShowAddTask(!showAddTask)}
               showAdd={showAddTask}
            />
            <Routes>
               <Route
                  path="/"
                  element={
                     <>
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
                     </>
                  }
               />
               <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
};

export default App;
