import { useRef, useState } from "react";
import "./style.css";

export const Form = ({ setTasks }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const textFocus = useRef(null);

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }
    ]);
  };

  const setTextFocus = () => {
    textFocus.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") return;
    addNewTask(newTaskContent);
    setNewTaskContent("");
  };


  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        ref={textFocus}
        className="form__text" type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button
        className="form__button"
        onClick={setTextFocus}
      >
        Dodaj zadanie
      </button>
    </form>
  );
};