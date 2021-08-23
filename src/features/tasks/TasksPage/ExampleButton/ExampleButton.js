import { useDispatch } from "react-redux";
import { AdditionalButtons, Button } from "../../../../common/Button";
import { axiosExampleTasks } from "../../tasksSlice";

export const ExampleButton = () => {
  const dispatch = useDispatch();

  return (
    <AdditionalButtons>
      <Button onClick={() => dispatch(axiosExampleTasks())}>
        pokaż przykładowe zadania
      </Button>
    </AdditionalButtons>
  );
};
