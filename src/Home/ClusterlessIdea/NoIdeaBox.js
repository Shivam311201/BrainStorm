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
import { useNavigate } from "react-router-dom";
import { ClusterCheckBoxContext } from "../../Context/clusterCheckBoxContext";
import { MoveIdeaContext } from "../../Context/MoveIdeaContext";

function IdeaBox(props) {
  const [user, setUser] = useContext(CurrentuserContext);
  const [MIdea, setMIdea] = useContext(MoveIdeaContext);
  const [ClusterCheckBox, setClusterCheckBox] = useContext(
    ClusterCheckBoxContext
  );
  const navigate = useNavigate();
  const IdeaFormat = {
    id: props.data?.id,
    checked: props.data?.checked,
    UserName: props.data?.UserName,
    ClusterName: props.data?.ClusterName,
    IdeaDescription: props.data?.IdeaDescription,
  };
  async function updateUser() {
    await setUser([IdeaFormat]);
    navigate("/EditIdea");
  }
  const idx = Math.floor(Math.random() * TabColors.length);
  return (
    <div className="ideaBox_style IdeaBoxOuter" style={{ backgroundColor: TabColors[idx] }}>
      {props.checkbox && (
        <div className="checkboxStyle">
          <input
            onChange={(e) => props.setCheckbox(e.target.checked, props.data.id)}
            type="checkbox"
          ></input>
        </div>
      )}
      <div className="box_content">{props.data?.IdeaDescription}</div>
      <div className="box_user">- {props.data?.UserName}</div>
      <div className="update_icon">
        <FontAwesomeIcon
          size="lg"
          className="edit"
          onClick={updateUser}
          icon={faUserEdit}
        />
        <FontAwesomeIcon
          size="lg"
          className="delete"
          onClick={() => {
            props.RemoveIdea(props.data.id);
            console.log(ClusterCheckBox);
          }}
          icon={faTrash}
        />
        <FontAwesomeIcon
          size="lg"
          className="move"
          onClick={() => {
            setClusterCheckBox(true);
            setMIdea([IdeaFormat]);
          }}
          icon={faExchangeAlt}
        />
      </div>
    </div>
  );
}
export default IdeaBox;
