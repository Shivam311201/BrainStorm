import React, { useState,useContext } from "react";
import "./highlight_style.css";
import {ClusterlessContext} from "../Context/NoClusterDataContext";
function AddHighlight()
{
    const[Data,setData]=useContext(ClusterlessContext);
    const HighlightFormat={
        id:0,
        UserName:"",
        ClusterName:"",
        IdeaDescription:""
    };
    const[form,setform]=useState(HighlightFormat);
    function handleChange(e)
    {  
      const len=Data.length;
      
      var idx;
      if(len==0)
      idx=1;
      else idx=Data[len-1].id+1;
        setform({...form,id:idx}); 
        setform({...form,[e.target.name]:e.target.value});
    }
    function submitForm()
    { 
       setData([...Data,form]);
    }
    return (<div class="addHighlight">
      <div class="addHighlight_Title"> Create a Highlight</div>
        <div><input className="minor_input" name="UserName" onChange={handleChange} placeholder="Your Name*"/></div>
        <div><input className="minor_input" name="ClusterName" onChange={handleChange} placeholder="Cluster Name"/></div>
        <div><textarea className="major_input" name="IdeaDescription" onChange={handleChange} placeholder="Idea description*"/></div>
        <div>
            <button className="Add_Button" onClick={submitForm}>Add</button>
        </div>
    </div>
    ) 
}
export default AddHighlight;