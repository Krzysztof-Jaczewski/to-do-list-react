import {AdditionalButtons, StyledButton} from "./styled"

export const Buttons = ({ tasks, hideDone, setTasks, setHideDone }) => {
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const finishAllTasks = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  return (
    <AdditionalButtons>
      {tasks.length > 0 && (
        <>
          <StyledButton
            onClick={toggleHideDone}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
          <StyledButton
            onClick={finishAllTasks}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
      </StyledButton>
        </>
      )}
    </AdditionalButtons>
  );
};