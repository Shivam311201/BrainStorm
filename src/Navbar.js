import React, {useContext, useState, useEffect} from "react";
import "./App.css";
import {Link} from "react-router-dom";
import Logo from "./Images/logo.png";
import { ClusterlessContext } from "./Context/NoClusterDataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar(props)
{
  const[winWidth,setWidth]=useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize)
  });
  const [Data, setData] =useContext(ClusterlessContext); 
  const [Nav,setNav]=useState(false);
  return (<div><div className="nav_row">
      <div style={{display:"flex"}}>
     <Link to="/" style={{textDecoration:"none"}}> 
     <img className="logo_img" src={Logo}/>
     </Link>
     <Link to="/" style={{textDecoration:"none"}}>
     <div className="Logo_title">BrainStorm</div>
     </Link>
     </div>
     {winWidth>730&&<div className="pages_option">
     <Link to="/" style={{textDecoration:"none"}}>
     <div className="nav_options">Home</div>
     </Link>
     <Link to="/addIdea" style={{textDecoration:"none"}}>
     <div className="nav_options">Add Ideas</div>
     </Link>
     {props.group&&<div className="nav_options" onClick={()=>{
       if(Data.length>0)
       props.enableCheckBox(true)
       else alert("No ideas available for clustering !!");
       }}>Form Clusters</div>}
     </div>}
     {winWidth<=730&&<FontAwesomeIcon className="pages_option1" size="2x" icon={faBars} onClick={()=>setNav(!Nav)} />}
   </div>
   {winWidth<=730&&<div className={Nav===true?"Nav_display":"Nav_Notdisplay"} style={{}}>
   <Link to="/" style={{textDecoration:"none"}}>
     <div className="nav_options1">Home</div>
     </Link>
     <Link to="/addIdea" style={{textDecoration:"none"}}>
     <div className="nav_options1">Add Ideas</div>
     </Link>
     {props.group&&<div className="nav_options1" onClick={()=>{
       if(Data.length>0)
       props.enableCheckBox(true)
       else alert("No ideas available for clustering !!");
       }}>Form Clusters</div>}
   </div>}
   </div>);
}
export default Navbar;