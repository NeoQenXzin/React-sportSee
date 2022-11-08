import { useEffect, useState } from "react";

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
