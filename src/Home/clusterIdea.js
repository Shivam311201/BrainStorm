import React, { useContext } from "react";
import { Row,Col } from "react-bootstrap";
import { ClusterContext } from "../Context/clusterDataContext";
import ClusterBox from "./ClusterBox";
function ClusterIdea(props)
{
    const [clusterData, setClusterData]=useContext(ClusterContext);
    return (<div>
        <Row className="m-0 p-0">
        {clusterData.map((item)=>
            <Col key={item.id} lg={6} md={6} sm={6} xs={12}>
                <ClusterBox Ideas={item.Ideas} />
            </Col>)}
        </Row>
    </div>)
}
export default ClusterIdea;