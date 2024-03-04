import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const consoles =
  "https://silmaril1on.github.io/custom_data_API/accessories-data.json";

export const getConsoles = createAsyncThunk(
  "consoles/getConsoles",
  async () => {
    return fetch(consoles)
      .then((response) => response.json())
      .catch((error) => error);
  }
);

const initialState = {
  consolesData: [],
  isLoading: false,
  isErroe: false,
};

const consoleSlice = createSlice({
  name: "consoles",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getConsoles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getConsoles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.consolesData = action.payload;
    });
    builder.addCase(getConsoles.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default consoleSlice.reducer;
