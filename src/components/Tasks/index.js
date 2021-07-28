
import { Item, List, ListText, TextRenameForm, Button } from "./styled";

export const Tasks = ({
  tasks,
  hideDone,
  newTaskContent,
  toggleTaskDone,
  renameTask,
  removeTask,
  changeTaskContent,
  cancelRenameTask,
  setNewTaskContent,
}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          <Item hide={(task.done && hideDone) || task.rename}>
            <Button onClick={() => toggleTaskDone(task.id)}>
              {task.done ? "✔" : ""}
            </Button>
            <ListText done={task.done}>{task.content}</ListText>
            <Button
              rename
              onClick={() => renameTask(task.id)}
              title="edytuj zadanie"
            >
              🖊️
            </Button>
            <Button
              remove
              onClick={() => removeTask(task.id)}
              title="usuń zadanie"
            >
              🗑
            </Button>
          </Item>
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
        </li>
      ))}
    </List>
  );
};
