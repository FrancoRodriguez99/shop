import pw from "../../assets/pw.png";
import rt from "../../assets/rt.png";
import cb from "../../assets/cb.png";
import { useTranslator } from "../../hooks/useTranslator";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import "./Presentation.css";

function Presentation() {
  const langstring = useSelector((state) => state.lang.lang);
  const { presCarrousel } = useTranslator(langstring);
  return (
    <div id="carrouselBox">
      <div id="carrousel">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={pw} alt="First slide" />
            <Carousel.Caption>
              <h3>{presCarrousel[0][0]}</h3>
              <p>{presCarrousel[0][1]}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rt} alt="Second slide" />

            <Carousel.Caption>
              <h3>{presCarrousel[1][0]}</h3>
              <p>{presCarrousel[1][1]}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cb} alt="Third slide" />

            <Carousel.Caption>
              <h3>{presCarrousel[2][0]}</h3>
              <p>{presCarrousel[2][1]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Presentation;
