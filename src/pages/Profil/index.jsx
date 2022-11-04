import "./index.css";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/mocked-data";
import BarChartx from "../../components/BarChart/BarChart";
import LineChartx from "../../components/LineChart/LineChart";
import RadarChartx from "../../components/RadarChart/RadarChart";
import PieChart from "../../components/PieChart/PieChart";
import UserStats from "../../components/UserStats/UserStats";
import calories from "./img/calories-icon.png";
import proteines from "./img/protein-icon.png";
import glucides from "./img/carbs-icon.png";
import lipides from "./img/fat-icon.png";

// Hook Api or Mocked-data
import useCallApi from "../../useCallApi";

// Mocked data
const données = {
  activity: USER_ACTIVITY[1].sessions,
  averageSessions: USER_AVERAGE_SESSIONS[1].sessions,
  performance: USER_PERFORMANCE[1],
  user: USER_MAIN_DATA[1],
  userScore: USER_MAIN_DATA[1],
};

function Profil() {
  // Appel Api ou mocked-data via un hook
  const apiData = useCallApi(données);
  const { activity, averageSessions, performance, user } = données;
  // const { activity, averageSessions, performance, user } = apiData;
  console.log(apiData);

  return (
    <div className="profil">
      <h1>
        Bonjour <span className="user-name">{user.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosez vos objectifs d'hier 👏 </p>

      <div className="container-graphics">
        {/* partie gauche data utilisateur  */}
        <div className="graphics">
          <BarChartx data={activity} />

          <div className="graphic-container">
            <LineChartx data={averageSessions} />
            <RadarChartx data={performance} />
            <PieChart data={user.score} />
          </div>
        </div>

        {/* partie droite Stats utilisateur */}
        <div className="results">
          <UserStats
            user={user}
            image={calories}
            stat={user.keyData.calorieCount / 1000}
            title="Calories"
            type="kCal"
          />
          <UserStats
            user={user}
            image={proteines}
            stat={user.keyData.proteinCount}
            title="Proteines"
            type="g"
          />
          <UserStats
            user={user}
            image={glucides}
            stat={user.keyData.carbohydrateCount}
            title="Glucides"
            type="g"
          />
          <UserStats
            user={user}
            image={lipides}
            stat={user.keyData.lipidCount}
            title="Lipides"
            type="g"
          />
        </div>
      </div>
    </div>
  );
}

export default Profil;
