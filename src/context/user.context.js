import { createContext, useState } from "react";

export const UserContext = createContext({
  currentState: null,
  setCurrentState: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState(null);
  const value = { currentState, setCurrentState };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
