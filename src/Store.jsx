import React, { createContext, useState } from 'react';

// Create a context
export const CounterContext = createContext();

// Create a component that provides the context
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount , user, setUser}}>
      {children}
    </CounterContext.Provider>
  );
};