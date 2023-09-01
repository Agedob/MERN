import Task from "./Task";

const Tasks = ({ Tasks_list, onDelete }) => {
  return (
    <>
      {Tasks_list.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
