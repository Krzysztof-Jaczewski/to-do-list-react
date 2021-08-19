import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Section } from "../../common/Section";
import { Buttons } from "./Buttons";
import { Header } from "../../common/Header";
import { Main } from "../../common/Main";

export const Tasks = () => {
  return (
    <>
      <Header title="Lista zadań" />
      <Main>
        <Section title={"Dodaj nowe zadanie"} body={<Form />} />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={<Buttons />}
          body={<TasksList />}
        />
      </Main>
    </>
  );
};
