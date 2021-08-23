import { useSelector, useDispatch } from "react-redux";
import { AdditionalButtons, Button } from "../../../../common/Button";
import {
  toggleHideDone,
  setAllTasksDone,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

export const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <AdditionalButtons>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllTasksDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </AdditionalButtons>
  );
};
