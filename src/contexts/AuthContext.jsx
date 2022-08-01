import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ Children }) => {
  const [currentUser, setCurrentUser] = useState(true);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {Children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
