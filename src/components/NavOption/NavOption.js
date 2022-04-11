function NavOption({ text = "ERROR_TEXTO_NO_ENCONTRADO", link = "error" }) {
  return (
    <li className="Options">
      <a href={link}>{text}</a>
    </li>
  );
}

export default NavOption;
