import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./slices/langSlice";

const store = configureStore({
  reducer: {
    lang: langSlice,
  },
});

export default store;
