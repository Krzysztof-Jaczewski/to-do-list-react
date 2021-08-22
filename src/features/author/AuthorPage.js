import { Header } from "../../common/Header";
import { Main } from "../../common/Main";
import { Section } from "../../common/Section";

const AuthorPage = () => (
  <>
    <Header title="O Autorze" />
    <Main>
      <Section title="Krzysiek Jaczewski" body={<>nananana</>} />
    </Main>
  </>
);

export default AuthorPage;
