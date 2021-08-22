import { useDispatch } from "react-redux";
import {
  AdditionalButtons,
  StyledButton,
} from "../../../../common/Section/styled";
import { axiosExampleTasks } from "../../tasksSlice";

export const ExampleButton = () => {
  const dispatch = useDispatch();

  return (
    <AdditionalButtons>
      <StyledButton onClick={() => dispatch(axiosExampleTasks())}>
        pokaż przykładowe zadania
      </StyledButton>
    </AdditionalButtons>
  );
};
