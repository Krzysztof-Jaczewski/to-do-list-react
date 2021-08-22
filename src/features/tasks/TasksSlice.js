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
        task.rename = false;
      });
      tasks[index].rename = true;
      tasks[index].done = false;
    },
    cancelRenameTask: ({ tasks }, { payload: selectedTaskId }) => {
      const index = tasks.findIndex(({ id }) => id === selectedTaskId);
      tasks[index].rename = false;
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
export const selectTasks = ({ tasks }) => tasks;
export default tasksSlice.reducer;
