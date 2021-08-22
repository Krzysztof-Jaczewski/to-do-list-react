import { all } from "@redux-saga/core/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
