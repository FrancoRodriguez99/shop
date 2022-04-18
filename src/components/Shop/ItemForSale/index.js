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

          <p>{product.precio}</p>
        </div>
        <div className="displayonhover">
          <p>{product.description}</p>
        </div>
      </div>
    </button>
  );
}

export default ItemForSale;
