import english from "../constantes/english";
import spanish from "../constantes/spanish";

export function useTranslator(langstring = "EN") {
  console.log("tu vieja", langstring);
  const language = langstring === "EN" ? english : spanish;

  const {
    lang,
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
  } = language;
  return {
    lang,
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
  };
}
