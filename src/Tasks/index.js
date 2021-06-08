import "./style.css";

const Tasks = ({ tasks, hideDone,removeTask }) => (
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
        <button className="taskList__button ">
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
          taskList__button--remove"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;