import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchSellRecordsRequest,
  fetchSellRecordsSuccess,
  fetchSellRecordsFailure,
  fetchWorkerRecordsRequest,
  fetchWorkerRecordsSuccess,
  fetchWorkerRecordsFailure,
  fetchRecordsRequest,
  fetchRecordsSuccess,
  fetchRecordsFailure,
} from "./reducer";

import { getAllSellRecordsAPI, getWorkerRecordsAPI, fetchRecordsApi } from "./api";

// Saga for fetching sell records
function* fetchSellRecordsSaga() {
  try {
    const token = localStorage.getItem("token");
    const data = yield call(getAllSellRecordsAPI, token);
    yield put(fetchSellRecordsSuccess(data));
  } catch (error) {
    yield put(fetchSellRecordsFailure(error.message));
  }
}

// Saga for fetching worker records
function* fetchWorkerRecordsSaga() {
  try {
    const token = localStorage.getItem("token");
    const data = yield call(getWorkerRecordsAPI, token);
    yield put(fetchWorkerRecordsSuccess(data));
  } catch (error) {
    yield put(fetchWorkerRecordsFailure(error.message));
  }
}

// Saga for fetching user-specific records
function* fetchRecordsSaga() {
  try {
    const data = yield call(fetchRecordsApi);
    yield put(fetchRecordsSuccess(data));
  } catch (error) {
    yield put(fetchRecordsFailure(error.message));
  }
}

// Root saga for watching all record-related actions
export default function* recordSaga() {
  yield all([
    takeLatest(fetchSellRecordsRequest.type, fetchSellRecordsSaga),
    takeLatest(fetchWorkerRecordsRequest.type, fetchWorkerRecordsSaga),
    takeLatest(fetchRecordsRequest.type, fetchRecordsSaga),
  ]);
}
