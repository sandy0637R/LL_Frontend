import { createSlice } from "@reduxjs/toolkit";

const recordsSlice = createSlice({
  name: "records",
  initialState: {
    data: [],
    sellRecords: [],
    workerRecords: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Fetch records actions
    fetchRecordsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRecordsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchRecordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Fetch sell records actions
    fetchSellRecordsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSellRecordsSuccess: (state, action) => {
      state.loading = false;
      state.sellRecords = action.payload;
    },
    fetchSellRecordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Fetch worker records actions
    fetchWorkerRecordsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWorkerRecordsSuccess: (state, action) => {
      state.loading = false;
      state.workerRecords = action.payload;
    },
    fetchWorkerRecordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Add item to sell records
    addToSell: (state, action) => {
      state.sellRecords.push(action.payload);
    },

    // Remove item from sell records
    removeFromSell: (state, action) => {
      state.sellRecords = state.sellRecords.filter(
        (record) => record.id !== action.payload
      );
    },
  },
});

export const {
  fetchRecordsRequest,
  fetchRecordsSuccess,
  fetchRecordsFailure,
  fetchSellRecordsRequest,
  fetchSellRecordsSuccess,
  fetchSellRecordsFailure,
  fetchWorkerRecordsRequest,
  fetchWorkerRecordsSuccess,
  fetchWorkerRecordsFailure,
  addToSell,
  removeFromSell,
} = recordsSlice.actions;

export default recordsSlice.reducer;
