import "./Filter.css";
import { sortStore, filter } from "../../../redux/slices/storeSlice";
import { useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();

  //conseguir valor del select para ordenar
  const displayvalue = (event) => {
    const sort = event.target.value;
    dispatch(sortStore(sort));
  };
  //conseguir valor del input minimo
  const filtermin = (event) => {
    const min = event.target.value;
    dispatch(filter([0, min]));
  };
  //conseguir valor del input maximo
  const filtermax = (event) => {
    const max = event.target.value;
    dispatch(filter([1, max]));
  };
  //conseguir valor del estado (usado/nuevo)

  return (
    <div id="filter">
      <div>
        Ordenar Por
        <select onChange={(event) => displayvalue(event)}>
          <option value="0">Seleccionar Opción</option>
          <option value="0">Menor Precio</option>
          <option value="1">Mayor Precio</option>
          <option value="2">Mejores Criticas</option>
          <option value="3">Mas Popular</option>
        </select>
      </div>
      <div className="divisor"></div>
      <div>Categorias:</div>
      <div className="divisor"></div>
      Precio Desde
      <input
        type="number"
        min="0"
        onChange={(event) => filtermin(event)}
      ></input>
      Hasta
      <input
        type="number"
        min="0"
        onChange={(event) => filtermax(event)}
      ></input>
      <div className="divisor"></div>
      <div>Condicion</div>
      <select onChange={(event) => displayvalue(event)}>
        <option value="6">Todo</option>
        <option value="4">Nuevo</option>
        <option value="5">Usado</option>
      </select>
      <div className="divisor"></div>
      <div>Ofertas</div>
      <div className="divisor"></div>
    </div>
  );
}

export default Filter;
