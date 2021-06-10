
export const RenameTaskButton = ({ task, renameTask }) => (
    <button
        onClick={() => renameTask(task.id)}
        title="edytuj zadanie"
        className="
              taskList__button
              taskList__button--rename
              "
    >
        🖊️
    </button>

)