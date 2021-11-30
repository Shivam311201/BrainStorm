import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HighlightFlow from "./NewHighlight/HighlightFlow";
import Home_flow from "./Home/HomeFlow";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import EditHighlightFlow from "./EditHighlight/EditHighlightFlow";
import { ClusterlessProvider } from "./Context/NoClusterDataContext";
function App() {
  return (
    <Router>
    <Routes>
    
    <Route exact path="/" element ={<ClusterlessProvider><Home_flow/></ClusterlessProvider>}/>
    <Route exact path="/addHighlight" element ={<HighlightFlow/>}/>
    <Route exact path="/EditHighlight" element ={<EditHighlightFlow/>}/>
    </Routes>
    </Router>);
}

export default App;
