import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import tasksReducer from "./features/tasks/tasksSlice";
import { tasksSaga } from "./features/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(tasksSaga);

export default store;
