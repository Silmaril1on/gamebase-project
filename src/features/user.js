import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userModal: false,
  newUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.newUser.push(action.payload);
    },
    openUserModal: (state) => {
      state.userModal = true;
    },
    closeUserModal: (state) => {
      state.userModal = false;
    },
  },
});

export const { openUserModal, closeUserModal, getUser } = userSlice.actions;

export default userSlice.reducer;
