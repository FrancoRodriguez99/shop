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
          <NavOption text={home} />
          <NavOption text={about} />
          <NavOption text={services} />
          <NavOption text={contact_us} />
          <NavOption text={shop} />
        </ul>
        <div id="dropdownbox">
          <div className="dropdown">
            <button className="dropbtn">
              <img src={langlogo} id="lanlogo" alt="logo of the language"></img>
              {lang}
            </button>
            <div className="dropdown-content">
              <button
                className="dropbtn"
                onClick={() => dispatch(switchLang())}
              >
                <img
                  src={otherlanglogo}
                  id="lanlogo"
                  alt="logo of the second language"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
