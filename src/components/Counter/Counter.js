import { useTranslator } from "../../hooks/useTranslator";
import ny from "../../assets/ny.ico";
import pb from "../../assets/pb.ico";
import s from "../../assets/s.ico";
import hc from "../../assets/hc.ico";
import { useSelector } from "react-redux";
import "./Counter.css";
import CountUp from "react-countup";

const icons = [ny, pb, hc, s];

function Counter() {
  const langstring = useSelector((state) => state.lang);
  const { counter } = useTranslator(langstring.lang);

  return (
    <div id="Counter">
      {counter.map((element, index) => (
        <div key={"countup" + index} className="data">
          <div id={"number" + index}>
            <CountUp end={element[1]} duration={6 + index * 2} />
          </div>
          <img src={icons[index]} className="icondatacounter" alt="icons"></img>
          <div>{element[0]}</div>
        </div>
      ))}
    </div>
  );
}
export default Counter;
