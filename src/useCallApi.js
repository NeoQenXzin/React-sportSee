import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../src/data/mocked-data";

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
