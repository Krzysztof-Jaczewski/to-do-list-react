import { Header } from "../../../common/Header";
import { Main } from "../../../common/Main";
import { Section } from "../../../common/Section";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <>
      <Header title="Szczegóły zadania" />
      <Main>
        <Section
          title={task ? task.content : "Nie znaleziono zadania😢"}
          body={
            task && (
              <>
                <strong>Ukończono: </strong>
                {task.done ? "Tak" : "Nie"}
              </>
            )
          }
        />
      </Main>
    </>
  );
};
