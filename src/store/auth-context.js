import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
