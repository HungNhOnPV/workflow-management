import {
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeLatest,
} from 'redux-saga/effects';
import {
  fetchListTaskFailed,
  fetchListTaskSuccess,
  filterTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants';
import * as taskTypes from '../constants/task';

/**
 * B1: Thuc thi action fetch task
 * B2: Goi Api
 * B2.1: Hien thi cac thanh tien trin (loading...)
 * B3: Kiem tra status code
 * Neu thanh cong ...
 * Neu that bai ...
 * B4: Tat loading
 * B5: Thuc thi cac cong viec tiep theo
 */

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task =>
    task.title
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase()),
  );
  yield put(filterTaskSuccess(filteredTask));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
