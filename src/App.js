import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Tasks } from "./components/Tasks";
import { Section } from "./components/Section";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header
        title="Lista zadań"
      />
      <Main>
        <Section
          title={"Dodaj nowe zadanie"}
          body={
            <Form
              setTasks={setTasks}
            />}
        />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              setHideDone={setHideDone}
              setTasks={setTasks}
            />}
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              setTasks={setTasks}
            />}
        />
      </Main>
    </>
  );
};

export default App;
