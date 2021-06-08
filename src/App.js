import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Header from "./Header";
import Main from "./Main";


const tasks = [
  { id: 1, content: "zjedz śniadanie", done: true },
  { id: 2, content: "zjedz obiad", done: true },
  { id: 3, content: "zjedz kolacje", done: false }
];

const hideDone = false;
function App() {
  return (
    <>
      <Header
        title="Lista zadań"
      />
      <Main>
        <Section
          title={"Dodaj nowe zadanie"}
          body={<Form />}
        />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
        />
      </Main>
    </>
  );
};

export default App;
