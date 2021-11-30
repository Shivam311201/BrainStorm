import React,{useState} from "react";
import { CurrentuserProvider } from "../Context/currentUserContext";
import { ClusterlessProvider } from "../Context/NoClusterDataContext";
import Navbar from "../Navbar";
import ClusterIdea from "./clusterIdea";
import "./Home_style.css";
import NoclusterIdea from "./NoClusterIdea";
function Home_flow() {
const[checkbox,enableCheckBox]=useState(false); 
  return (<div className="Home_style">
    <Navbar enableCheckBox={enableCheckBox} checkbox={checkbox} group={true}/>
    <div className="Idea_heading">Ideas</div>
    <ClusterlessProvider>
    <NoclusterIdea checkbox={checkbox}/>
    </ClusterlessProvider> 
    <div className="Idea_heading">Clusters</div>
    <ClusterIdea/>
  </div>);
}

export default Home_flow;
