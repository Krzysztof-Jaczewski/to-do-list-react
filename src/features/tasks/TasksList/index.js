import { TaskRename } from "../TaskRename/Index";
import { Item, List, ListText, Button } from "./styled";

export const TasksList = ({
  tasks,
  newTaskContent,
  hideDone,
  cancelRenameTask,
  toggleTaskDone,
  changeTaskContent,
  setNewTaskContent,
  renameTask,
  removeTask,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          <Item hide={(task.done && hideDone) || task.rename}>
            <Button onClick={() => toggleTaskDone(task.id)}>
              {task.done ? "✔" : ""}
            </Button>
            <ListText done={task.done}>{task.content}</ListText>
            <Button
              rename
              onClick={() => renameTask(task.id)}
              title="edytuj zadanie"
            >
              🖊️
            </Button>
            <Button
              remove
              onClick={() => removeTask(task.id)}
              title="usuń zadanie"
            >
              🗑
            </Button>
          </Item>
          <TaskRename
            task={task}
            newTaskContent={newTaskContent}
            cancelRenameTask={cancelRenameTask}
            changeTaskContent={changeTaskContent}
            setNewTaskContent={setNewTaskContent}
          />
        </li>
      ))}
    </List>
  );
};
