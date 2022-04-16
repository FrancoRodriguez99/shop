import "./ShopNavBar.css";
import image from "../../../assets/logoshop.png";
function ShopNavBar() {
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
          login/register o carrito y mi cuenta si esta logueado
        </div>
      </div>
    </div>
  );
}

export default ShopNavBar;
