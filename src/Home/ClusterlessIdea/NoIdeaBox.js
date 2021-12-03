import React, { useContext, useEffect } from "react";
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

function IdeaBox(props) {
    
  const [user,setUser]=useContext(CurrentuserContext);
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
  // function checkbox(e)
  // {
  //   console.log(e.target.checked);
  // }
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
            onClick={()=>props.RemoveIdea(props.data.id)}
            icon={faTrash}
          />
        <FontAwesomeIcon size="lg" className="move" icon={faExchangeAlt} />
      </div>
    </div>
  );
}
export default IdeaBox;
