import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';
import { RootState } from 'src/store';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        isLoading: false,
        isCurrentlyRename: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleTaskDone: ({ tasks }, { payload: selectedTaskId }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks[index].isDone = !tasks[index].isDone;
        },
        setAllTasksDone: ({ tasks }) => {
            tasks.forEach((task) => {
                task.isDone = true;
            });
        },
        removeTask: ({ tasks }, { payload: selectedTaskId }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks.splice(index, 1);
        },
        renameTask: ({ tasks }, { payload: selectedTaskId }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks.forEach((task) => {
                task.isCurrentlyRename = false;
            });
            tasks[index].isCurrentlyRename = true;
            tasks[index].isDone = false;
        },
        cancelRenameTask: ({ tasks }, { payload: selectedTaskId }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks[index].isCurrentlyRename = false;
        },
        acceptRenameTask: ({ tasks }, { payload: renamedTask }) => {
            const index = tasks.findIndex(({ id }) => id === renamedTask.id);
            tasks.splice(index, 1, renamedTask);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        fetchExampleTasks: (state) => {
            state.isLoading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: exampleTasks }) => {
            state.tasks = exampleTasks;
            state.isLoading = false;
        },
        fetchExampleTasksError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    setAllTasksDone,
    removeTask,
    renameTask,
    cancelRenameTask,
    acceptRenameTask,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;
export const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) =>
    selectTasksState(state).hideDone;
export const selectLoading = (state: RootState) =>
    selectTasksState(state).isLoading;
export const selectIsEveryTaskDone = (state: RootState) =>
    selectTasks(state).every(({ isDone }) => isDone);
export const selectAreTasksEmpty = (state: RootState) =>
    selectTasks(state).length === 0;

export const getTaskById = (state: RootState, taskId: string) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state: RootState, query?: string | null) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === '') {
        return tasks;
    }
    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase())
    );
};

export default tasksSlice.reducer;
