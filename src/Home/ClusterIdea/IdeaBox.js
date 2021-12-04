import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faTrash,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { TabColors } from "../colors";
import "../Home_style.css";
import { CurrentuserContext } from "../../Context/currentUserContext";
import {useNavigate} from "react-router-dom";
import { ClusterCheckBoxContext } from "../../Context/clusterCheckBoxContext";
import { MoveIdeaContext } from "../../Context/MoveIdeaContext";
import { ClusterContext } from "../../Context/clusterDataContext";

function IdeaBox(props) {
    
  const [user,setUser]=useContext(CurrentuserContext);
  const [clusterData, setClusterData]=useContext(ClusterContext);
  const [ClusterCheckBox, setClusterCheckBox]=useContext(ClusterCheckBoxContext);
  const [MIdea, setMIdea]=useContext(MoveIdeaContext);

  const navigate=useNavigate();
  const HighlightFormat={
    id:props.data?.id,
    checked:props.data?.checked,
    UserName:props.data?.UserName,
    ClusterName:props.data?.ClusterName,
    IdeaDescription:props.data?.IdeaDescription
  };
  async function updateUser()
  {
    await setUser([HighlightFormat]);
    navigate("/EditHighlight");
  }
  const idx = Math.floor(Math.random() * TabColors.length);

  return (
    <div className="ideaBox_style" style={{ backgroundColor: TabColors[idx] }}>
      {props.checkbox && (
        <div className="checkboxStyle">
          <input onChange={(e)=>props.setCheckbox(e.target.checked,props.data.id)} type="checkbox"></input>
        </div>
      )}
      <div className="box_content">{props.data?.IdeaDescription}</div>
      <div className="box_user">- {props.data?.UserName}</div>
      <div className="update_icon">
          <FontAwesomeIcon size="lg" className="edit" onClick={updateUser} icon={faUserEdit} />
          <FontAwesomeIcon
            size="lg"
            className="delete"
            onClick={()=>{
              props.RemoveIdea(props.data.id,props.data.ClusterName)
            }}
            icon={faTrash}
          />
          <FontAwesomeIcon size="lg" className="move" 
          onClick={()=>{
            if(clusterData.length>1){
            setClusterCheckBox(true);
            setMIdea([HighlightFormat]);
            }
            else alert("No Cluster available to move !!\nPlease create new clusters to move the idea.");
            }} 
          icon={faExchangeAlt} />
      </div>
    </div>
  );
}
export default IdeaBox;
