import React, {useState,useContext} from "react";
import NoclusterIdea from "./NoClusterIdea";
import { ClusterContext } from "../../Context/clusterDataContext";
import { ClusterlessContext } from "../../Context/NoClusterDataContext";
function ClusterLess_Flow(props)
{  
    const[clusterData, setClusterData]=useContext(ClusterContext);

    const ClusterFormat={
      id:clusterData.length+1,
      ClusterTitle:"",
      Ideas:[]
    };
  
    const[Data,setData]=useContext(ClusterlessContext);
    const[clusterName,setClusterName]=useState("");
    const[clusterForm,setClusterForm]=useState(ClusterFormat);
  
    function handleChange(e)
    {  
        setClusterForm({...clusterForm,[e.target.name]:e.target.value});
    }
  
    function groupData()
    {
      const newData = Data.filter((item) => item.checked === false);
      const dataApp = Data.filter((item) => item.checked === true);
      var fnd=0;
  
      dataApp.map((newidea)=>{
        newidea.ClusterName=clusterForm.ClusterTitle;  
      });
      clusterForm.Ideas=dataApp;
      
      clusterData.map((item)=>{
        if(item.ClusterTitle==clusterName)
        {
          dataApp.map((newidea)=>item.Ideas.push(newidea));
          fnd=1;
        }
      });
      
      if(fnd===0&&clusterForm.ClusterTitle!="")
      {
        setClusterData([...clusterData,clusterForm]); 
      }
  
      setData(newData);
      props.enableCheckBox(false);
      setClusterName("");  
    }
  
  
   return (<div>
    {props.checkbox&&<div className="selection_msg">**Please select the ideas to be grouped**</div>}
    <NoclusterIdea checkbox={props.checkbox}/>
    {props.checkbox&&<div style={{display:"flex",flexDirection:"row-reverse",marginRight:"15px"}}>
    <div className="group_input" >
    <input type="text" className="clusterName" name="ClusterTitle" onChange={handleChange} placeholder="Cluster Name"></input>
    <br/>
    <button onClick={groupData} className="Done_Button">Done</button>
    </div>
    </div>}
   </div>);
}
export default ClusterLess_Flow;