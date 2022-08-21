import { configureStore } from "@reduxjs/toolkit";
import libItemsReducer from "./libitems/libitemsSlice";

export const store = configureStore({
  reducer: {
    libItems: libItemsReducer,
  },
});