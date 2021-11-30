import React, { useContext, useEffect} from "react";
import { Row,Col } from "react-bootstrap";
import IdeaBox from "./IdeaBox";
import { ClusterlessContext,ClusterlessProvider } from "../Context/NoClusterDataContext";
import { CurrentuserProvider } from "../Context/currentUserContext";

function NoclusterIdea(props)
{
   const[Data,setData]=useContext(ClusterlessContext);
   function RemoveIdea(Myid) {
      // console.log(Myid);
     const newData = Data.filter((item) => item.id !== Myid);
     setData(newData);
   }
   function setCheckbox(checked,Myid)
   {
      console.log(checked,Myid);
      Data.map((item) => {
       if(item.id===Myid)
         item.checked=checked;  
       });
   }
   return (
   <div className="NoClusterideas">
      <Row className="m-0 p-0">
         {Data.map((item)=>(
         <Col key={item.id} lg={3} md={3} sm={4} xs={12}>
            <IdeaBox checkbox={props.checkbox} setCheckbox={setCheckbox} setData={setData} data={item} RemoveIdea={RemoveIdea}/>
         </Col>
         ))} 
      </Row>
   </div>
   );
}
export default NoclusterIdea;