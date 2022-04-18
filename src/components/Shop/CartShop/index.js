import { useDispatch, useSelector } from "react-redux";
import {
  deleteall,
  changequantity,
  addorremove,
  changesize,
  cutitem,
} from "../../../redux/slices/carritoSlice";
import "./cartshop.css";

function CartShop() {
  const cart = useSelector((state) => state.cartshop);
  console.table(cart);
  const dispatch = useDispatch();
  const add = "add";
  const rmv = "rmv";
  const getvalue = (event, index) => {
    const add = event.target.value;
    if (add < 0) {
    } else {
      dispatch(changequantity([Math.floor(add), index]));
    }
  };
  const sizevalue = (event, index) => {
    const size = event.target.value;
    dispatch(changesize([size, index]));
  };
  function precioporcantidad(element, index) {
    if (Array.isArray(element.precio)) {
      total += element.precio[cart.tamanio[index]] * cart.quantity[index];
      return (
        <div>
          {element.precio[cart.tamanio[index]] * cart.quantity[index]} Total
        </div>
      );
    } else {
      total += element.precio * cart.quantity[index];
      return <div>{element.precio * cart.quantity[index]} Total</div>;
    }
  }

  function precioporunidad(element, index) {
    if (Array.isArray(element.precio)) {
      return <div>{element.precio[cart.tamanio[index]]} C/U</div>;
    } else {
      return <div>{element.precio} C/U</div>;
    }
  }

  let total = 0;
  return (
    <div className="insideshopcart">
      <div id="carttitle">
        Carrito de Compras
        <button onClick={() => dispatch(deleteall())}>Borrar Todo</button>
      </div>
      <div id="elementslist">
        {cart.items.map((element, index) => {
          return (
            <div key={index} className="items-in-car-shop">
              <img
                src={element.img[0]}
                alt="imagen item"
                className="img-cart-item"
              ></img>

              <div id="wdiv">
                {element.name}
                {element.tamanio.length > 1 ? (
                  <select
                    selected="Pelase Pick a Size"
                    className="pleasepickasize"
                    onChange={(event) => sizevalue(event, index)}
                  >
                    <option value="Pelase Pick a Size">
                      Please pick a Size
                    </option>
                    {element.tamanio.map((size, sindex) => {
                      return (
                        <option key={sindex + "option"} value={sindex}>
                          {size}
                        </option>
                      );
                    })}
                  </select>
                ) : null}
              </div>
              <div>
                <button onClick={() => dispatch(addorremove([rmv, index]))}>
                  -
                </button>
                <input
                  type="number"
                  value={cart.quantity[index]}
                  onChange={(event) => getvalue(event, index)}
                  max="100"
                  min="1"
                  id="cantidadinput"
                ></input>
                <button onClick={() => dispatch(addorremove([add, index]))}>
                  +
                </button>
              </div>
              <div>
                {precioporcantidad(element, index)}
                {precioporunidad(element, index)}
                <button onClick={() => dispatch(cutitem(index))}>
                  Remover
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div id="total">
        <div>
          Total:
          {total > 0 ? total : "Please pick a Size for the products in blue"}
        </div>
        <div>Total de items: {cart.id.length}</div>
        <button id="conf-purch">Comprar</button>
      </div>
    </div>
  );
}

export default CartShop;

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
