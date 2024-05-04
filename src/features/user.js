import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userReg: null,
  userProfile: [],
  userWishlistGames: [],
  userCartItems: [],
  amount: 0,
  tax: 0,
  totalPrice: 0,
  totalProducts: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.userReg = action.payload;
    },
    getUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    logOutUser: (state) => {
      state.userProfile = null;
      state.userReg = null;
    },
    getUserWishlistGames: (state, action) => {
      state.userWishlistGames = action.payload;
    },
    getUserCartGames: (state, action) => {
      state.userCartItems = action.payload;
    },
    increase: (state, { payload }) => {
      const item = state.userCartItems.find((item) => item.id === payload.id);
      item.amount = item.amount + 1;
    },
    decrease: (state, { payload }) => {
      const item = state.userCartItems.find((item) => item.id === payload.id);
      item.amount = item.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      let totalProduct = 0;
      let x = 0;
      let tax = 0;
      state.userCartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
        totalProduct += item.amount;
        x = (total / 100) * 1;
        tax = total + x;
        return item;
      });
      state.amount = amount;
      state.totalPrice = total;
      state.totalProducts = totalProduct;
      state.tax = tax;
    },
  },
});

export const {
  getUser,
  getUserProfile,
  logOutUser,
  getUserWishlistGames,
  getUserCartGames,
  increase,
  decrease,
  calculateTotals,
} = userSlice.actions;

export default userSlice.reducer;
