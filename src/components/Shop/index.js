import "./shop.css";
import image from "../../assets/objetomuestra.png";
import image2 from "../../assets/objetomuestra2.png";
import image3 from "../../assets/objetomuestra3.png";
import ItemForSale from "./ItemForSale";
import Filter from "./Filter";

function Shop() {
  const producto = {
    id: "0",
    name: "Zapatos Derby de Prada",
    description:
      "Zapato de vestir para mujer, Nuevo sin uso, modelo Prada Talles S-XL",
    img: [image],
    tags: "zapato,prada,mujer,nuevo,bonito,fashion,moda,grande,pequeño,s,m,l,xl,mediano,extra largo",
    precio: 16000,
    tamanio: ["S", "M", "L", "XL"],
    cantidad: [3, 2, 0, 1],
    categorias: ["Indumentaria", "Mujer", "Calzado", "Zapatos", "Prada"],
  };
  const producto2 = {
    id: "0",
    name: "Coca-Cola sin Azucar",
    description:
      "Gaseosa sin Azucar de Coca-Cola, En tamaños 500ml 1.5L 2.5L y 3L",
    img: [image2],
    tags: "gaseosa,bebible,sin azucar,500ml,1.5L,2.5L,3L",
    precio: 150,
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
  };
  const producto3 = {
    id: "0",
    name: "Alfa Romero 0km",
    description:
      "Vehiculo automotor Alfa Romeo, ni idea que marca pero esta facherazo",
    img: [image3],
    tags: "vehiculos,nuevo,0km,rojo,4puertas",
    precio: 3500000,
    tamanio: ["unico"],
    cantidad: [15],
    categorias: ["Vehiculos", "Nuevo", "Auto", "4 Puertas", "Afla Romeo"],
  };
  return (
    <div id="shop">
      <Filter />
      <div id="itemsforsale">
        <ItemForSale product={producto} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto3} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto3} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto} />
        <ItemForSale product={producto} />
        <ItemForSale product={producto3} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto3} />
        <ItemForSale product={producto} />
        <ItemForSale product={producto2} />
        <ItemForSale product={producto} />
      </div>
    </div>
  );
}

export default Shop;
