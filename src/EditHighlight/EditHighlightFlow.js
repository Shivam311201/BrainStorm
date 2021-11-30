import React from "react";
import Navbar from "../Navbar";
import EditHighlight from "./EditHighlight";
import { CurrentuserProvider } from "../Context/currentUserContext";
function EditHighlightFlow()
{
    return (<div>
        <Navbar group={false}/>
        <div style={{backgroundColor:"#0B0D17",paddingTop:"20px",paddingBottom:"20px"}}>
        <CurrentuserProvider>
          <EditHighlight/>
        </CurrentuserProvider>
        </div>
    </div>)
}
export default EditHighlightFlow;   