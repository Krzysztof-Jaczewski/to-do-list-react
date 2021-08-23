import { Form } from "./Form";
import { Section } from "../../../common/Section";
import { Buttons } from "./Buttons";
import { Header } from "../../../common/Header";
import { Main } from "../../../common/Main";
import { ExampleButton } from "./ExampleButton/ExampleButton";
import { TasksList } from "./TasksList";
import { Search } from "./Search";

export const TasksPage = () => {
  return (
    <>
      <Header title="Lista zadań" />
      <Main>
        <Section
          title={"Dodaj nowe zadanie"}
          extraHeaderContent={<ExampleButton />}
          body={<Form />}
        />
        <Section title={"Wyszukiwarka"} body={<Search />} />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={<Buttons />}
          body={<TasksList />}
        />
      </Main>
    </>
  );
};
