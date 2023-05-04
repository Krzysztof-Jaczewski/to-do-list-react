import { TaskType } from 'src/ts/types';

const localStorageKey = 'tasks';

export const saveTasksInLocalStorage = (tasks: TaskType[]) =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): TaskType[] => {
    try {
        const storedTasks = localStorage.getItem(localStorageKey);
        return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
        return [];
    }
};
