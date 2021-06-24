export const CancelRenameTaskButton = ({ task, cancelRenameTask }) => (
  <button
    className="taskList__button taskList__button--remove"
    type="button"
    title="Anuluj zmianę"
    onClick={() => cancelRenameTask(task.id)}
  >
    X
  </button>

)