import { useTranslator } from "../../hooks/useTranslator";
import ny from "../../assets/ny.ico";
import pb from "../../assets/pb.ico";
import s from "../../assets/s.ico";
import hc from "../../assets/hc.ico";
import { useSelector } from "react-redux";
import "./Counter.css";

const icons = [hc, pb, s, ny];

function up(endValue, index) {}

function Counter() {
  const langstring = useSelector((state) => state.lang.lang);
  const { counter } = useTranslator(langstring);
  return (
    <div id="Counter">
      {counter.map((element, index) => (
        <div key={index} className="data">
          <div id="num${index}">{element[1])}</div>
          <img src={icons[index]} className="icondata" alt="icons"></img>
          <div>{element[0]}</div>
        </div>
      ))}
    </div>
  );
}
export default Counter;
