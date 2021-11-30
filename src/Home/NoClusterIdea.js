import React, { useContext, useEffect} from "react";
import { Row,Col } from "react-bootstrap";
import IdeaBox from "./IdeaBox";
import { ClusterlessContext,ClusterlessProvider } from "../Context/NoClusterDataContext";
import { CurrentuserProvider } from "../Context/currentUserContext";

function NoclusterIdea(props)
{
   const[Data,setData]=useContext(ClusterlessContext);
   return (<ClusterlessProvider>
   <CurrentuserProvider>
   <div className="NoClusterideas">
      <Row className="m-0 p-0">
         {Data.map((item)=>(
         <Col key={item.id} lg={3} md={3} sm={4} xs={12}>
            <IdeaBox checkbox={props.checkbox} data={item}/>
         </Col>
         ))} 
      </Row>
   </div>
   </CurrentuserProvider>
   </ClusterlessProvider>);
}
export default NoclusterIdea;