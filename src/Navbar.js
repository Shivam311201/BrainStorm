import React, {useContext, useState} from "react";
import "./App.css";
import {Link} from "react-router-dom";
import Logo from "./Images/logo.png";
import { ClusterlessContext } from "./Context/NoClusterDataContext";
function Navbar(props)
{
  const [Data, setData] =useContext(ClusterlessContext); 
  return (<div className="nav_row">
     <Link to="/" style={{textDecoration:"none"}}> 
     <img className="logo_img" src={Logo}/>
     </Link>
     <Link to="/" style={{textDecoration:"none"}}>
     <div className="Logo_title">Oxytocin Task</div>
     </Link>
     <div className="pages_option">
     <Link to="/" style={{textDecoration:"none"}}>
     <div className="nav_options">Home</div>
     </Link>
     <Link to="/addHighlight" style={{textDecoration:"none"}}>
     <div className="nav_options">Add Highlight</div>
     </Link>
     {props.group&&<div className="nav_options" onClick={()=>{
       if(Data.length>0)
       props.enableCheckBox(true)
       else alert("No ideas available for clustering !!");
       }}>Group Highlights</div>}
     </div>
   </div>);
}
export default Navbar;