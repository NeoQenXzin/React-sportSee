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
const mockedData = false; // Use true for mocked data | false for Api Data
// const données = {
//   activity: USER_ACTIVITY[1].sessions,
//   averageSessions: USER_AVERAGE_SESSIONS[1].sessions,
//   performance: USER_PERFORMANCE[1],
//   user: USER_MAIN_DATA[1],
//   userScore: USER_MAIN_DATA[1],
// };

const Profil = () => {
  // const { activity, averageSessions, performance, user } = données; //mocked data

  // ApiData config
  const url = "http://localhost:8000"; // Url server Api,
  const user_selected = 12; // Actually you can switch user beetween 12 | 18
  //states
  const [activity, setActivity] = useState({});
  const [averageSessions, setAverageSessions] = useState({});
  const [performance, setPerformance] = useState({});
  const [user, setUser] = useState(USER_MAIN_DATA[1]);
  const [performanceKind, setPerformanceKind] = useState();

  // fetch data service
  const { isLoading: loadingPerformance, sendRequest: fetchPerformance } =
    useFetch(`${url}/user/${user_selected}/performance`);

  const { isLoading: loadingActivity, sendRequest: fetchActivity } = useFetch(
    `${url}/user/${user_selected}/activity`
  );

  const {
    isLoading: loadingAverageSessions,
    sendRequest: fetchAverageSessions,
  } = useFetch(`${url}/user/${user_selected}/average-sessions`);

  const { isLoading: loadingUser, sendRequest: fetchUser } = useFetch(
    `${url}/user/${user_selected}/`
  );

  // useEfect function
  useEffect(() => {
    async function fetchData() {
      const data = await fetchUser();
      (await loadingUser) === false && setUser(data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPerformance();
      (await loadingPerformance) === false && setPerformance(data.data);
      setPerformanceKind(data.kind);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchActivity();
      (await loadingActivity) === false && setActivity(data.data.sessions);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAverageSessions();
      (await loadingAverageSessions) === false &&
        setAverageSessions(data.data.sessions);
      // await console.log(data.data.session);
    }
    fetchData();
  }, []);

  // Dashboard
  if (
    loadingUser ||
    loadingActivity ||
    loadingAverageSessions ||
    loadingPerformance
  ) {
    return <h1>Loading</h1>;
  } else if (
    loadingUser === false &&
    loadingActivity === false &&
    loadingAverageSessions === false &&
    loadingPerformance === false
  ) {
    return (
      <div className="profil">
        <h1>
          Bonjour <span className="user-name">{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosez vos objectifs d'hier 👏 </p>

        <div className="container-graphics">
          {/* Left side data user (graphics)  */}
          <div className="graphics">
            <BarChartx data={activity} />
            <div className="graphic-container">
              <LineChartx data={averageSessions} />
              <RadarChartx
                data={performance}
                // kind={performance.kind}
                // // kind={performanceKind}
                // datas={performance.data}
              />
              <PieChart data={user.score} />
            </div>
          </div>

          {/* Right side data user (stats) */}
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
};

export default Profil;
