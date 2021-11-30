import React, { createContext, useState } from 'react';
export const CurrentuserContext = createContext();

export function CurrentuserProvider(props) {

  const [user, setUser] = useState([]);

  return (
    <CurrentuserContext.Provider value={[user, setUser]}>
      {props.children}
    </CurrentuserContext.Provider>
  );
};