import React, { useContext } from "react";
import "./Edithighlight_style.css";
import { CurrentuserContext } from "../Context/currentUserContext";
function EditHighlight()
{
    const[user,setUser]=useContext(CurrentuserContext);
    console.log(user);
    return (<div class="EditHighlight">
      <div class="EditHighlight_Title"> Edit Highlight.....</div>
        <div><input className="minor_input1" placeholder="Your Name*"/></div>
        <div><input className="minor_input1" placeholder="Cluster Name"/></div>
        <div><textarea className="major_input1" placeholder="Idea description*"/></div>
        <div>
            <button className="Save_Button">Save</button>
        </div>
    </div>
    ) 
}
export default EditHighlight;