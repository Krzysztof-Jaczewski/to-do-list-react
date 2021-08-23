import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthorPage } from "./features/author/AuthorPage";
import { TasksPage } from "./features/tasks/TasksPage";
import { TaskPage } from "./features/tasks/TaskPage";
import { Navigation } from "./features/Navigation";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
