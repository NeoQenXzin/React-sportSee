

// useApi.js 
import { useEffect, useState } from "react";
import useCallApi from "./useCallApi";

const user_selected = 12; // Actually you can switch user beetween 12 | 18

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  const [performanceKind, setPerformanceKind] = useState();
  const [user, setUser] = useState(2);

  const fetchApi = () => {
    fetch(`${url}/user/${user_selected}/activity`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("fetch ok");
        setLoading(false);
        setData(data);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchDataActivity = () => {
    fetch(`${url}/user/${user_selected}/activity`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.sessions);
        setLoading(false);
        setActivity(data.data.sessions);
      });
  };
  useEffect(() => {
    fetchDataActivity();
  }, []);

  const fetchDataAverageSessions = () => {
    fetch(`${url}/user/${user_selected}/average-sessions`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.sessions);
        setLoading(false);
        setAverageSessions(data.data.sessions);
      });
  };
  useEffect(() => {
    fetchDataAverageSessions();
  }, []);

  const fetchDataUser = () => {
    fetch(`${url}/user/${user_selected}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setUser(data);
      });
  };
  useEffect(() => {
    fetchDataUser();
  }, []);

  const fetchDataPerformance = () => {
    fetch(`${url}/user/${user_selected}/performance`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.data);
        console.log(data.data.kind);
        setLoading(false);
        setPerformance(data.data.data);
        setPerformanceKind(data.data.kind);
      });
  };
  useEffect(() => {
    fetchDataPerformance();
  }, []);

  // console.log(data);
  return { loading, data, activity, averageSessions, performance, user };
};

export default useApi;


// useCallApi.js 
import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../src/data/mocked-data";
import Profil from "./pages/Profil";

const useCallApi = (url) => {
  // State
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  const [performanceKind, setPerformanceKind] = useState();
  const [user, setUser] = useState(2);

  //Choix des data
  const mockedData = true; // Use true for mocked data | false for Api Data
  const user_selected = 12; // Actually you can switch user beetween 12 | 18
  // const url = "http://localhost:8000"; // Url server Api

  const fetchDataActivity = () => {
    fetch(`${url}/user/${user_selected}/activity`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.sessions);
        setLoading(false);
        setActivity(data.data.sessions);
      });
  };
  useEffect(() => {
    fetchDataActivity();
  }, []);

  const fetchDataAverageSessions = () => {
    fetch(`${url}/user/${user_selected}/average-sessions`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.sessions);
        setLoading(false);
        setAverageSessions(data.data.sessions);
      });
  };
  useEffect(() => {
    fetchDataAverageSessions();
  }, []);

  const fetchDataUser = () => {
    fetch(`${url}/user/${user_selected}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setUser(data);
      });
  };
  useEffect(() => {
    fetchDataUser();
  }, []);

  const fetchDataPerformance = () => {
    fetch(`${url}/user/${user_selected}/performance`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.data);
        console.log(data.data.kind);
        setLoading(false);
        setPerformance(data.data.data);
        setPerformanceKind(data.data.kind);
      });
  };
  useEffect(() => {
    fetchDataPerformance();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `${url}/user/${user_selected}/average-sessions`
  //     );
  //     return result.json().then((data) => {
  //       console.log(data.data.sessions);
  //       setAverageSessions(data.data.sessions);
  //     });
  //   };
  //   fetchData();
  // }, [url]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(`${url}/user/${user_selected}/`);
  //     return result.json().then((data) => {
  //       console.log(data);
  //       setUser(data);
  //     });
  //   };
  //   fetchData();
  // }, [url]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(`${url}/user/${user_selected}/performance`);
  //     return result.json().then((data) => {
  //       console.log(data.data.data);
  //       console.log(data.data.kind);
  //       setPerformance(data.data.data);
  //       setPerformanceKind(data.data.kind);
  //     });
  //   };
  //   fetchData();
  // }, [url]);

  // useEffect(
  //   (mockedData) => {
  //     if (!mockedData) {
  //       console.log("Vous utilisez les données api activity");
  //       fetch(`${url}/user/${user_selected}/activity`)
  //         .then((response) => response.json())
  //         .then((data) => setActivity(data.data.sessions))
  //         .catch((error) => console.log(error));
  //     } else {
  //       setActivity(USER_ACTIVITY[1].sessions);
  //     }
  //   },
  //   [url]
  // );
  // useEffect(
  //   (mockedData) => {
  //     if (!mockedData) {
  //       console.log("Vous utilisez les données api average");
  //       fetch(`${url}/user/${user_selected}/average-sessions`)
  //         .then((response) => response.json())
  //         .then((data) => setAverageSessions(data.data.sessions))
  //         .catch((error) => console.log(error));
  //     } else {
  //       setAverageSessions(USER_AVERAGE_SESSIONS[1].sessions);
  //     }
  //   },
  //   [url]
  // );
  // useEffect(
  //   (mockedData) => {
  //     if (!mockedData) {
  //       console.log("Vous utilisez les données api user");
  //       fetch(`${url}/user/${user_selected}/`)
  //         .then((response) => response.json())
  //         .then((data) => setUser(data))
  //         .catch((error) => console.log(error));
  //     } else {
  //       setUser(USER_MAIN_DATA[1].score);
  //     }
  //   },
  //   [url]
  // );
  // useEffect(
  //   (mockedData) => {
  //     if (!mockedData) {
  //       console.log("Vous utilisez les données api performance");
  //       fetch(`${url}/user/${user_selected}/performance`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setPerformance(data.data);
  //           setPerformanceKind(data.data.kind);
  //         })
  //         .catch((error) => console.log(error));
  //     } else {
  //       setPerformance(USER_PERFORMANCE[1]);
  //       setPerformanceKind(USER_PERFORMANCE[1]);
  //     }
  //   },
  //   [url]
  // );

  // console.log(activity);
  // console.log(averageSessions);
  // console.log(performance);
  // console.log(user);
  // console.log(performanceKind);

  return {
    loading,
    activity,
    averageSessions,
    performance,
    user,
    performanceKind,
  };
};

export default useCallApi;



// Profil.js 
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
import useCallApi from "../../useCallApi";
import useApi from "../../useApi";
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
  const url = "http://localhost:8000"; // Url server Api,
  const { loading, data, activity, averageSessions, performance, user } =
    useApi(url);
  // if (loading) return <h1>Loading</h1>

  // return <div className="">{JSON.stringify(data)}</div> console.log(data);

  // const { averageSessions, isLoading, error } = useCallApi(
  //   `${url}/user/${user_selected}/average-sessions`
  // );
  // Appel Api ou mocked-data via un hook
  const apiData = useCallApi(url);
  // const { activity, averageSessions, performance, user } = données;
  // const { activity, averageSessions, performance, user } = apiData;

  //test
  // const { loading, activity, averageSessions, performance, user } =
  //   useCallApi(url);
  // console.log(apiData);

  // console.log(user.userInfos);
  if (loading) {
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
