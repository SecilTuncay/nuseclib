import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchAllLibData = createAsyncThunk(
  "libItems/fetchAllLibData",
  async () => {
    const response = await Axios.get("../data/libdata.json");
    return response.data;
  }
);
export const fetchAsyncLibItem = createAsyncThunk(
  "libItems/fetchAsyncLibItem",
  async (id) => {
    const response = await Axios.get("../data/libdata.json");
    const tempID = response.data.items.findIndex(
      (item) => item.id === parseInt(id)
    );
    return response.data.items[tempID];
  }
);
export const fetchSliderData = createAsyncThunk(
  "libItems/fetchSliderData",
  async () => {
    const response = await Axios.get("../data/libdata.json");
    return response.data.sliders;
  }
);

export const fetchCategoryData = createAsyncThunk(
  "libItems/fetchCategoryData",
  async () => {
    const response = await Axios.get("../data/libdata.json");
    return response.data.categories;
  }
);

const initialState = {
  allLibItems: [],
  item: [],
  sliders: [],
  categories: [],
  selectedLibItem: {},
  isLoading: true,
};

const libItemSlice = createSlice({
  name: "libItems",
  initialState,
  reducers: {
    removeSelectedItem: (state) => {
      state.selectedLibItem = {};
    },

    manageStock(state, { payload }) {
      const tempID = state.allLibItems.items.findIndex(
        (item) => item.id === payload.id
      );
      state.allLibItems.items[tempID].isInStock =
        !state.allLibItems.items[tempID].isInStock;
      return state;
    },
  },
  extraReducers: {
    /*Fetch All Library Data start*/
    [fetchAllLibData.pending]: (state) => {
      console.log("Pending");
      return { ...state, isLoading: true };
    },
    [fetchAllLibData.fulfilled]: (state, { payload }) => {
      return { ...state, allLibItems: payload, isLoading: false };
    },
    [fetchAllLibData.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Fetch Lib Item Data start*/
    [fetchAsyncLibItem.pending]: (state) => {
      console.log("Pending");
    },
    [fetchAsyncLibItem.fulfilled]: (state, { payload }) => {
      return { ...state, item: payload };
    },
    [fetchAsyncLibItem.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Fetch Sliders Data start*/
    [fetchSliderData.pending]: (state) => {
      console.log("Pending");

    },
    [fetchSliderData.fulfilled]: (state, { payload }) => {
      return { ...state, sliders: payload };
    },
    [fetchSliderData.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Fetch Categories Data start*/
    [fetchCategoryData.pending]: (state) => {
      console.log("Pending");

    },
    [fetchCategoryData.fulfilled]: (state, { payload }) => {
      return { ...state, categories: payload };
    },
    [fetchCategoryData.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
  },
});

export const { removeSelectedItem, manageStock } = libItemSlice.actions;

export const getAllLibData = (state) => state.libItems.allLibItems;
export const getSliderData = (state) => state.libItems.sliders;
export const getCategoryData = (state) => state.libItems.categories;
export const getSelectedLibItem = (state) => state.libItems.item;
export const getIsLoading = (state) => state.libItems.isLoading;
export default libItemSlice.reducer;
