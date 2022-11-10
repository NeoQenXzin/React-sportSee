import "./index.css";
//component
import BarChartx from "../../components/BarChart/BarChart";
import LineChartx from "../../components/LineChart/LineChart";
import RadarChartx from "../../components/RadarChart/RadarChart";
import PieChart from "../../components/PieChart/PieChart";
import UserStats from "../../components/UserStats/UserStats";
// icon stats
import calories from "./img/calories-icon.png";
import proteines from "./img/protein-icon.png";
import glucides from "./img/carbs-icon.png";
import lipides from "./img/fat-icon.png";
// mocked data
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/mocked-data";
// Hook Api
import useFetchData from "../../useFetchData";

const Profil = () => {
  //For mocked-data you must uncomment For use mocked data and comment For use api data

  //***  For use  Mocked data*/
  // const données = {
  //   activity: USER_ACTIVITY[1].sessions,
  //   averageSessions: USER_AVERAGE_SESSIONS[1].sessions,
  //   performance: USER_PERFORMANCE[1],
  //   user: USER_MAIN_DATA[1],
  //   userScore: USER_MAIN_DATA[1],
  //   loadingUser = false,
  //   loadingActivity = false,
  //   loadingAverageSessions = false,
  //   loadingPerformance = false
  // };
  // const {
  //   activity,
  //   averageSessions,
  //   performance,
  //   user,
  //   loadingUser,
  //   loadingActivity,
  //   loadingAverageSessions,
  //   loadingPerformance,
  // } = données;
  //*** End mocked data  */

  // ApiData config
  const url = "http://localhost:8000"; // Url server Api,
  const user_selected = 12; // Actually you can switch user beetween 12 | 18

  //**  For use api data */
  const {
    activity,
    averageSessions,
    performance,
    user,
    loadingUser,
    loadingActivity,
    loadingAverageSessions,
    loadingPerformance,
  } = useFetchData(url, user_selected);
  //** end api data */

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
    // console.log(user);
    // console.log(USER_MAIN_DATA[1]);
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
