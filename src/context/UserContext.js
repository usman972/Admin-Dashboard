import React, { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Create provider
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
