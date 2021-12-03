import React,{useContext, useState} from "react";
import Navbar from "../Navbar";
import "./Home_style.css";
import ClusterLess_Flow from "./ClusterlessIdea/ClusterLess_Flow";
import Cluster_Flow from "./ClusterIdea/Cluster_Flow";
import { ClusterCheckBoxContext } from "../Context/clusterCheckBoxContext";
function Home_flow() {

  const[checkbox,enableCheckBox]=useState(false); 
  const[ClusterCheckBox, setClusterCheckBox]=useContext(ClusterCheckBoxContext);
  return (<div className="Home_style">
    <Navbar enableCheckBox={enableCheckBox} checkbox={checkbox} group={true}/>
    <div className="Idea_heading">Ideas</div>
    <ClusterLess_Flow enableCheckBox={enableCheckBox} checkbox={checkbox}/>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <div className="Idea_heading">Clusters</div>
    {ClusterCheckBox&&<button className="Cancel_Button2" onClick={()=>setClusterCheckBox(false)}>Cancel</button>}
    </div>
    <Cluster_Flow/>
  </div>);
}

export default Home_flow;
