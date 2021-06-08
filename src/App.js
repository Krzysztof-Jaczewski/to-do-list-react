import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [hideDone, setHideDone] = useState(false);
const[tasks,setTasks] = useState([
  { id: 1, content: "zjedz śniadanie", done: true },
  { id: 2, content: "zjedz obiad", done: true },
  { id: 3, content: "zjedz kolacje", done: false }
]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };


const removeTask = (id) =>{
  setTasks(tasks => tasks.filter(task => task.id!==id));
};

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
          />}
        />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone = {toggleHideDone}
            />}
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone} 
              removeTask = {removeTask}
              />}
        />
      </Main>
    </>
  );
};

export default App;
