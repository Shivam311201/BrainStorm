import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faTrash,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { ClusterlessContext } from "../Context/NoClusterDataContext";
import { TabColors } from "./colors";
import "./Home_style.css";
import { Link } from "react-router-dom";
import { CurrentuserContext } from "../Context/currentUserContext";

function IdeaBox(props) {
    
  const [Data, setData] = useContext(ClusterlessContext);
  const [user,setUser]=useContext(CurrentuserContext);

  function RemoveIdea() {
    const newData = Data.filter((item) => item.id !== props.data.id);
    console.log(newData);
    setData(newData);
  }
  function upDateUser()
  {
    setUser([{
        id: props.data?.id,
        ClusterName: props.data?.ClusterName,
        UserName: props.data?.ClusterName,
        IdeaDescription: props.data?.IdeaDescription,
    }])
  }
  const idx = Math.floor(Math.random() * TabColors.length);
  
  return (
    <div className="ideaBox_style" style={{ backgroundColor: TabColors[idx] }}>
      {props.checkbox && (
        <div className="checkboxStyle">
          <input type="checkbox"></input>
        </div>
      )}
      <div className="box_content">{props.data?.IdeaDescription}</div>
      <div className="box_user">- {props.data?.UserName}</div>
      <div className="update_icon">
          <Link to="/EditHighlight">
          <FontAwesomeIcon size="lg" className="edit" onClick={upDateUser} icon={faUserEdit} />
            </Link>
          <FontAwesomeIcon
            size="lg"
            className="delete"
            onClick={RemoveIdea}
            icon={faTrash}
          />
        <FontAwesomeIcon size="lg" className="move" icon={faExchangeAlt} />
      </div>
    </div>
  );
}
export default IdeaBox;
