export const ConfirmTaskContentChangeButton = ({ task, changeTaskContent }) => (
  <button
    type="submit"
    title="Zatwierdź zmianę"
    className="taskList__button"
    onClick={() => changeTaskContent(task.id)}
  >
    ✔
  </button>
)