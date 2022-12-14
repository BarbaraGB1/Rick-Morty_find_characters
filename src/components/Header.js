import "../styles/Partials/Header.scss";
import Logo from "../images/Rick-And-Morty-Logo-Transparent-File.png";
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
