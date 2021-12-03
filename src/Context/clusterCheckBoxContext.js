import React, { createContext, useState } from 'react';
export const ClusterCheckBoxContext = createContext();

export function ClusterCheckBoxProvider(props) {

  const[ClusterCheckBox, setClusterCheckBox] = useState(false);

  return (
    <ClusterCheckBoxContext.Provider value={[ClusterCheckBox, setClusterCheckBox]}>
      {props.children}
    </ClusterCheckBoxContext.Provider>
  );
};