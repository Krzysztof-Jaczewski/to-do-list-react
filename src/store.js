import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/TasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
