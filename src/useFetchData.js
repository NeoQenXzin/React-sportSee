// Hook Api
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { USER_MAIN_DATA } from "../src/data/mocked-data";

const useFetchData = (url, user_selected) => {
  //states
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState({});
  const [user, setUser] = useState(USER_MAIN_DATA[1]); // initialise first render with mocked data
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
      setUser(data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPerformance();
      setPerformance(data.data);
      setPerformanceKind(data.kind);
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

  return {
    activity,
    averageSessions,
    performance,
    user,
    performanceKind,
    loadingUser,
    loadingActivity,
    loadingAverageSessions,
    loadingPerformance,
  };
};
export default useFetchData;
