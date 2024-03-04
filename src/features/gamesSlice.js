import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "https://silmaril1on.github.io/custom_data_API/games-data.json";

export const getGames = createAsyncThunk("games/getGames", async () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
});

const initialState = {
  gamesData: [],
  cartItems: [],
  filteredGames: [],
  isLoading: true,
  isError: false,
  warning: false,
  userWarning: false,
  modal: false,
  amount: 0,
  tax: 0,
  totalPrice: 0,
  totalProducts: 0,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    filterItems: (state, action) => {
      if (action.payload === "all") {
        state.filteredGames = state.gamesData;
      } else {
        state.filteredGames = [...state.gamesData].filter((item) =>
          (item.category || []).includes(action.payload)
        );
      }
    },
    addToCart: (state, action) => {
      const itemID = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.userWarning === false) {
        state.modal = true;
      }
      if (itemID >= 0) {
        state.warning = true;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    registration: (state) => {
      state.userWarning = true;
    },
    closeModal: (state) => {
      state.warning = false;
      state.modal = false;
      console.log("clicked");
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount + 1;
    },
    decrease: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      let totalProduct = 0;
      let x = 0;
      let tax = 0;
      state.cartItems.map((item) => {
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
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gamesData = action.payload;
      state.filteredGames = action.payload;
    });
    builder.addCase(getGames.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {
  addToCart,
  removeItem,
  filterItems,
  clearCart,
  calculateTotals,
  increase,
  decrease,
  closeModal,
  registration,
} = gamesSlice.actions;

export default gamesSlice.reducer;
