import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Section } from "../../common/Section";
import { Buttons } from "./Buttons";
import { Header } from "../../common/Header";
import { Main } from "../../common/Main";
import { ExampleButton } from "./ExampleButton.js/ExampleButton";

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
