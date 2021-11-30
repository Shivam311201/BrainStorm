import React from "react";
import { Row,Col } from "react-bootstrap";
import { clusterHeadColors } from "./colors";
import IdeaBox from "./IdeaBox";
function ClusterBox()
{
    const idx=Math.floor(Math.random()*clusterHeadColors.length);
    return (<div className="cluster">
       <div className="clusterHeading" style={{backgroundColor:clusterHeadColors[idx]}}>Goals & Needs</div>
        <Row className="m-0 p-0">
            <Col lg={6} md={6} sm={6} xs={12}>
                <IdeaBox/>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
                <IdeaBox/>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
                <IdeaBox/>
            </Col>
        </Row>
    </div>);
}
export default ClusterBox;