import {
  call,
  put,
  delay,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  axiosExampleTasks,
  axiosExampleTasksError,
  axiosExampleTasksSuccess,
  selectTasks,
} from "./tasksSlice";

function* axiosExampleTasksSaga() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(axiosExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(axiosExampleTasksError());
    yield call(alert, "coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageSaga() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(axiosExampleTasks.type, axiosExampleTasksSaga);
  yield takeEvery("*", saveTasksInLocalStorageSaga);
}
