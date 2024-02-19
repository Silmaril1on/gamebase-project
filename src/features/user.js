import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openUserModal: (state) => {
      state.userModal = true;
    },
    closeUserModal: (state) => {
      state.userModal = false;
    },
  },
});

export const { openUserModal, closeUserModal, submit } = userSlice.actions;

export default userSlice.reducer;
