import { useState } from "react";
import { useDispatch } from "react-redux";
import { cancelRenameTask, acceptRenameTask } from "../../tasksSlice";
import { TextRenameForm } from "./styled";
import { Input } from "../../../../common/Input";
import { ListButton } from "../TasksListButtons";

export const TaskRename = ({ task }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    setNewTaskContent("");
  };

  return (
    <TextRenameForm hide={!task.currentlyRename} onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        placeholder=""
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <ListButton
        type="submit"
        title="Zatwierdź zmianę"
        onClick={() => {
          if (newTaskContent === "") dispatch(cancelRenameTask(task.id));
          else
            dispatch(
              acceptRenameTask({
                content: newTaskContent,
                done: false,
                currentlyRename: false,
                id: task.id,
              })
            );
        }}
      >
        ✔
      </ListButton>
      <ListButton
        remove
        type="button"
        title="Anuluj zmianę"
        onClick={() => dispatch(cancelRenameTask(task.id))}
      >
        X
      </ListButton>
    </TextRenameForm>
  );
};
