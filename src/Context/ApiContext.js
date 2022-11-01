import { createContext, useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../src/data/mocked-data";

export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {
  const [prenom, setPrenom] = useState("Maurice");

  const getPrenom = () => {
    setPrenom("mauricette");
  };

  useEffect(() => {
    return getPrenom();
  });

  return <ApiContext.Provider value={prenom}>{children}</ApiContext.Provider>;
}
