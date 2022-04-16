import "./Filter.css";

function Filter() {
  return (
    <div id="filter">
      <div>
        Ordenar Por
        <select>
          <option value="0">Mayor Precio</option>
          <option value="1">Menor Precio</option>
          <option value="2">Mejores Criticas</option>
          <option value="3">Mas Popular</option>
        </select>
      </div>
      <div className="divisor"></div>
      <div>Categorias:</div>
      <div className="divisor"></div>
      Precio Desde <input type="number" min="0"></input> Hasta
      <input type="number" min="0"></input>
      <div className="divisor"></div>
      <div>Condicion</div>
      <select>
        <option value="0">Nuevo</option>
        <option value="1">Usado</option>
      </select>
      <div className="divisor"></div>
      <div>Ofertas</div>
      <div className="divisor"></div>
    </div>
  );
}

export default Filter;
