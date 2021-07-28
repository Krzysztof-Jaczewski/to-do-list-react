import { useState } from "react";
import { Form } from "./components/Main/Section/Form";
import { Tasks } from "./components/Main/Section/Tasks";
import { Section } from "./components/Main/Section";
import { Buttons } from "./components/Main/Section/Buttons";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useTasks } from "./useTasks";
import { useLocalStorageTasks } from "./useLocalStorageTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };
  
  const [tasks, setTasks] = useLocalStorageTasks();

  const {
    newTaskContent,
    addNewTask,
    toggleTaskDone,
    renameTask,
    removeTask,
    cancelRenameTask,
    setNewTaskContent,
    changeTaskContent,
    finishAllTasks,
  } = useTasks({tasks,setTasks});

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
