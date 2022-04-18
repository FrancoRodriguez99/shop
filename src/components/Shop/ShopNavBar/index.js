import "./ShopNavBar.css";
import CartShop from "../CartShop/";
import image from "../../../assets/logoshop.png";

import shopcart from "../../../assets/shopcart.png";
import { useSelector } from "react-redux";

function ShopNavBar() {
  const cart = useSelector((state) => state.cartshop);
  return (
    <div id="shopnavbarbox">
      <div id="shopnavbar">
        <div id="logoshopbox">
          <img alt="logo" src={image} id="logoshop"></img>
        </div>
        <div id="searchbarbox">
          <input id="searchbar" placeholder="Buscar"></input>
        </div>
        <div id="user">
          <button id="cartbtn">
            <img src={shopcart} alt="shopcart" id="cartimg"></img>
            <div id="itemsincarshop">{cart.id.length}</div>
          </button>
          <CartShop />
        </div>
      </div>
    </div>
  );
}

export default ShopNavBar;
