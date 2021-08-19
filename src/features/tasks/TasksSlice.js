import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
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
    acceptRenameTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload.id);
      tasks.splice(index, 1, payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
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
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
