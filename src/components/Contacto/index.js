import { useDispatch, useSelector } from "react-redux";
import { useTranslator } from "../../hooks/useTranslator";
import "./contacto.css";
import phone from "../../assets/phone.ico";
import email from "../../assets/email.ico";
import office from "../../assets/office.ico";
import contact from "../../assets/contact.png";
import { change } from "../../redux/slices/contactSlice";

function Contacto() {
  const string = useSelector((state) => state.lang.lang);
  const contactt = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const { contacto } = useTranslator(string);
  const maxtext = 500;
  const getvalue = (event) => {
    const add = event.target.value;
    dispatch(change(add));
  };

  return (
    <div id="contacto">
      <h1 className="contactitle">{contacto[0]}</h1>
      <div id="contactinfo">
        <div className="contactinfo">
          <img src={phone} alt="phone" className="contactico"></img>
          <p> {contacto[1][0]}</p>
          <p> {contacto[1][1]}</p>
        </div>
        <div className="contactinfo">
          <img src={email} alt="email" className="contactico"></img>
          <p>{contacto[2][0]}</p>
          <p> {contacto[2][1]}</p>
        </div>
        <div className="contactinfo">
          <img src={office} alt="office" className="contactico"></img>
          <p>{contacto[3][0]}</p>
          <p>
            {contacto[3][1]} - {contacto[3][2]}
          </p>
        </div>
      </div>

      <div id="contactform">
        <img alt="contact us" src={contact} id="contactimage"></img>
        <form id="formulary">
          <div>
            <h2>{contacto[4][0]}</h2>
            <p>{contacto[4][1]}</p>
          </div>
          <div>
            <div>
              <p>{contacto[5][0]}</p>

              <input type="text" id="name" placeholder={contacto[5][1]}></input>
              <input
                type="text"
                id="lastname"
                placeholder={contacto[5][2]}
              ></input>
            </div>
            <div>
              <p>{contacto[6][0]}</p>
              <input
                type="email"
                id="email"
                placeholder={contacto[6][1]}
                required
              ></input>
            </div>
            <div>
              <p>{contacto[7][0]}</p>
              <input
                type="number"
                id="phone"
                placeholder={contacto[7][1]}
              ></input>
            </div>
            <div>
              <p>{contacto[8][0]}</p>
              <select>
                <option value="0">{contacto[8][1]}</option>
                <option value="1">{contacto[8][2]}</option>
                <option value="2">{contacto[8][3]}</option>
                <option value="3">{contacto[8][4]}</option>
                <option value="4">{contacto[8][5]}</option>
                <option value="5">{contacto[8][6]}</option>
              </select>
            </div>
            <div id="message">
              <p>{contacto[9][0]}</p>
              <textarea
                type="textarea"
                maxLength={maxtext}
                onChange={(event) => getvalue(event)}
                placeholder={contacto[9][1]}
              ></textarea>
              {contactt.message.length} {contacto[9][2]} {maxtext}{" "}
              {contacto[9][3]}
            </div>
            <div id="contactbtn">
              <button class="button-29">{contacto[10]}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
