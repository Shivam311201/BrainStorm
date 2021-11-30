import React,{useContext} from "react";
import Navbar from "../Navbar";
import EditHighlight from "./EditHighlight";
import { CurrentuserContext } from "../Context/currentUserContext";
import { ClusterlessContext } from "../Context/NoClusterDataContext";
function EditHighlightFlow()
{
  const[user,setUser]=useContext(CurrentuserContext);
  const[Data,setData]=useContext(ClusterlessContext);
  function updateIdea(form) {
    Data.map((item) => {
      if(item.id===form.id)
      {
         item.UserName=form.UserName;
         item.ClusterName=form.ClusterName;
         item.IdeaDescription=form.IdeaDescription;
      }
    });
  }
    return (<div>
        <Navbar group={false}/>
        <div style={{backgroundColor:"#0B0D17",paddingTop:"20px",paddingBottom:"20px"}}>
          <EditHighlight user={user} setUser={setUser} updateIdea={updateIdea}/>
        </div>
    </div>)
}
export default EditHighlightFlow;   