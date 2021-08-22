import { Form } from "./TasksPage/Form";
import { Section } from "../../common/Section";
import { Buttons } from "./TasksPage/Buttons";
import { Header } from "../../common/Header";
import { Main } from "../../common/Main";
import { ExampleButton } from "./TasksPage/ExampleButton/ExampleButton";
import { TasksList } from "./TasksPage/TasksList";

export const Tasks = () => {
  return (
    <>
      <Header title="Lista zadań" />
      <Main>
        <Section
          title={"Dodaj nowe zadanie"}
          extraHeaderContent={<ExampleButton />}
          body={<Form />}
        />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={<Buttons />}
          body={<TasksList />}
        />
      </Main>
    </>
  );
};
