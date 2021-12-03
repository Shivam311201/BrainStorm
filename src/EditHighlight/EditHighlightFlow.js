import React,{useContext} from "react";
import Navbar from "../Navbar";
import EditHighlight from "./EditHighlight";
import { CurrentuserContext } from "../Context/currentUserContext";
import { ClusterlessContext } from "../Context/NoClusterDataContext";
import { ClusterContext } from "../Context/clusterDataContext";
function EditHighlightFlow()
{
  const[user,setUser]=useContext(CurrentuserContext);
  const[Data,setData]=useContext(ClusterlessContext);
  const[clusterData,setClusterData]=useContext(ClusterContext);

  function updateIdea(form) {

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
      console.log(clusterData);
    }
  }
    return (<div>
        <Navbar group={false}/>
        <div className="outerEdit">
          <EditHighlight user={user} setUser={setUser} updateIdea={updateIdea}/>
        </div>
    </div>)
}
export default EditHighlightFlow;   