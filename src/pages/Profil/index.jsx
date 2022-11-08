import "./index.css";
import { useEffect, useState } from "react";

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
import useFetch from "../../useFetch";
// import useApiData from "../../useApiData";

// Mocked data
//Choix des data
const mockedData = true; // Use true for mocked data | false for Api Data
const données = {
  activity: USER_ACTIVITY[1].sessions,
  averageSessions: USER_AVERAGE_SESSIONS[1].sessions,
  performance: USER_PERFORMANCE[1],
  user: USER_MAIN_DATA[1],
  userScore: USER_MAIN_DATA[1],
};

function Profil() {
  // const { activity, averageSessions, performance, user } = données; //mocked data
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  const [user, setUser] = useState();

  const url = "http://localhost:8000"; // Url server Api,
  const user_selected = 12; // Actually you can switch user beetween 12 | 18

  const { sendRequest: fetchPerformance } = useFetch(
    `${url}/user/${user_selected}/performance`
  );
  const { sendRequest: fetchActivity } = useFetch(
    `${url}/user/${user_selected}/activity`
  );
  const { sendRequest: fetchAverageSessions } = useFetch(
    `${url}/user/${user_selected}/average-sessions`
  );
  const { sendRequest: fetchUser } = useFetch(`${url}/user/${user_selected}`);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPerformance();
      setPerformance(data.data.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchActivity();
      setActivity(data.data.sessions);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAverageSessions();
      setAverageSessions(data.data.sessions);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchUser();
      setUser(data);
    }
    fetchData();
  }, []);

  console.log(user);
  console.log(performance);
  if (!mockedData) {
    return <h1>Loading</h1>;
  } else {
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
}

export default Profil;
