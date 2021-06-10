
export const ToggleTaskDoneButton = ({task,toggleTaskDone}) => (
    <button
        className="taskList__button "
        onClick={() => toggleTaskDone(task.id)}
    >
        {task.done ? "✔" : ""}
    </button>
)