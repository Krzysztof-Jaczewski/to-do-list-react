import { HashRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { Tasks } from "./features/tasks/Tasks";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/zadania">Zadania</NavLink>
        </li>
        <li>
          <NavLink to="/autor">O autorze</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
