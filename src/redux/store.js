import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import langSlice from "./slices/langSlice";
import carritoSlice from "./slices/carritoSlice";
import storeSlice from "./slices/storeSlice";

const store = configureStore({
  reducer: {
    lang: langSlice,
    contact: contactSlice,
    cartshop: carritoSlice,
    store: storeSlice,
  },
});

export default store;
