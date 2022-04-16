import "./ItemsForSale.css";

function ItemForSale({ product = {} }) {
  function test() {
    console.log("podes");
  }
  return (
    <button className="productforsale" onClick={test}>
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
