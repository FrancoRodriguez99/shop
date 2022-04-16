import { useSelector } from "react-redux";
import { useTranslator } from "../../hooks/useTranslator";
import "./about.css";
import NET from "vanta/dist/vanta.net.min";
import React, { useState, useEffect, useRef } from "react";

function About() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const lang = useSelector((state) => state.lang.lang);
  const { abouts } = useTranslator(lang);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf5be16,
          backgroundColor: 0x371e66,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div id="About" ref={myRef}>
      <h1>
        <span>{abouts[0]}</span>
      </h1>
      <h2>
        <span>{abouts[1]}</span>
      </h2>
      <div id="Aboutdata">
        <ul id="aboutlist">
          {abouts[2].map((element, index) => {
            return (
              <li key={"list" + index} className="listabout">
                <p className="usdata">
                  <span>{element} ✓</span>
                </p>
              </li>
            );
          })}
        </ul>
        <iframe id="aboutvideo" title="about-us" src={abouts[3]}></iframe>
      </div>
    </div>
  );
}

export default About;
