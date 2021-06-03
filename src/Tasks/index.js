import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="taskList">
    {tasks.map(task => (
      <li
        className={`taskList__item${task.done && hideDoneTasks ? " taskList__item--hide" : ""}`}
      >
        <button className="taskList__button ">
          {task.done ? "✔" : ""}
        </button>
        <span className={`taskList__span ${task.done ? " taskList__span--done" : ""}`}>
          {task.content}
        </span>
        <button className="taskList__button taskList__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;