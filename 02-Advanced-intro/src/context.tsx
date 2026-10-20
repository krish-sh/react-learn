import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (prop) => {
  const [name, setName] = useState("krish");
  return (
    <GlobalContext.Provider value={{ name }}>
      {prop.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
