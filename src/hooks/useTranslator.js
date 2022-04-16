import english from "../constantes/english";
import spanish from "../constantes/spanish";

export function useTranslator(langstring = "EN") {
  const language = langstring === "EN" ? english : spanish;

  const {
    lang,
    otherLang,
    home,
    about,
    services,
    contact_us,
    shop,
    text,
    langlogo,
    otherlanglogo,
    presCarrousel,
    counter,
    abouts,
    servicetext,
    contacto,
  } = language;
  return {
    lang,
    otherLang,
    home,
    about,
    services,
    contact_us,
    shop,
    text,
    langlogo,
    otherlanglogo,
    presCarrousel,
    counter,
    abouts,
    servicetext,
    contacto,
  };
}
