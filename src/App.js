import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Header from "./Header";
import React from "react";


const tasks = [
  { id: 1, content: "zjedz śniadanie", done: true },
  { id: 2, content: "ucz się", done: true }
]

const hideDoneTasks = false;
function App() {
  return (
    <>
      <Header
        title="Lista zadań"
      />,
      <main className="main">
        <Section
          title={"Dodaj nowe zadanie"}
          body={<Form />}
        />
        <Section
          title={"Lista zadań"}
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </main>
    </>
  );
}

export default App;
