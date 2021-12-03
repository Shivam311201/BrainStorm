import React, { createContext, useState } from "react";
const myData = [
  {
    id: 1,
    UserName: "Sarah Elle",
    ClusterName: "",
    checked: false,
    IdeaDescription:
      "I have been an Airbnb host for about, I think,over 3 years. For 1 Property, my bungalow",
  },
  {
    id: 2,
    UserName: "Ram Kapoor",
    checked: false,
    ClusterName: "",
    IdeaDescription:
      "You certainly can kind of tell who will have a party and who will relax !!",
  },
];
export const ClusterlessContext = createContext();

export function ClusterlessProvider(props) {
  const [Data, setData] = useState(myData);

  return (
    <ClusterlessContext.Provider value={[Data, setData]}>
      {props.children}
    </ClusterlessContext.Provider>
  );
}
