import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  name: "cartshop",
  initialState: { id: [], items: [], quantity: [], tamanio: [], total: [0] },
  reducers: {
    additem: (state, action) => {
      state.id.push(state.id.length);
      state.items.push(action.payload);
      state.quantity.push(1);
      if (action.payload.tamanio[0] === "one") {
        state.tamanio.push("one");
      } else {
        state.tamanio.push(action.payload.tamanio[-8]);
      }
    },
    changequantity: (state, action) => {
      state.quantity[action.payload[1]] = action.payload[0];
    },
    addorremove: (state, action) => {
      switch (action.payload[0]) {
        case "add":
          if (state.quantity[action.payload[1]] < 100) {
            state.quantity[action.payload[1]]++;
          }
          break;
        case "rmv":
          if (state.quantity[action.payload[1]] > 1) {
            state.quantity[action.payload[1]]--;
          }
          break;
        default:
          break;
      }
    },
    deleteall: (state) => {
      state.id = [];
      state.items = [];
      state.quantity = [];
      state.tamanio = [];
    },
    changesize: (state, action) => {
      state.tamanio[action.payload[1]] = action.payload[0];
    },
    cutitem: (state, action) => {
      state.items = state.items
        .slice(0, action.payload)
        .concat(state.items.slice(action.payload + 1, state.items.length));
      state.quantity = state.quantity
        .slice(0, action.payload)
        .concat(
          state.quantity.slice(action.payload + 1, state.quantity.length)
        );
      state.tamanio = state.tamanio
        .slice(0, action.payload)
        .concat(state.tamanio.slice(action.payload + 1, state.tamanio.length));
      state.id = state.id
        .slice(0, action.payload)
        .concat(state.id.slice(action.payload + 1, state.id.length));
    },
    changetotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const {
  additem,
  changequantity,
  deleteall,
  addorremove,
  changesize,
  cutitem,
  changetotal,
} = carritoSlice.actions;
export default carritoSlice.reducer;

/*const itemexample = {
  id: "0",
  name: "Coca-Cola sin Azucar",
  description:
    "Gaseosa sin Azucar de Coca-Cola, En tamaños 500ml 1.5L 2.5L y 3L",
  img: [image2],
  tags: "gaseosa,bebible,sin azucar,500ml,1.5L,2.5L,3L",
  precio: [100, 150, 190, 250, 300],
  tamanio: ["500ml", "1Litro", "1.5Litros", "2.5Litros", "3 Litros"],
  cantidad: [3, 2, 0, 1, 5],
  categorias: [
    "Almacen",
    "Alimentos",
    "Bebibles",
    "Gaseosas",
    "Coca-Cola",
    "Sin Azucar",
  ],
};*/
