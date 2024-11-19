import { all } from "redux-saga/effects";
import watchFetchRecords from "../ReduxStore/recordSaga";

export default function* rootSaga() {
  yield all([watchFetchRecords()]);
}
