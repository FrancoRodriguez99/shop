import { createSlice } from "@reduxjs/toolkit";
import producto from "../../constantes/items";

let changeme = [...producto];

let min = 0;
let max = 99999999999999999999;

export const storeSlice = createSlice({
  name: "store",
  initialState: { storeitems: producto },
  reducers: {
    getStore: (state, action) => {
      state.storeitems = action.payload;
    },
    sortStore: (state, action) => {
      switch (parseInt(action.payload)) {
        case 0:
          state.storeitems.sort(
            (a, b) => (a.precio[0] > b.precio[0] && 1) || -1
          );
          changeme.sort((a, b) => (a.precio[0] > b.precio[0] && 1) || -1);
          break;
        case 1:
          state.storeitems.sort(
            (a, b) => (a.precio[0] < b.precio[0] && 1) || -1
          );
          changeme.sort((a, b) => (a.precio[0] < b.precio[0] && 1) || -1);
          break;
        case 2:
          state.storeitems.sort(
            (a, b) => (a.cantidad[0] < b.cantidad[0] && 1) || -1
          );
          changeme.sort((a, b) => (a.cantidad[0] < b.cantidad[0] && 1) || -1);
          break;
        case 3:
          state.storeitems.sort((a, b) => (a.id[0] < b.id[0] && 1) || -1);
          changeme.sort((a, b) => (a.id[0] < b.id[0] && 1) || -1);
          break;
        case 4:
          state.storeitems = [...changeme];
          state.storeitems = state.storeitems.filter((element) => {
            return element.estado;
          });
          state.storeitems = state.storeitems.filter((element) => {
            return (
              element.precio[0] > min &&
              element.precio[element.precio.length - 1] < max
            );
          });
          break;
        case 5:
          state.storeitems = [...changeme];
          state.storeitems = state.storeitems.filter((element) => {
            return !element.estado;
          });
          state.storeitems = state.storeitems.filter((element) => {
            return (
              element.precio[0] > min &&
              element.precio[element.precio.length - 1] < max
            );
          });

          break;
        case 6:
          state.storeitems = [...changeme];
          break;
        default:
          break;
      }
    },
    filter: (state, action) => {
      if (action.payload[0] === 0) {
        min = action.payload[1];
      } else {
        max = action.payload[1];
      }

      if (min === "") {
        min = 0;
      }
      if (max === "") {
        max = 99999999999999999999;
      }

      state.storeitems = state.storeitems.filter((element) => {
        return (
          element.precio[0] >= min &&
          element.precio[element.precio.length - 1] <= max
        );
      });
    },
  },
});

export const { getStore, sortStore, filter } = storeSlice.actions;
export default storeSlice.reducer;
