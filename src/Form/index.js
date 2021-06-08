import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const textFocus = useRef();

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

export default Form;