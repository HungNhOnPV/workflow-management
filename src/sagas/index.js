import { call, fork, put, take, delay } from 'redux-saga/effects';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants';
import * as taskTypes from '../constants/task';
import { showLoading, hideLoading } from '../actions/ui';

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

function* watchCreateTaskAction() {
  yield true;
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
