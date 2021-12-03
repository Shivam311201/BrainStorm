import React,{useState} from "react";
import Navbar from "../Navbar";
import "./Home_style.css";
import ClusterLess_Flow from "./ClusterlessIdea/ClusterLess_Flow";
import Cluster_Flow from "./ClusterIdea/Cluster_Flow";
function Home_flow() {

  const[checkbox,enableCheckBox]=useState(false); 

  return (<div className="Home_style">
    <Navbar enableCheckBox={enableCheckBox} checkbox={checkbox} group={true}/>
    <div className="Idea_heading">Ideas</div>
    <ClusterLess_Flow enableCheckBox={enableCheckBox} checkbox={checkbox}/>
    <div className="Idea_heading">Clusters</div>
    <Cluster_Flow/>
  </div>);
}

export default Home_flow;
