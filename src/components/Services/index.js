import { useSelector } from "react-redux";
import { useTranslator } from "../../hooks/useTranslator";
import edu from "../../assets/edu.ico";
import finance from "../../assets/finance.ico";
import goods from "../../assets/goods.ico";
import manufac from "../../assets/manufac.ico";
import proservic from "../../assets/proservic.ico";
import tech from "../../assets/tech.ico";
import "./services.css";

function Services() {
  const ico = [edu, finance, goods, tech, proservic, manufac];
  const lang = useSelector((state) => state.lang.lang);
  const { servicetext } = useTranslator(lang);
  return (
    <div id="Services">
      <div id="title">
        <h1>{servicetext[0]}</h1>
        <h2>{servicetext[1]}</h2>
      </div>
      <div id="box-services">
        <ul id="services-list">
          {servicetext[2].map((title, index) => {
            return (
              <li className="servicebox">
                <img src={ico[index]} className="icondata" alt="icons"></img>
                <h3>{title}</h3>
                <p className="Description">{servicetext[3][index]}</p>
                <a href="/Contacto" className="tocontac">
                  {servicetext[4]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Services;
