import { useEffect, useState } from "react";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data/mocked-data";

// Hook Api or Mocked-data
import useFetch from "./useFetch";

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

const useApiData = () => {
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

  async function fetchPerformanceData() {
    const data = await fetchPerformance();
    setPerformance(data.data.data);
  }
  useEffect(() => {
    fetchPerformanceData();
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
  return { activity, averageSessions, performance, user };
};
export default useApiData;
