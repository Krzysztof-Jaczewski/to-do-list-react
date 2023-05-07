import axios from 'axios';
import { TaskType } from 'src/ts/types';

export const getExampleTasks = async (): Promise<TaskType[]> => {
    const response = await axios.get('/to-do-list-react/exampleTasks.json');
    return await response.data;
};
