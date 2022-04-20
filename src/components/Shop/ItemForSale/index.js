import { useDispatch, useSelector } from "react-redux";
import "./ItemsForSale.css";
import { additem } from "../../../redux/slices/carritoSlice";

function ItemForSale({ product = {} }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartshop);
  let btnstate = false;
  cart.items.forEach((element) => {
    if (element.id === product.id) {
      btnstate = true;
    } else {
    }
  });

  function prices() {
    return (
      <div className="preciorange">
        Precio desde {product.precio[0]}$ hasta{" "}
        {product.precio[product.precio.length - 1]}$
        <div>
          Tamaño: {product.tamanio[0]} -{" "}
          {product.tamanio[product.tamanio.length - 1]}
        </div>
      </div>
    );
  }
  function price() {
    return <div>{product.precio}$</div>;
  }

  return (
    <button
      className="productforsale"
      onClick={() => dispatch(additem(product))}
      disabled={btnstate}
    >
      <img src={product.img} alt="productimg" className="productimg"></img>
      <div className="display">
        <div>
          <p>{product.name}</p>

          {product.precio.length > 1 ? prices() : price()}
        </div>
        <div className="displayonhover">
          <p>{product.description}</p>
        </div>
      </div>
    </button>
  );
}

export default ItemForSale;
