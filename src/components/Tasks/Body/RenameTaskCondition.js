export const RenameTaskCondition = ({ task,children }) => (
    <span className={`
    ${!task.rename
            ? "taskList__item--hide"
            : ""}`
    }
    >
        {children}
    </span>
)