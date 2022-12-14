import "../styles/Partials/Header.scss";
import Logo from "../images/logotransparente.png";
function Header() {
  return (
    <>
      <header className="header">
        <img src={Logo} className="logo pulse " alt="Logo Rick and Morty" />
      </header>
    </>
  );
}
export default Header;
