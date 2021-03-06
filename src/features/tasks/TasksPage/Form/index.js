import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../../../../common/Input";
import { addTask } from "../../tasksSlice";
import { StyledForm, Button } from "./styled";

export const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const textFocus = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") return;

    dispatch(
      addTask({
        content: newTaskContent,
        done: false,
        currentlyRename: false,
        id: nanoid(),
      })
    );
    setNewTaskContent("");
    textFocus.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        ref={textFocus}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};
