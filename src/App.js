import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Tasks } from "./components/Tasks";
import { Section } from "./components/Section";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [hideDone, setHideDone] = useState(()=>{
    const localHideDone = localStorage.getItem("hideDone");
    return localHideDone ? JSON.parse(localHideDone) : false
  });

  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem("tasks");
    return localTasks ? JSON.parse(localTasks) : []
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [hideDone]);


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
