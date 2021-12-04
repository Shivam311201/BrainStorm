import React, {useContext,useEffect,useState} from "react";
import Navbar from "../Navbar";
import AddHighlight from "./AddHighlight";
import { useNavigate } from "react-router";
import { ClusterlessContext } from "../Context/NoClusterDataContext";
import { ClusterContext } from "../Context/clusterDataContext";

function HighlightFlow(props)
{
    const [Data,setData]=useContext(ClusterlessContext);
    const [clusterData, setClusterData]=useContext(ClusterContext);
    const ClusterFormat={
        id:clusterData.length+1,
        ClusterTitle:"",
        Ideas:[]
    };
    const[winHeight,setHeight]=useState(window.innerHeight);
    useEffect(() => {
      function handleResize() {
        setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize)
    });
    const navigate=useNavigate();
    function compare(a,b)
    {
       if(a.id<b.id)
       return -1;
       if(a.id>b.id)
       return 1;
     return 0;  
    }
    function AddIdea(form)
    {
        if(form.UserName!==""&&form.IdeaDescription!==""){
            if(form.ClusterName===""){
            const newI=[...Data,form];
            newI.sort(compare);
            setData(newI);
            }
            else {
            const clus1=clusterData.filter((item)=>item.ClusterTitle===form.ClusterName);
            const clus2=clusterData.filter((item)=>item.ClusterTitle!==form.ClusterName);
            if(clus1.length===0)
            {
                ClusterFormat.ClusterTitle=form.ClusterName;
                ClusterFormat.Ideas.push(form);
                ClusterFormat.Ideas.sort(compare);
                const finalClus=[...clusterData,ClusterFormat];
                finalClus.sort(compare);
                setClusterData(finalClus);
            }
            else {
                clus1[0].Ideas.push(form);
                clus1[0].Ideas.sort(compare);
                const finalClus=[...clus2,clus1[0]];
                finalClus.sort(compare);
                setClusterData(finalClus);
            }
            }
          navigate("/");
        }
        else if((form.UserName==="")&&(form.IdeaDescription===""))
        alert("User name and Idea description can't be empty !!");
        else if(form.UserName==="")
            alert("User name can't be empty !!");
        else if(form.IdeaDescription==="")
        alert("Idea description can't be empty !!");
    }
    return (<div>
        <Navbar group={false}/>
        <div style={{backgroundColor:"#0B0D17",paddingTop:"30px",paddingBottom:"20px",height:winHeight}}>
        <AddHighlight Data={Data} AddIdea={AddIdea}/>
        </div>
    </div>)
}
export default HighlightFlow;