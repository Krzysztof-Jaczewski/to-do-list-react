import { useState } from "react";
import { TextRenameForm } from "./styled";
import { ListButton } from "../styled";
import { useDispatch } from "react-redux";
import { cancelRenameTask, acceptRenameTask } from "../../tasksSlice";

export const TaskRename = ({ task }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    setNewTaskContent("");
  };

  return (
    <TextRenameForm hide={!task.rename} onSubmit={onFormSubmit}>
      <input
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
                rename: false,
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
