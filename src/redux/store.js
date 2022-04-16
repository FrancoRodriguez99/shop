import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import langSlice from "./slices/langSlice";

const store = configureStore({
  reducer: {
    lang: langSlice,
    contact: contactSlice,
  },
});

export default store;
