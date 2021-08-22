import { TaskRename } from "./TaskRename/Index";
import { Item, List, ListText, ListButton } from "./styled";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  renameTask,
} from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          <Item hide={(task.done && hideDone) || task.rename}>
            <ListButton onClick={() => dispatch(toggleTaskDone(task.id))}>
              {task.done ? "✔" : ""}
            </ListButton>
            <ListText done={task.done}>
              <Link to={`/zadania/${task.id}`}> {task.content}</Link>
            </ListText>
            <ListButton
              rename
              onClick={() => dispatch(renameTask(task.id))}
              title="edytuj zadanie"
            >
              🖊️
            </ListButton>
            <ListButton
              remove
              onClick={() => dispatch(removeTask(task.id))}
              title="usuń zadanie"
            >
              🗑
            </ListButton>
          </Item>
          <TaskRename task={task} />
        </li>
      ))}
    </List>
  );
};
