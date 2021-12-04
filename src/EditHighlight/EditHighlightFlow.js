import React,{useContext,useState,useEffect} from "react";
import Navbar from "../Navbar";
import EditHighlight from "./EditHighlight";
import { CurrentuserContext } from "../Context/currentUserContext";
import { ClusterlessContext } from "../Context/NoClusterDataContext";
import { ClusterContext } from "../Context/clusterDataContext";
import { useNavigate } from "react-router";
function EditHighlightFlow()
{
  const[user,setUser]=useContext(CurrentuserContext);
  const[Data,setData]=useContext(ClusterlessContext);
  const[clusterData,setClusterData]=useContext(ClusterContext);

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

  function updateIdea(form) {
   if(form.UserName!==""&&form.IdeaDescription!==""){
      if(form.ClusterName===""){
        Data.map((item) => {
          if(item.id===form.id)
          {
             item.UserName=form.UserName;
             item.IdeaDescription=form.IdeaDescription;
          }
        });
      }
      else {
        clusterData.map((item)=>{
          if(item.ClusterTitle===form.ClusterName){
            item.Ideas.map((newItem)=>{
                if(newItem.id===form.id){
                newItem.UserName=form.UserName;
                newItem.IdeaDescription=form.IdeaDescription;
              }
            });
          }
        });
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
        <div className="outerEdit" style={{height:winHeight}}>
          <EditHighlight user={user} setUser={setUser} updateIdea={updateIdea}/>
        </div>
    </div>)
}
export default EditHighlightFlow;   