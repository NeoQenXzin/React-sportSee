import "./VerticalNav.css";
import { Link } from "react-router-dom";
import Yoga from "./yoga.png";
import Natation from "./natation.png";
import Velo from "./velo.png";
import Muscu from "./muscu.png";
function VerticalNav() {
  return (
    <div className="vertical-nav-container">
      <nav className="vertical-nav">
        <ul>
          <li></li>
          <li>
            <Link to="/">
              <img src={Yoga} alt="Logo sportsee" />
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <img src={Natation} alt="Logo sportsee" />
            </Link>
          </li>
          <li>
            <Link to="/réglage">
              <img src={Velo} alt="Logo sportsee" />
            </Link>
          </li>
          <li>
            <Link to="/communauté">
              <img src={Muscu} alt="Logo sportsee" />
            </Link>
          </li>
        </ul>
        <p>Copyright, SportSee 2020</p>
      </nav>
    </div>
  );
}

export default VerticalNav;
