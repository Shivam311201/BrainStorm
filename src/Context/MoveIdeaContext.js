import React, { createContext, useState } from 'react';
export const MoveIdeaContext = createContext();

export function MoveIdeaProvider(props) {

  const[MIdea, setMIdea] = useState([]);

  return (
    <MoveIdeaContext.Provider value={[MIdea, setMIdea]}>
      {props.children}
    </MoveIdeaContext.Provider>
  );
};