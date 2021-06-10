import {useEffect, useRef, useState } from "react";
import "./style.css";


export const Tasks = ({ tasks, hideDone, setTasks }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputFocus = useRef(null);

  const setInputFocus = () => {
    inputFocus.current.focus();
  };

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  });
  
  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          done: !task.done
        }
      return task;
    }));
  };

  const renameTask = (id) => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      rename: false,
    })));

    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          rename: true,
        }
      return task;
    }));
    setNewTaskContent("");
    setInputFocus();
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const cancelRenameTask = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          rename: false,
        }
      return task;
    }));
    setNewTaskContent("");
  };

  const changeTaskContent = (id) => {

    setNewTaskContent(newTaskContent);

    if (newTaskContent.trim() === "") return cancelRenameTask(id);

    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          content: newTaskContent,
          rename: false,
        }
      console.log(newTaskContent);
      return task;
    }));
    setInputFocus();
    setNewTaskContent("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ul className="taskList">
      {tasks.map(task => (
        <li
          key={task.id}
        >
          <span className={`
             taskList__item 
             ${task.done && hideDone
              ? "taskList__item--hide"
              : ""}
             ${task.rename
              ? "taskList__item--hide"
              : ""}`
            /**
             * List of Tasks
            */
          }>

            <button
              className="taskList__button "
              onClick={() => toggleTaskDone(task.id)}
            >
              {task.done ? "✔" : ""}
            </button>

            <span className={`taskList__span 
                ${task.done
                ? "taskList__span--done"
                : ""}`
            }
            >
              {task.content}
            </span>

            <button
              onClick={() => renameTask(task.id)}
              title="edytuj zadanie"
              className="
              taskList__button
              taskList__button--rename
              "
            >
              🖊️
            </button>

            <button
              onClick={() => removeTask(task.id)}
              title="usuń zadanie"
              className="
              taskList__button
              taskList__button--remove
              "
            >
              🗑
            </button>

          </span>

          <span className={`
              ${!task.rename
              ? "taskList__item--hide"
              : ""}`
          }
          /**
           * Rename Task
           */
          >

            <form className="taskList__rename" onSubmit={onFormSubmit}>
              <input
                value={newTaskContent}
                ref={element=>{inputFocus.current = element }}
                className="taskList__input" type="text"
                placeholder=""
                onChange={({ target }) => setNewTaskContent(target.value)}
              />

              <button
                type="submit"
                className="taskList__button"
                onClick={() => changeTaskContent(task.id)}
              >
                ✔
              </button>

              <button
                type="button"
                className="taskList__button taskList__button--remove"
                onClick={() => cancelRenameTask(task.id)}
              >
                X
              </button>

            </form>
          </span>
        </li>
      ))}
    </ul>
  );
};
