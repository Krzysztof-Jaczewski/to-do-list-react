export const RemoveTaskButton = ({ task, removeTask }) => (
  <button
    onClick={() => removeTask(task.id)}
    title="usuń zadanie"
    className="
     taskList__button
     taskList__button--remove
     "
  >
    🗑
  </button>
)