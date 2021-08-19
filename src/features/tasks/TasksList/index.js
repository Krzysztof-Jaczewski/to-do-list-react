import { TaskRename } from "../TaskRename/Index";
import { Item, List, ListText, Button } from "./styled";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  renameTask,
} from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

export const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          <Item hide={(task.done && hideDone) || task.rename}>
            <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
              {task.done ? "✔" : ""}
            </Button>
            <ListText done={task.done}>{task.content}</ListText>
            <Button
              rename
              onClick={() => dispatch(renameTask(task.id))}
              title="edytuj zadanie"
            >
              🖊️
            </Button>
            <Button
              remove
              onClick={() => dispatch(removeTask(task.id))}
              title="usuń zadanie"
            >
              🗑
            </Button>
          </Item>
          <TaskRename task={task} />
        </li>
      ))}
    </List>
  );
};
