import { all } from "redux-saga/effects";
import recordSaga from "./recordSaga";

export default function* rootSaga() {
  yield all([recordSaga()]); // Combine all sagas from recordSaga
}
