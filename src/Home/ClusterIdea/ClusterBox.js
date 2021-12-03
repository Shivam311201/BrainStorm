import React, { useContext } from "react";
import { Row,Col } from "react-bootstrap";
import { ClusterCheckBoxContext } from "../../Context/clusterCheckBoxContext";
import { clusterHeadColors } from "../colors";
import IdeaBox from "./IdeaBox";
function ClusterBox(props)
{
    const idx=Math.floor(Math.random()*clusterHeadColors.length);
    const[ClusterCheckBox, setClusterCheckBox]=useContext(ClusterCheckBoxContext);

    return (<div className="cluster">
       <div className="clusterHeading" style={{backgroundColor:clusterHeadColors[idx]}}>{props.ClusterTitle}
       {ClusterCheckBox&&<input className="moveCheckbox" 
       onChange={()=>{setClusterCheckBox(false)}} 
       type="checkbox"></input>}
       </div>
        <Row className="m-0 p-0">
          {props.Ideas.map((item)=>
            <Col key={item.id} lg={6} md={6} sm={6} xs={12}>
                <IdeaBox data={item} RemoveIdea={props.RemoveIdea}/>
            </Col>)}
        </Row>
    </div>);
}
export default ClusterBox;