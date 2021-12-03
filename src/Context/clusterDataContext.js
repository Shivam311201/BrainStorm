import React, { createContext, useState } from "react";
const myData = [
  {
    id: 1,
    ClusterTitle: "Goals and Needs",
    Ideas: [
      {
        id: 3,
        UserName: "Sarah Elle",
        ClusterName: "Goals and Needs",
        IdeaDescription:
          "I have been an Airbnb host for about, I think,over 3 years. For 1 Property, my bungalow",
      },
      {
        id: 4,
        UserName: "Ram Kapoor",
        ClusterName: "Goals and Needs",
        IdeaDescription:
          "You certainly can kind of tell who will have a party and who will relax !!",
      },
    ],
  }
];
export const ClusterContext = createContext();

export function ClusterProvider(props) {
  const [clusterData, setClusterData] = useState(myData);

  return (
    <ClusterContext.Provider value={[clusterData, setClusterData]}>
      {props.children}
    </ClusterContext.Provider>
  );
}
