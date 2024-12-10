import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import recordsReducer from "./reducer"; // Adjusted import path for consistency
import rootSaga from "./rootSaga"; // Adjusted import path for consistency

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
  reducer: {
    records: recordsReducer, // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable Thunk as we use Saga
    }).concat(sagaMiddleware), // Add Saga middleware
});

// Run the root Saga
sagaMiddleware.run(rootSaga);

export default store;
