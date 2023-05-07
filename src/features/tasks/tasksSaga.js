import {
    call,
    put,
    delay,
    select,
    takeEvery,
    takeLatest,
} from '@redux-saga/core/effects';
import { getExampleTasks } from './getExampleTasks';
import { saveTasksInLocalStorage } from './tasksLocalStorage';
import {
    fetchExampleTasks,
    fetchExampleTasksError,
    fetchExampleTasksSuccess,
    selectTasks,
} from './tasksSlice';

function* fetchExampleTasksSaga() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, 'coś poszło nie tak!');
    }
}

function* saveTasksInLocalStorageSaga() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksSaga);
    yield takeEvery('*', saveTasksInLocalStorageSaga);
}
