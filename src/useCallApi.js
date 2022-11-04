import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../src/data/mocked-data";

export default function useCallApi() {
  // State
  const [activity, setActivity] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [performance, setPerformance] = useState();
  const [performanceKind, setPerformanceKind] = useState();
  const [user, setUser] = useState(2);

  //Choix des data
  const mockedData = true; // Use true for mocked data | false for Api Data
  const user_selected = 12; // Actually you can switch user beetween 12 | 18
  const url = "http://localhost:8000"; // Url server Api

  // const typeData = () => {
  //   console.log("typeData chargé");
  //   if (tuit) {
  //     setPerformanceKind(5);
  //   }
  // };
  // typeData();

  // const getActivity = () => {
  //   if (!mockedData) {
  //     console.log("Vous utilisez les données api activity");
  //     fetch(`${url}/user/${user_selected}/activity`)
  //       .then((response) => response.json())
  //       .then((data) => setActivity(data.data.sessions))
  //       .catch((error) => console.log(error));
  //   } else {
  //     setActivity(USER_ACTIVITY[1].sessions);
  //   }
  // };
  // getActivity();

  useEffect(
    (mockedData) => {
      if (!mockedData) {
        console.log("Vous utilisez les données api activity");
        fetch(`${url}/user/${user_selected}/activity`)
          .then((response) => response.json())
          .then((data) => setActivity(data.data.sessions))
          .catch((error) => console.log(error));
      } else {
        setActivity(USER_ACTIVITY[1].sessions);
      }
    },
    [mockedData]
  );
  useEffect((mockedData) => {
    if (!mockedData) {
      console.log("Vous utilisez les données api average");
      fetch(`${url}/user/${user_selected}/average-sessions`)
        .then((response) => response.json())
        .then((data) => setAverageSessions(data.data.sessions))
        .catch((error) => console.log(error));
    } else {
      setAverageSessions(USER_AVERAGE_SESSIONS[1].sessions);
    }
  }, []);
  useEffect((mockedData) => {
    if (!mockedData) {
      console.log("Vous utilisez les données api user");
      fetch(`${url}/user/${user_selected}/`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.log(error));
    } else {
      setUser(USER_MAIN_DATA[1].score);
    }
  }, []);
  useEffect((mockedData) => {
    if (!mockedData) {
      console.log("Vous utilisez les données api performance");
      fetch(`${url}/user/${user_selected}/performance`)
        .then((response) => response.json())
        .then((data) => {
          setPerformance(data.data);
          setPerformanceKind(data.data.kind);
        })
        .catch((error) => console.log(error));
    } else {
      setPerformance(USER_PERFORMANCE[1]);
      setPerformanceKind(USER_PERFORMANCE[1]);
    }
  }, []);

  // console.log(activity);
  // console.log(averageSessions);
  // console.log(performance);
  // console.log(user);
  // console.log(performanceKind);

  return { activity, averageSessions, performance, user, performanceKind };
}
