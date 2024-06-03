import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "https://silmaril1on.github.io/custom_data_API/games-data.json";

export const getGames = createAsyncThunk("games/getGames", async () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
});

const initialState = {
  gamesData: [],
  filteredGames: [],
  isLoading: true,
  isError: false,
  userWarning: false,
  modal: false,
  warning: false,
  rating: false,
  bug: false,
  averageRating: [],
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
    registration: (state) => {
      state.userWarning = true;
    },
    openModal: (state) => {
      state.modal = true;
    },
    openBugModal: (state) => {
      state.bug = true;
    },
    closeModal: (state) => {
      state.warning = false;
      state.modal = false;
      state.rating = false;
      state.bug = false;
    },
    openStarPanel: (state) => {
      state.rating = true;
    },
    getAverageRating: (state, action) => {
      state.averageRating = action.payload;
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
  filterItems,
  closeModal,
  registration,
  openModal,
  openStarPanel,
  openBugModal,
  getAverageRating,
} = gamesSlice.actions;

export default gamesSlice.reducer;
