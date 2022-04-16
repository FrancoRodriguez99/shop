import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { lang: "EN" },
  reducers: {
    login: (state, action) => {},
  },
});

export const { login } = langSlice.actions;
export default langSlice.reducer;
