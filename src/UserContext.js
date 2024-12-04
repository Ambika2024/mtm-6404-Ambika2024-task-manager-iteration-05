// src/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context for users
const UserContext = createContext();

// UserProvider will supply the users' data to the entire app
export const UserProvider = ({ children }) => {
  // Example fake user data
  const [users] = useState([  // Removed setUsers as it's not necessary
    { id: 1, name: 'Raman', email: 'Raman@example.com' },
    { id: 2, name: 'Ellie sam', email: 'Ellie.sam@example.com' },
  ]);

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user context data
export const useUserContext = () => useContext(UserContext);
