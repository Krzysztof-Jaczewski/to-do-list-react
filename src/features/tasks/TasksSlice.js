import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleTaskDone: ({ tasks }, { payload: selectedTaskId }) => {
      const index = tasks.findIndex(({ id }) => id === selectedTaskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllTasksDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true;
      });
    },
    removeTask: ({ tasks }, { payload: selectedTaskId }) => {
      const index = tasks.findIndex(({ id }) => id === selectedTaskId);
      tasks.splice(index, 1);
    },
    renameTask: ({ tasks }, { payload: selectedTaskId }) => {
      const index = tasks.findIndex(({ id }) => id === selectedTaskId);
      tasks.forEach((task) => {
        task.curentlyRename = false;
      });
      tasks[index].curentlyRename = true;
      tasks[index].done = false;
    },
    cancelRenameTask: ({ tasks }, { payload: selectedTaskId }) => {
      const index = tasks.findIndex(({ id }) => id === selectedTaskId);
      tasks[index].curentlyRename = false;
    },
    acceptRenameTask: ({ tasks }, { payload: renamedTask }) => {
      const index = tasks.findIndex(({ id }) => id === renamedTask.id);
      tasks.splice(index, 1, renamedTask);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    axiosExampleTasks: () => {},
    setTasks: (state, { payload: exampleTasks }) => {
      state.tasks = exampleTasks;
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
  axiosExampleTasks,
  setTasks,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;

export const getTasksById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
