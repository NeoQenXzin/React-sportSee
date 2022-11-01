import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../src/data/mocked-data";

export default function useCallApi() {
  // State
  const [apiActivity, setApiActivity] = useState();
  const [apiAverageSessions, setApiAverageSessions] = useState();
  const [apiPerformance, setApiPerformance] = useState();
  const [apiPerformanceKind, setApiPerformanceKind] = useState();
  const [apiUserScore, setApiUserScore] = useState(2);

  // !!! Déclanche une boucle infini
  // fetch("http://localhost:8000/user/12/activity")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data.data.sessions);
  //     setApiActivity(data.data.sessions);
  //   })
  //   .catch((error) => console.log(error));

  useEffect(() => {
    const setData = () => {
      fetch("http://localhost:8000/user/12/activity")
        .then((response) => response.json())
        .then((data) => setApiActivity(data.data.sessions))
        .catch((error) => console.log(error));

      fetch("http://localhost:8000/user/12/average-sessions")
        .then((response) => response.json())
        .then((data) => setApiAverageSessions(data.data.sessions))
        .catch((error) => console.log(error));

      fetch("http://localhost:8000/user/12/")
        .then((response) => response.json())
        .then((data) => setApiUserScore(data))
        .catch((error) => console.log(error));
    };
    fetch("http://localhost:8000/user/12/performance")
      .then((response) => response.json())
      .then((data) => {
        setApiPerformance(data.data);
        setApiPerformanceKind(data.data.kind);
      })
      .catch((error) => console.log(error));

    setData();
  }, []);

  // const données = {
  //   activity: apiActivity,
  //   averageSessions: apiAverageSessions,
  //   performance: apiPerformance,
  //   performanceKind: apiPerformanceKind,
  //   userScore: apiUserScore,
  // };
  console.log(apiActivity);
  console.log(apiAverageSessions);
  console.log(apiPerformance);
  console.log(apiUserScore);
  console.log(apiPerformanceKind);

  // Mocked data
  const données = {
    activity: USER_ACTIVITY[1].sessions,
    averageSessions: USER_AVERAGE_SESSIONS[1].sessions,
    performance: USER_PERFORMANCE[1],
    user: USER_MAIN_DATA[1],
    userScore: USER_MAIN_DATA[1],
  };
  // Les données n'arrive pas dans index.js => cause j'avais écrit: return { données } au lieu de: return données

  return données;
}
