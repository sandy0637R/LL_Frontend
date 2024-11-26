import { createSlice } from "@reduxjs/toolkit";

const recordsSlice = createSlice({
  name: "records",
  initialState: {
    data: [],
    sell: [], // Array to hold sold records
    loading: false,
    error: null,
  },
  reducers: {
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
    addToSell: (state, action) => {
      const record = state.data.find((item) => item._id === action.payload);
      if (record) {
        state.sell.push(record); // Add record to sell[]
      }
    },
    removeFromSell: (state, action) => {
      // Filter out the record from sell[] based on _id
      state.sell = state.sell.filter((item) => item._id !== action.payload);
    },
  },
});

export const {
  fetchRecordsRequest,
  fetchRecordsSuccess,
  fetchRecordsFailure,
  addToSell,
  removeFromSell, // Export the remove action
} = recordsSlice.actions;

export default recordsSlice.reducer;
