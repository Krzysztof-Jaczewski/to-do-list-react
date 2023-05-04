import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthorPage } from './features/author/AuthorPage';
import { TasksPage } from './features/tasks/TasksPage';
import { TaskPage } from './features/tasks/TaskPage';
import { Navigation } from './Navigation';
import { toAuthor, toTask, toTasks } from './routes';

const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path='/'>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;
