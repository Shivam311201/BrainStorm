import React, { useState,useContext } from "react";
import { ClusterContext } from "../Context/clusterDataContext";
import { ClusterlessContext } from "../Context/NoClusterDataContext";
import "./highlight_style.css";

function AddHighlight(props)
{
    const [Data,setData]=useContext(ClusterlessContext);
    const [clusterData, setClusterData]=useContext(ClusterContext);
    var len=0;
    clusterData.map((item)=>{
        len+=(item.Ideas.length);
    });

    const HighlightFormat={
        id:len+props.Data.length+1,
        checked:false,
        UserName:"",
        ClusterName:"",
        IdeaDescription:""
    };
    const[form,setform]=useState(HighlightFormat);
    function handleChange(e)
    {  
        console.log(form.id);
        setform({...form,[e.target.name]:e.target.value});
    }
    return (<div style={{display:"flex",justifyContent:"space-around"}}>
    <div class="addHighlight">
      <div class="addHighlight_Title"> Create a Highlight</div>
        <div><input className="minor_input" name="UserName" onChange={handleChange} placeholder="Your Name*"/></div>
        <div><input className="minor_input" name="ClusterName" onChange={handleChange} placeholder="Cluster Name"/></div>
        <div><textarea className="major_input" name="IdeaDescription" onChange={handleChange} placeholder="Idea description*"/></div>
        <div style={{display:"flex",flexDirection:"row-reverse"}}>
            <button className="Add_Button" onClick={()=>props.AddIdea(form)}>Add</button>
        </div>
    </div>
    </div>) 
}
export default AddHighlight;