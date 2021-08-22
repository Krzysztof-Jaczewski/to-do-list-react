import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { axiosExampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* axiosExampleTasksSaga() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageSaga() {
  const tasks = yield select(selectTasks);
  console.log(tasks.tasks);
  yield call(saveTasksInLocalStorage, tasks.tasks);
}

export function* tasksSaga() {

  yield takeLatest(axiosExampleTasks.type, axiosExampleTasksSaga);
  yield takeEvery("*", saveTasksInLocalStorageSaga);
}
