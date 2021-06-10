export const TaskContent = ({ task }) => (
  <span className={`taskList__span 
  ${task.done
  ? "taskList__span--done"
  : ""}`
}
>
{task.content}
</span>
)