import { TextRenameForm } from "./styled";
import { Button } from "../TasksList/styled";

export const TaskRename = ({
  task,
  changeTaskContent,
  cancelRenameTask,
  setNewTaskContent,
  newTaskContent,
}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
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
        onClick={() => changeTaskContent(task.id)}
      >
        ✔
      </Button>
      <Button
        remove
        type="button"
        title="Anuluj zmianę"
        onClick={() => cancelRenameTask(task.id)}
      >
        X
      </Button>
    </TextRenameForm>
  );
};
