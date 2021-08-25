import { TaskRename } from "../TaskRename/Index";
import { Item, List, ListText, StyledLink } from "./styled";
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
import { toTask } from "../../../../rutes";
import { ListButton } from "../TasksListButtons";
import { useRef, useEffect } from "react";

export const TasksList = () => {
  const query = useQueryParameter(searchQueryParameter);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  const inputFocus = useRef();
  console.log(inputFocus);

  useEffect(() => {
    if (inputFocus.current) {
      console.log(inputFocus.current);
      inputFocus.current.focus();
    }
  });

  const setFocus = () => {
    inputFocus.current.focus();
  };

  return (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          <Item hide={(task.done && hideDone) || task.currentlyRename}>
            <ListButton onClick={() => dispatch(toggleTaskDone(task.id))}>
              {task.done ? "✔" : ""}
            </ListButton>
            <ListText done={task.done}>
              <StyledLink to={toTask({ id: task.id })}>
                {task.content}
              </StyledLink>
            </ListText>
            <ListButton
              currentlyRename
              onClick={() => {
                dispatch(renameTask(task.id));
                setFocus();
              }}
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
          <TaskRename task={task} inputFocus={inputFocus} />
        </li>
      ))}
    </List>
  );
};
