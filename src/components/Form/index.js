import { useRef, useState } from "react";
import { StyledForm, TextInput, Button } from "./styled";

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const textFocus = useRef(null);

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
      <TextInput
        value={newTaskContent}
        ref={textFocus}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={setTextFocus}>Dodaj zadanie</Button>
    </StyledForm>
  );
};
