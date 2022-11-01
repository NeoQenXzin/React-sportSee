import "./index.css";
import BarChartx from "../../components/BarChart/BarChart";
import LineChartx from "../../components/LineChart/LineChart";
import RadarChartx from "../../components/RadarChart/RadarChart";
import PieChart from "../../components/PieChart/PieChart";
import calories from "./img/calories-icon.png";
import proteines from "./img/protein-icon.png";
import glucides from "./img/carbs-icon.png";
import lipides from "./img/fat-icon.png";
// Mocked-data
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/mocked-data";
// Hook Api
import useCallApi from "../../useCallApi";
//Context
import { ApiContext } from "../../Context/ApiContext";
import { useContext } from "react";

function Profil() {
  // Appel Api ou mocked-data via un hook
  const apiData = useCallApi();
  const { activity, averageSessions, performance, performanceKind, userScore } =
    apiData;
  console.log(performance);
  console.log(activity);
  console.log(apiData);

  // Appel Api ou mocked-data via Context
  // const test = useContext(ApiContext);
  // const { prenom } = test;
  // console.log(test);

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
            {/* <BarChartx data={USER_ACTIVITY[1].sessions} /> */}
            <BarChartx data={activity} />
          </div>
          <div className="graphic-container">
            <div className="graphic line-chart">
              <LineChartx data={averageSessions} />
              {/* <LineChartx data={USER_AVERAGE_SESSIONS[1].sessions} /> */}
            </div>
            <div className="graphic radar-chart">
              <RadarChartx data={performance} />
              {/* <RadarChartx data={USER_PERFORMANCE[1]} /> */}
            </div>
            <div className="graphic pie-chart">
              <PieChart data={userScore} />
              {/* <PieChart data={USER_MAIN_DATA[1].score} /> */}
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
