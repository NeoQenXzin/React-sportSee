import "./Header.css";
import { Link } from "react-router-dom";
import LOGO from "./logo-sportsee.png";

/**
 * Show header navigation menu
 *
 * @returns {JSX}
 */

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <img src={LOGO} alt="Logo sportsee" />
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/réglage">Réglage</Link>
          </li>
          <li>
            <Link to="/communauté">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
