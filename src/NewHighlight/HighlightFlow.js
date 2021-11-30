import React, {useContext} from "react";
import Navbar from "../Navbar";
import AddHighlight from "./AddHighlight";
import { useNavigate } from "react-router";
import { ClusterlessContext } from "../Context/NoClusterDataContext";

function HighlightFlow(props)
{
    const[Data,setData]=useContext(ClusterlessContext);
    const navigate=useNavigate();
    function AddIdea(form)
    {
        setData([...Data,form]);
        navigate("/");
    }
    return (<div>
        <Navbar group={false}/>
        <div style={{backgroundColor:"#0B0D17",paddingTop:"20px",paddingBottom:"20px"}}>
        <AddHighlight Data={Data} AddIdea={AddIdea}/>
        </div>
    </div>)
}
export default HighlightFlow;