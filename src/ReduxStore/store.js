import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import recordsReducer from "../ReduxStore/reducer";
import rootSaga from "../ReduxStore/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    records: recordsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
