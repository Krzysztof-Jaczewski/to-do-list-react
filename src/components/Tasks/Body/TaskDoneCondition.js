export const TaskDoneCondition = ({task,hideDone,children}) => (
<span className={`
             taskList__item 
             ${task.done && hideDone
              ? "taskList__item--hide"
              : ""}
             ${task.rename
              ? "taskList__item--hide"
              : ""}`
          }>
{children}
</span>
)