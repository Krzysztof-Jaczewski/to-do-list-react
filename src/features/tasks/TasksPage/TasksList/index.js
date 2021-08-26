import { TaskRename } from "../TaskRename/Index";
import { Item, List, StyledLink } from "./styled";
import {
  toggleTaskDone,
  removeTask,
  renameTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { useQueryParameter } from "../../queryParameters";
import { searchQueryParameter } from "../../searchQueryParameter";
import { toTask } from "../../../../routes";
import { ListButton } from "../TasksListButtons";

export const TasksList = () => {
  const query = useQueryParameter(searchQueryParameter);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          <Item hide={(task.done && hideDone) || task.currentlyRename}>
            <ListButton onClick={() => dispatch(toggleTaskDone(task.id))}>
              {task.done ? "✔" : ""}
            </ListButton>
            <StyledLink done={task.done} to={toTask({ id: task.id })}>
              {task.content}
            </StyledLink>
            <ListButton
              currentlyRename
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
