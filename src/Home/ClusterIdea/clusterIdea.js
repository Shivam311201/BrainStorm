import React, { useContext, useEffect } from "react";
import { Row,Col } from "react-bootstrap";
import { ClusterContext } from "../../Context/clusterDataContext";
import ClusterBox from "./ClusterBox";
function ClusterIdea()
{
    const[clusterData, setClusterData]=useContext(ClusterContext);
    const ClusterFormat={
        id:0,
        ClusterTitle:"",
        Ideas:[]
      };

    function RemoveIdea(Myid,MyClusterName) {
        
        clusterData.map((item)=>{
            if(item.ClusterTitle===MyClusterName){
                ClusterFormat.id=item.id;
                ClusterFormat.ClusterTitle=item.ClusterTitle;
                ClusterFormat.Ideas=item.Ideas; 
            }
        });
        const newCluster=clusterData.filter((item)=>item.ClusterTitle!==MyClusterName);
        const newArr=ClusterFormat.Ideas.filter((item)=>item.id!==Myid); 
        ClusterFormat.Ideas=newArr; 
        newCluster.push(ClusterFormat); 
        setClusterData(newCluster);  
    }
  
    return (<div>
        <Row className="m-0 p-0">
        {clusterData.map((item)=>
            <Col key={item.id} lg={6} md={6} sm={6} xs={12}>
                <ClusterBox Ideas={item.Ideas} ClusterTitle={item.ClusterTitle} RemoveIdea={RemoveIdea}/>
            </Col>)}
        </Row>
    </div>)
}
export default ClusterIdea;