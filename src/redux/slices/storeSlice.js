import { createSlice } from "@reduxjs/toolkit";
import producto from "../../constantes/items";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    storeitems: [...producto],
    constitems: [...producto],
    min: 0,
    max: 9999999999999,
    estado: 0,
    search: "",
  },
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
          state.constitems.sort(
            (a, b) => (a.precio[0] > b.precio[0] && 1) || -1
          );
          break;
        case 1:
          state.storeitems.sort(
            (a, b) => (a.precio[0] < b.precio[0] && 1) || -1
          );
          state.constitems.sort(
            (a, b) => (a.precio[0] < b.precio[0] && 1) || -1
          );
          break;
        case 2:
          state.storeitems.sort(
            (a, b) => (a.cantidad[0] < b.cantidad[0] && 1) || -1
          );
          state.constitems.sort(
            (a, b) => (a.cantidad[0] < b.cantidad[0] && 1) || -1
          );
          break;
        case 3:
          state.storeitems.sort((a, b) => (a.id[0] < b.id[0] && 1) || -1);
          state.constitems.sort((a, b) => (a.id[0] < b.id[0] && 1) || -1);

          break;
        case 4:
          state.storeitems = [...state.constitems];
          state.estado = 1;
          state.storeitems = state.storeitems.filter((element) => {
            return element.estado;
          });
          state.storeitems = state.storeitems.filter((element) => {
            return (
              element.precio[0] >= state.min &&
              element.precio[element.precio.length - 1] <= state.max
            );
          });
          if (state.search === "") {
          } else {
            state.storeitems = state.storeitems.filter((element) => {
              return (
                element.name
                  .toLowerCase()
                  .includes(state.search.toLowerCase()) ||
                element.tags.toLowerCase().includes(state.search.toLowerCase())
              );
            });
          }
          break;
        case 5:
          state.storeitems = [...state.constitems];
          state.estado = -1;
          state.storeitems = state.storeitems.filter((element) => {
            return !element.estado;
          });
          state.storeitems = state.storeitems.filter((element) => {
            return (
              element.precio[0] >= state.min &&
              element.precio[element.precio.length - 1] <= state.max
            );
          });
          if (state.search === "") {
          } else {
            state.storeitems = state.storeitems.filter((element) => {
              return (
                element.name
                  .toLowerCase()
                  .includes(state.search.toLowerCase()) ||
                element.tags.toLowerCase().includes(state.search.toLowerCase())
              );
            });
          }

          break;
        case 6:
          state.storeitems = [...state.constitems];
          state.estado = 0;
          state.storeitems = state.storeitems.filter((element) => {
            return (
              element.precio[0] >= state.min &&
              element.precio[element.precio.length - 1] <= state.max
            );
          });
          if (state.search === "") {
          } else {
            state.storeitems = state.storeitems.filter((element) => {
              return (
                element.name
                  .toLowerCase()
                  .includes(state.search.toLowerCase()) ||
                element.tags.toLowerCase().includes(state.search.toLowerCase())
              );
            });
          }
          break;
        default:
          break;
      }
    },
    filter: (state, action) => {
      state.storeitems = [...state.constitems];
      if (action.payload[0] === 0) {
        state.min = action.payload[1];
      } else {
        state.max = action.payload[1];
      }

      if (state.min === "") {
        state.min = 0;
      }
      if (state.max === "") {
        state.max = 99999999999999999999;
      }

      state.storeitems = state.storeitems.filter((element) => {
        return (
          element.precio[0] >= state.min &&
          element.precio[element.precio.length - 1] <= state.max
        );
      });

      switch (state.estado) {
        case -1:
          state.storeitems = state.storeitems.filter((element) => {
            return !element.estado;
          });
          break;
        case 1:
          state.storeitems = state.storeitems.filter((element) => {
            return element.estado;
          });
          break;
        default:
          break;
      }

      if (state.search === "") {
      } else {
        state.storeitems = state.storeitems.filter((element) => {
          return (
            element.name.toLowerCase().includes(state.search.toLowerCase()) ||
            element.tags.toLowerCase().includes(state.search.toLowerCase())
          );
        });
      }
    },
    search: (state, action) => {
      state.storeitems = [...state.constitems];
      state.search = action.payload;
      if (state.search === "") {
      } else {
        state.storeitems = state.storeitems.filter((element) => {
          return (
            element.name.toLowerCase().includes(state.search.toLowerCase()) ||
            element.tags.toLowerCase().includes(state.search.toLowerCase())
          );
        });
        switch (state.estado) {
          case -1:
            state.storeitems = state.storeitems.filter((element) => {
              return !element.estado;
            });
            break;
          case 1:
            state.storeitems = state.storeitems.filter((element) => {
              return element.estado;
            });
            break;
          default:
            break;
        }

        state.storeitems = state.storeitems.filter((element) => {
          return (
            element.precio[0] >= state.min &&
            element.precio[element.precio.length - 1] <= state.max
          );
        });
      }
    },
  },
});

export const { getStore, sortStore, filter, search } = storeSlice.actions;
export default storeSlice.reducer;
