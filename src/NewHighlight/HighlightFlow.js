import React from "react";
import { ClusterlessProvider } from "../Context/NoClusterDataContext";
import Navbar from "../Navbar";
import AddHighlight from "./AddHighlight";
function HighlightFlow(props)
{
    return (<div>
        <Navbar group={false}/>
        <div style={{backgroundColor:"#0B0D17",paddingTop:"20px",paddingBottom:"20px"}}>
        <ClusterlessProvider>
        <AddHighlight/>
        </ClusterlessProvider>
        </div>
    </div>)
}
export default HighlightFlow;