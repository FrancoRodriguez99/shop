import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    name: "Not given",
    email: "Not Given",
    phone: "Not Given",
    service: -1,
    message: "",
  },
  reducers: {
    change: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { change } = contactSlice.actions;
export default contactSlice.reducer;
