import { createContext, useContext, useState } from "react";

const contextData = {
  state: {
    modal: false,
  },
  setState: () => {},
};

const AppContext = createContext(contextData);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    modal: false,
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppContext;
