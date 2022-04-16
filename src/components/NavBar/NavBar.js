import image from "../../assets/logo.png";
import { useTranslator } from "../../hooks/useTranslator";
import { switchLang } from "../../redux/slices/langSlice";
import { useDispatch, useSelector } from "react-redux";
import NavOption from "../NavOption/NavOption";
import "./NavBar.css";

function NavBar() {
  const langstring = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  const {
    lang,
    otherLang,
    home,
    about,
    services,
    contact_us,
    shop,
    langlogo,
    otherlanglogo,
  } = useTranslator(langstring);

  return (
    <div id="movNavBar">
      <div id="NavBar">
        <img src={image} alt="Company Logo" id="logo"></img>
        <ul id="NavBarOptions">
          <NavOption text={home} link="/ecommerceweb" />
          <NavOption text={about} link="/ecommerceweb" />
          <NavOption text={services} link="/ecommerceweb" />
          <NavOption text={contact_us} link="/contacto" />
          <NavOption text={shop} link="/shop" />
        </ul>

        <div id="langOptions" className="lang-box">
          <button id="currentlang" className="langbtn">
            <img src={langlogo} id="lanlogo" alt="logo of the language"></img>
            {lang}
          </button>

          <button
            id="dropdown-content"
            onClick={() => dispatch(switchLang())}
            className="langbtn"
          >
            <img
              src={otherlanglogo}
              id="lanlogo"
              alt="logo of the second language"
            ></img>
            {otherLang}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
