import React, { useContext, useEffect} from "react";
import { Row,Col } from "react-bootstrap";
import NoIdeaBox from "./NoIdeaBox";
import { ClusterlessContext } from "../../Context/NoClusterDataContext";
import "../Home_style.css";

function NoclusterIdea(props)
{
   const[Data,setData]=useContext(ClusterlessContext);
   
   function compare(a,b)
    {
       if(a.id<b.id)
       return -1;
       if(a.id>b.id)
       return 1;
     return 0;  
    }

   function RemoveIdea(Myid) {
     const newData = Data.filter((item) => item.id !== Myid);
     newData.sort(compare);
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
         <Col key={item.id} lg={3} md={4} sm={4} xs={12}>
            <NoIdeaBox checkbox={props.checkbox} setCheckbox={setCheckbox} setData={setData} data={item} RemoveIdea={RemoveIdea}/>
         </Col>
         ))} 
      </Row>
   </div>
   );
}
export default NoclusterIdea;