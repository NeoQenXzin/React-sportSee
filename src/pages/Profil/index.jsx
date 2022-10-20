import { USER_MAIN_DATA } from "../../data/mocked-data";
import "./index.css";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import RadarChart from "../../components/RadarChart/RadarChart";
import RadialChart from "../../components/RadialChart/RadialChart";
import calories from "./img/calories-icon.png";
import proteines from "./img/protein-icon.png";
import glucides from "./img/carbs-icon.png";
import lipides from "./img/fat-icon.png";

function Profil() {
  return (
    <div className="profil">
      <h1>
        Bonjour{" "}
        <span className="user-name">
          {USER_MAIN_DATA[1].userInfos.firstName}
        </span>
      </h1>
      <p>Félicitation ! Vous avez explosez vos objectifs d'hier 👏 </p>

      <div className="container-graphics">
        {/* partie gauche data utilisateur  */}
        <div className="graphics">
          <div className="barre-graphic">
            <BarChart />
          </div>
          <div className="graphic-container">
            <div className="graphic line-chart">
              <LineChart />
            </div>
            <div className="graphic radar-chart">
              <RadarChart />
            </div>
            <div className="graphic radial-chart">
              <RadialChart />
            </div>
          </div>
        </div>

        {/* partie droite data utilisateur */}
        <div className="results">
          <div className="result-user-container">
            <div className="result-user">
              <img src={calories} alt="icon" />
              <div>
                <span className="keydata">
                  {USER_MAIN_DATA[1].keyData.calorieCount}kCal
                </span>
                <p>Calories</p>
              </div>
            </div>
          </div>
          <div className="result-user-container">
            <div className="result-user">
              <img src={proteines} alt="icon" />
              <div>
                <span className="keydata">
                  {USER_MAIN_DATA[1].keyData.proteinCount}g
                </span>
                <p>Proteines</p>
              </div>
            </div>
          </div>
          <div className="result-user-container">
            <div className="result-user">
              <img src={glucides} alt="icon" />
              <div>
                <span className="keydata">
                  {USER_MAIN_DATA[1].keyData.carbohydrateCount}g
                </span>
                <p>Glucides</p>
              </div>
            </div>
          </div>
          <div className="result-user-container">
            <div className="result-user">
              <img src={lipides} alt="icon" />
              <div>
                <span className="keydata">
                  {USER_MAIN_DATA[1].keyData.lipidCount}g
                </span>
                <p>Lipides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
