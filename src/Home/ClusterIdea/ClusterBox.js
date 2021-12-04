import React, { useContext } from "react";
import { Row,Col } from "react-bootstrap";
import { ClusterCheckBoxContext } from "../../Context/clusterCheckBoxContext";
import { ClusterContext } from "../../Context/clusterDataContext";
import { MoveIdeaContext } from "../../Context/MoveIdeaContext";
import { ClusterlessContext } from "../../Context/NoClusterDataContext";
import { clusterHeadColors } from "../colors";
import IdeaBox from "./IdeaBox";
function ClusterBox(props)
{
    const idx=Math.floor(Math.random()*clusterHeadColors.length);
    const[ClusterCheckBox, setClusterCheckBox]=useContext(ClusterCheckBoxContext);
    const[MIdea, setMIdea]=useContext(MoveIdeaContext);
    const[clusterData, setClusterData]=useContext(ClusterContext);
    const[Data,setData]=useContext(ClusterlessContext);

    const ClusterFormat={
        id:props.id,
        ClusterTitle:props.ClusterTitle,
        Ideas:props.Ideas
    };
    function compare(a,b)
    {
       if(a.id<b.id)
       return -1;
       if(a.id>b.id)
       return 1;
     return 0;  
    }
    function Move()
    {
        const AlreadyClus=MIdea[0].ClusterName;

        if(AlreadyClus==="")
        {
            const newClus = clusterData.filter((item)=>item.ClusterTitle!=props.ClusterTitle);
            MIdea[0].ClusterName=props.ClusterTitle;
            ClusterFormat.Ideas.push(MIdea[0]);
            ClusterFormat.Ideas.sort(compare);
            const finalClus=[...newClus,ClusterFormat];
            finalClus.sort(compare);            
            setClusterData(finalClus);
            const newData = Data.filter((item) => item.id !== MIdea[0].id);
            newData.sort(compare);
            setData(newData);
        }
        else {
            const newClus = clusterData.filter((item)=>item.ClusterTitle===AlreadyClus);
            const newArr = newClus[0].Ideas.filter((item)=>item.id!==MIdea[0].id);
            newArr.sort(compare);
            newClus[0].Ideas=newArr;
            MIdea[0].ClusterName=props.ClusterTitle;
            ClusterFormat.Ideas.push(MIdea[0]);
            ClusterFormat.Ideas.sort(compare);
            const remClus = clusterData.filter((item)=>((item.ClusterTitle!==props.ClusterTitle)&&(item.ClusterTitle!==AlreadyClus)));
            const finalClus=[...remClus,ClusterFormat,newClus[0]];
            finalClus.sort(compare);
            setClusterData(finalClus);
        }

    }
    return (<div className="cluster">
       <div className="clusterHeading" style={{backgroundColor:clusterHeadColors[idx]}}>{props.ClusterTitle}
       {ClusterCheckBox&&(MIdea[0].ClusterName!=props.ClusterTitle)&&<input className="moveCheckbox" 
       onChange={()=>{
        setClusterCheckBox(false);
        Move();
        }} 
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