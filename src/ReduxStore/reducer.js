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
