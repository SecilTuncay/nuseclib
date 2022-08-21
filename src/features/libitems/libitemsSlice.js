import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";


export const fetchAllLibData = createAsyncThunk(
  "libItems/fetchAllLibData",
  async () => {
    const response = await Axios.get("../data/libdata.json");
    return response.data;
  }
)



/* export const fetchAsyncLibItemDetail = createAsyncThunk(
  "movies/fetchAsyncLibItemDetail",
  async (id) => {
    const response = await movieDatabaseApi.get(
      `movie/${id}?api_key=${APIKey}`
    );
    return response.data;
  }
); */

const initialState = {
  allLibItems: [],
  selectedLibItem: {},
  isLoading: true,
};

const libItemSlice = createSlice({
  name: "libItems",
  initialState,
  reducers: {
    removeSelectedItem: (state) => {
      state.selectedMovie = {};
    },
    removeSelectedItemCredit: (state) => {
      state.selectedMovieCredit = {};
    },
    removeSelectedItemVideo: (state) => {
      state.selectedMovieVideo = {};
    },
    addToFavorites: (state, { payload }) => {
      const existingFavIndex = state.favoriteMovies.findIndex(
        (item) => item.id === payload.id
      );

      if (existingFavIndex >= 0) {
        state.favoriteMovies[existingFavIndex] = {
          ...state.favoriteMovies[existingFavIndex],
        };
      } else {
        state.favoriteMovies.push(payload);
      }
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(state.favoriteMovies)
      );
    },
    removeFromFavorites(state, action) {
      state.favoriteMovies.map((favMovie) => {
        if (favMovie.id === action.payload.id) {
          const nextFavMovies = state.favoriteMovies.filter(
            (item) => item.id !== favMovie.id
          );
          state.favoriteMovies = nextFavMovies;
        }
        localStorage.setItem(
          "favoriteMovies",
          JSON.stringify(state.favoriteMovies)
        );
        return state;
      });
    },

  },
  extraReducers: {
    /*Fetch Trending Movies start*/
    [fetchAllLibData.pending]: () => {
      console.log("Pending");
    },
    [fetchAllLibData.fulfilled]: (state, { payload }) => {

      return { ...state, allLibItems: payload };
    },
    [fetchAllLibData.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Fetch Movie Detail start
    [fetchAsyncLibItemDetail.pending]: (state) => {
      console.log("Searching");
      return { ...state, isLoading: true };
    },
    [fetchAsyncLibItemDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Movie Successfully!");
      return { ...state, selectedMovie: payload, isLoading: false };
    },
    [fetchAsyncLibItemDetail.rejected]: (state, { payload }) => {
      console.log("Not Found!");
    },
    end*/
  },
});

export const {
  removeSelectedItem,
  addToFavorites,
  removeFromFavorites,
} = libItemSlice.actions;

export const getAllLibData = (state) => state.libItems.allLibItems;
export const getSelectedLibItems = (state) => state.libItems.selectedLibItem;
export const getIsLoading = (state) => state.libItems.isLoading;
export default libItemSlice.reducer;
