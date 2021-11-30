import React, {useState} from "react";
import "./App.css";
import {Link} from "react-router-dom";
import Logo from "./Images/logo.png";
function Navbar(props)
{
  return (<div className="nav_row">
     <img className="logo_img" src={Logo}/>
     <div className="Logo_title">Oxytocin Task</div>
     <div className="pages_option">
     <Link to="/" style={{textDecoration:"none"}}>
     <div className="nav_options">Home</div>
     </Link>
     <Link to="/addHighlight" style={{textDecoration:"none"}}>
     <div className="nav_options">Add Highlight</div>
     </Link>
     {props.group&&<div className="nav_options" onClick={()=>{props.enableCheckBox(!props.checkbox)}}>Group Highlights</div>}
     </div>
   </div>);
}
export default Navbar;