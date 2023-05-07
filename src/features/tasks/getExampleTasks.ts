import axios from 'axios';

export const getExampleTasks = async () => {
    const response = await axios.get('/to-do-list-react/exampleTasks.json');
    return await response.data;
};
