import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  index: 0,
  active: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    changeIndex: (state, action) => {
      state.index = action.payload;
      state.active = state.index;
    },
  },
});

export const { openModal, closeModal, changeIndex } = modalSlice.actions;

export default modalSlice.reducer;
