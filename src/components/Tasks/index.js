import { useEffect, useRef, useState } from "react";
import "./styled";
import { Item, List, ListText, TextRenameForm, Button } from "./styled";

export const Tasks = ({ tasks, hideDone, setTasks }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputFocus = useRef(null);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  });

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            done: !task.done,
          };
        return task;
      })
    );
  };

  const renameTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        rename: false,
      }))
    );

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            rename: true,
          };
        return task;
      })
    );
    setNewTaskContent("");
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const cancelRenameTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            rename: false,
          };
        return task;
      })
    );
    setNewTaskContent("");
  };

  const changeTaskContent = (id) => {
    setNewTaskContent(newTaskContent);

    if (newTaskContent.trim() === "") return cancelRenameTask(id);

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            content: newTaskContent,
            rename: false,
          };
        console.log(newTaskContent);
        return task;
      })
    );
    setNewTaskContent("");
  };

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
              ref={(element) => {
                inputFocus.current = element;
              }}
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
