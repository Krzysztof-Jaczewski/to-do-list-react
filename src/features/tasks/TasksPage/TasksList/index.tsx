import { TaskRename } from '../TaskRename/Index';
import { Item, List, StyledLink } from './styled';
import {
    toggleTaskDone,
    removeTask,
    renameTask,
    selectHideDone,
    selectTasksByQuery,
} from '../../tasksSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useQueryParameter } from '../../queryParameters';
import { searchQueryParameter } from '../../searchQueryParameter';
import { toTask } from '../../../../routes';
import { ListButton } from '../TasksListButtons';
import { TaskType } from 'src/ts/types';
import { RootState } from 'src/store';

export const TasksList = () => {
    const query = useQueryParameter(searchQueryParameter);
    const tasks = useSelector((state: RootState) =>
        selectTasksByQuery(state, query)
    ) as TaskType[];
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Item
                        isHide={
                            (task.isDone && hideDone) || task.isCurrentlyRename
                        }
                    >
                        <ListButton
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                        >
                            {task.isDone ? '✔' : ''}
                        </ListButton>
                        <StyledLink
                            $isDone={task.isDone}
                            to={toTask({ id: task.id })}
                        >
                            {task.content}
                        </StyledLink>
                        <ListButton
                            isCurrentlyRename
                            onClick={() => dispatch(renameTask(task.id))}
                            title='edytuj zadanie'
                        >
                            🖊️
                        </ListButton>
                        <ListButton
                            remove
                            onClick={() => dispatch(removeTask(task.id))}
                            title='usuń zadanie'
                        >
                            🗑
                        </ListButton>
                    </Item>
                    <TaskRename task={task} />
                </li>
            ))}
        </List>
    );
};
