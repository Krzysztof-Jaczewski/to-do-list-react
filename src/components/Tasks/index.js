import "./style.css";

export const Tasks = ({ tasks, hideDone, setTasks}) =>{ 
  
  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          done: !task.done
        }
      return task;
    }));
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  
  return(
  <ul className="taskList">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`taskList__item 
        ${task.done && hideDone
            ? "taskList__item--hide"
            : ""}`
        }
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="taskList__button ">
          {task.done ? "✔" : ""}
        </button>
        <span className={`taskList__span 
          ${task.done
            ? "taskList__span--done"
            : ""}`
        }
        >
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="
          taskList__button
          taskList__button--remove
          "
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);};