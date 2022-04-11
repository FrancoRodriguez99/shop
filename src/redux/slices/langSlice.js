import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: { lang: "EN" },
  reducers: {
    switchLang: (state) => {
      state.lang === "EN" ? (state.lang = "ES") : (state.lang = "EN");
    },
    getLang: (state) => state,
  },
});

export const { switchLang, getLang } = langSlice.actions;
export default langSlice.reducer;
