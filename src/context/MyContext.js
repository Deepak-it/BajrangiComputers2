// src/context/MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoggedIn: true,
    isAdmin: false,
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
