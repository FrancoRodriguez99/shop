import "./shop.css";
import ItemForSale from "./ItemForSale";
import Filter from "./Filter";
import { useSelector } from "react-redux";

function Shop() {
  const store = useSelector((state) => state.store);
  return (
    <div id="shop">
      <Filter />
      <div id="itemsforsale">
        {store.storeitems.map((element) => {
          return <ItemForSale product={element} key={element.id} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
