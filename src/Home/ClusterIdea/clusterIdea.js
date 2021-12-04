import React, { useContext, useState } from "react";
import { Row,Col } from "react-bootstrap";
import { ClusterCheckBoxContext } from "../../Context/clusterCheckBoxContext";
import { ClusterContext } from "../../Context/clusterDataContext";
import ClusterBox from "./ClusterBox";
function ClusterIdea()
{
    const[clusterData, setClusterData]=useContext(ClusterContext);
    const[ClusterCheckBox, setClusterCheckBox]=useContext(ClusterCheckBoxContext);

    const ClusterFormat={
        id:0,
        ClusterTitle:"",
        Ideas:[]
      };
    
    function compare(a,b)
    {
       if(a.id<b.id)
       return -1;
       if(a.id>b.id)
       return 1;
     return 0;  
    }

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
        newArr.sort(compare); 
        ClusterFormat.Ideas=newArr; 
        newCluster.push(ClusterFormat); 
        newCluster.sort(compare);
        setClusterData(newCluster);  
    }
  
    return (<div>
      {ClusterCheckBox&&<div className="selection_msg">**Please select the cluster where idea to be moved**</div>}
        <Row className="m-0 p-0">
        {clusterData.map((item)=>
            <Col key={item.id} lg={6} md={6} sm={6} xs={12}>
                <ClusterBox id={item.id} Ideas={item.Ideas} ClusterTitle={item.ClusterTitle} RemoveIdea={RemoveIdea}/>
            </Col>)}
        </Row>
    </div>)
}
export default ClusterIdea;