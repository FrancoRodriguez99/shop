import { useDispatch, useSelector } from "react-redux";
import {
  deleteall,
  changequantity,
  addorremove,
  changesize,
  cutitem,
  changetotal,
} from "../../../redux/slices/carritoSlice";
import "./cartshop.css";

function CartShop() {
  let total = [0];
  const cart = useSelector((state) => state.cartshop);
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
      if (cart.tamanio[index] !== undefined) {
        total[index] =
          element.precio[cart.tamanio[index]] * cart.quantity[index];
        return (
          <div>
            {element.precio[cart.tamanio[index]] * cart.quantity[index]} Total
          </div>
        );
      } else {
        return <div>Por favor elige un tamaño!</div>;
      }
    } else {
      total[index] = element.precio * cart.quantity[index];
      return <div>{element.precio * cart.quantity[index]} Total</div>;
    }
  }

  function precioporunidad(element, index) {
    if (Array.isArray(element.precio)) {
      if (cart.tamanio[index] !== undefined) {
        return <div>{element.precio[cart.tamanio[index]]} C/U</div>;
      } else {
        return <div>Por favor, elige un tamaño!</div>;
      }
    } else {
      return <div>{element.precio} C/U</div>;
    }
  }

  function calculatetotal() {
    if ([...cart.total].toString() !== [...total].toString()) {
      dispatch(changetotal(total));
    }
    let totaldos = 0;
    total.forEach((element) => {
      return (totaldos += element);
    });

    return totaldos;
  }

  function buy() {
    //if size choose render button if not render a alert

    let hbtn = true;
    cart.tamanio.forEach((element) => {
      if (element === undefined || element === "Por favor elige un tamaño.") {
        hbtn = false;
      }
      return null;
    });

    if (hbtn === true) {
      return (
        <button id="conf-purch" className="button-85" onClick={() => null}>
          Comprar
        </button>
      );
    } else {
      return <div>Por favor, elige un tamaño para los artículos en azul.</div>;
    }
  }

  return (
    <div className="insideshopcart">
      <div id="carttitle">
        <p id="titlecart">Carrito de Compras</p>
        <button onClick={() => dispatch(deleteall())} id="removeall">
          Borrar Todo
        </button>
      </div>
      <div id="elementslist">
        {cart.items.map((element, index) => {
          return (
            <div key={index} className="items-in-car-shop">
              <div id="imgbox">
                <img
                  src={element.img[0]}
                  alt="imagen item"
                  className="img-cart-item"
                ></img>
              </div>

              <div id="wdiv">
                {element.name}
                {element.tamanio.length > 1 ? (
                  <select
                    selected="Pelase Pick a Size"
                    className={
                      cart.tamanio[index] === undefined ||
                      cart.tamanio[index] === "Por favor elige un tamaño."
                        ? "pleasepickasize"
                        : null
                    }
                    onChange={(event) => sizevalue(event, index)}
                  >
                    {console.log(cart.tamanio[index])}
                    <option value="Por favor elige un tamaño.">
                      Por favor elige un tamaño.
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
              <div id="quantitybox">
                <button
                  onClick={() => dispatch(addorremove([rmv, index]))}
                  className="qbtn"
                >
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
                <button
                  onClick={() => dispatch(addorremove([add, index]))}
                  className="qbtn"
                >
                  +
                </button>
              </div>
              <div id="totalandremove-box">
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
          {calculatetotal()}
        </div>
        <div>Total de items: {cart.id.length}</div>
        {buy()}
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
