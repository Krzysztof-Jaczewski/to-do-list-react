import { useRef, useState } from "react";
import { StyledForm, StyledTextInput, StyledFormButton } from "./styled";

export const Form = ({ setTasks }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const textFocus = useRef(null);

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
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
    <StyledForm onSubmit={onFormSubmit}>
      <StyledTextInput
        value={newTaskContent}
        ref={textFocus}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <StyledFormButton onClick={setTextFocus}>Dodaj zadanie</StyledFormButton>
    </StyledForm>
  );
};
