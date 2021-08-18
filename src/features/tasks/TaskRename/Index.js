import { useState } from "react";
import { TextRenameForm } from "./styled";
import { Button } from "../TasksList/styled";
import { useDispatch } from "react-redux";
import { cancelRenameTask, acceptRenameTask } from "../TasksSlice";

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
      <Button
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
      </Button>
      <Button
        remove
        type="button"
        title="Anuluj zmianę"
        onClick={() => dispatch(cancelRenameTask(task.id))}
      >
        X
      </Button>
    </TextRenameForm>
  );
};
