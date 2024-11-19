import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRecordsRequest,
  fetchRecordsSuccess,
  fetchRecordsFailure,
} from "../ReduxStore/reducer";
import { fetchRecordsApi } from "../ReduxStore/api";

function* fetchRecordsSaga() {
  try {
    const data = yield call(fetchRecordsApi);
    yield put(fetchRecordsSuccess(data));
  } catch (error) {
    yield put(fetchRecordsFailure(error.message));
  }
}

export default function* watchFetchRecords() {
  yield takeLatest(fetchRecordsRequest.type, fetchRecordsSaga);
}
