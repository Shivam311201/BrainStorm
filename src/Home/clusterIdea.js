import React from "react";
import { Row,Col } from "react-bootstrap";
import { CurrentuserProvider } from "../Context/currentUserContext";
import { ClusterlessProvider } from "../Context/NoClusterDataContext";
import ClusterBox from "./ClusterBox";
function ClusterIdea()
{
    return (<div>
        <Row className="m-0 p-0">
            <Col lg={6} md={6} sm={6} xs={12}>
            <ClusterlessProvider>    
            <CurrentuserProvider>
                <ClusterBox/>
            </CurrentuserProvider>
            </ClusterlessProvider>    
            </Col>
        </Row>
    </div>)
}
export default ClusterIdea;