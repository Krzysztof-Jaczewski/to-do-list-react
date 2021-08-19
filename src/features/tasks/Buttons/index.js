import { AdditionalButtons, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllTasksDone } from "../tasksSlice";

export const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <AdditionalButtons>
      {tasks.length > 0 && (
        <>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </StyledButton>
          <StyledButton
            onClick={() => dispatch(setAllTasksDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </StyledButton>
        </>
      )}
    </AdditionalButtons>
  );
};
