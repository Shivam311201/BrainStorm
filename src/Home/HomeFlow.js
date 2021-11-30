import React,{useContext, useState} from "react";
import { ClusterlessContext } from "../Context/NoClusterDataContext";
import Navbar from "../Navbar";
import ClusterIdea from "./clusterIdea";
import "./Home_style.css";
import NoclusterIdea from "./NoClusterIdea";
function Home_flow() {
  const[checkbox,enableCheckBox]=useState(false); 
  const[Data,setData]=useContext(ClusterlessContext);
  function groupData()
  {
    const newData = Data.filter((item) => item.checked === false);
    setData(newData);
    enableCheckBox(false);
      console.log(Data); 
  }
  return (<div className="Home_style">
    <Navbar enableCheckBox={enableCheckBox} checkbox={checkbox} group={true}/>
    <div className="Idea_heading">Ideas</div>
    {checkbox&&<div className="selection_msg">**Please select the ideas to be grouped**</div>}
    <NoclusterIdea checkbox={checkbox}/>
    {checkbox&&<div style={{textAlign:"right"}}><button onClick={groupData} className="Done_Button">Done</button></div>}
    <div className="Idea_heading">Clusters</div>
    <ClusterIdea/>
  </div>);
}

export default Home_flow;
