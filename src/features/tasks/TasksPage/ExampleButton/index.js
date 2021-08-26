import { useDispatch, useSelector } from "react-redux";
import { AdditionalButtons, Button } from "../../../../common/Button";
import { axiosExampleTasks, selectLoading } from "../../tasksSlice";
import { Loading } from "../../../../common/Loading";

export const ExampleButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <AdditionalButtons>
      <Button onClick={() => dispatch(axiosExampleTasks())}>
        {loading ? <Loading /> : "Pokaż przykładowe zadania"}
      </Button>
    </AdditionalButtons>
  );
};
