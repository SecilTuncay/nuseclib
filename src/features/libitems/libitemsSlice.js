import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import libDatabase from "../../common/apis/libDatabase";


export const fetchAllLibData = createAsyncThunk(
  "libItems/fetchAllLibData",
  async () => {
    try {
      debugger
      const response = await libDatabase.get(
        "/items"
      );
      if (response?.status == 200) return response.data;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const fetchAsyncLibItem = createAsyncThunk(
  "libItems/fetchAsyncLibItem",
  async (id) => {
    try {

      const response = await libDatabase.get(
        `/items/${id}`
      );
      if (response?.status == 200) return response.data;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const fetchSliderData = createAsyncThunk(
  "libItems/fetchSliderData",
  async () => {
    try {

      const response = await libDatabase.get(
        "/sliders"
      );
      if (response?.status == 200) return response.data;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const fetchCategoryData = createAsyncThunk(
  "libItems/fetchCategoryData",
  async () => {
    try {
      const response = await libDatabase.get(
        "/categories"
      );
      if (response?.status == 200) return response.data;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const fetchUserData = createAsyncThunk(
  "libItems/fetchUserData",
  async () => {
    try {
      const response = await libDatabase.get(
        "/users"
      );
      if (response?.status == 200) return response.data;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const addUser = createAsyncThunk(
  "libItems/addUser",
  async (user) => {
    try {
      const response = await libDatabase.post(
        "/users", (user)
      );

      if (response?.status == 200) return response.data;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const fetchUseStatus = createAsyncThunk(
  "libItems/fetchUseStatus",
  async () => {
    try {
      const response = await libDatabase.get(
        "/logStatus"
      );

      if (response?.status == 200) return response.data[0].isLoggedIn;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const updateLoggedIn = createAsyncThunk(
  "libItems/updateLoggedIn",
  async (status) => {
    try {

      const response = await libDatabase.put(
        "/logStatus/1", ({
          "isLoggedIn": status
        })
      );

      if (response?.status == 200) return status;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);
export const updateItem = createAsyncThunk(
  "libItems/updateItem",
  async (item) => {
    try {

      const response = await libDatabase.put(
        `/items/${item.id}`, (item)
      );

      if (response?.status == 200) return response.data;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteItem = createAsyncThunk(
  "libItems/deleteItem",
  async (id) => {
    try {
      const response = await libDatabase.delete(
        `/items/${id}`
      )
      if (response?.status == 200) return id;
      return `${response?.status}:${response?.statusText}:`
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  allLibItems: [],
  item: [],
  sliders: [],
  categories: [],
  isLoading: true,
};

const libItemSlice = createSlice({
  name: "libItems",
  initialState,
  reducers: {
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
      return { ...state, isLoading: true };
    },
    [fetchAsyncLibItem.fulfilled]: (state, { payload }) => {
      return { ...state, item: payload, isLoading: false };
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
    /*Get Users Data start*/
    [fetchUserData.pending]: (state) => {
      console.log("Pending");
    },
    [fetchUserData.fulfilled]: (state, { payload }) => {
      return { ...state, users: payload };
    },
    [fetchUserData.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Get Users Status start*/
    [fetchUseStatus.pending]: (state) => {
      console.log("Pending");
    },
    [fetchUseStatus.fulfilled]: (state, { payload }) => {
      return { ...state, isLoggedIn: payload };
    },
    [fetchUseStatus.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Add Users  start*/
    [addUser.pending]: (state) => {
      console.log("Pending");
    },
    [addUser.fulfilled]: (state, { payload }) => {
      return { ...state, users: payload };
    },
    [addUser.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Delete Item to Library start*/
    [deleteItem.pending]: (state) => {
      console.log("Pending");
    },
    [deleteItem.fulfilled]: (state, { payload }) => {
      const allLibItems = state.allLibItems.filter(item => item.id !== payload)
      state.allLibItems = allLibItems;
    },
    [deleteItem.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Update Item to Library start*/
    [updateLoggedIn.pending]: (state) => {
      console.log("Pending");
    },
    [updateLoggedIn.fulfilled]: (state, { payload }) => {
      return { ...state, isLoggedIn: payload };
    },
    [updateLoggedIn.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Update Item to Library start*/
    [updateItem.pending]: (state) => {
      console.log("Pending");
    },
    [updateItem.fulfilled]: (state, { payload }) => {
      return state;
    },
    [updateItem.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
  },
});

export const { login, logout, addItem, loggedIn, loggedOut } =
  libItemSlice.actions;

export const getAllLibData = (state) => state.libItems.allLibItems;
export const getSliderData = (state) => state.libItems.sliders;
export const getCategoryData = (state) => state.libItems.categories;
export const getSelectedLibItem = (state) => state.libItems.item;
export const getIsLoading = (state) => state.libItems.isLoading;
export const getIsLoggedIn = (state) => state.libItems.isLoggedIn;
export const getUsers = (state) => state.libItems.users;
export default libItemSlice.reducer;
