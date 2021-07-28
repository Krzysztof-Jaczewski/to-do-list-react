import { useState } from "react";
import { Form } from "./components/Form";
import { Tasks } from "./components/Tasks";
import { Section } from "./components/Section";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    tasks,
    newTaskContent,
    addNewTask,
    toggleTaskDone,
    renameTask,
    removeTask,
    cancelRenameTask,
    setNewTaskContent,
    changeTaskContent,
    finishAllTasks,
  } = useTasks();

  return (
    <>
      <Header title="Lista zadań" />
      <Main>
        <Section
          title={"Dodaj nowe zadanie"}
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              finishAllTasks={finishAllTasks}
              toggleHideDone={toggleHideDone}
            />
          }
          body={
            <Tasks
              tasks={tasks}
              newTaskContent={newTaskContent}
              hideDone={hideDone}
              toggleTaskDone={toggleTaskDone}
              renameTask={renameTask}
              removeTask={removeTask}
              changeTaskContent={changeTaskContent}
              cancelRenameTask={cancelRenameTask}
              setNewTaskContent={setNewTaskContent}
            />
          }
        />
      </Main>
    </>
  );
}

export default App;
