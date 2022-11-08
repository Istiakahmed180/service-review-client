import React, { createContext } from "react";
export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={"Istiak Ahmed"}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
