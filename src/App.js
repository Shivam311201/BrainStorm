import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HighlightFlow from "./NewHighlight/HighlightFlow";
import Home_flow from "./Home/HomeFlow";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import EditHighlightFlow from "./EditHighlight/EditHighlightFlow";
import { ClusterlessProvider } from "./Context/NoClusterDataContext";
import { CurrentuserProvider } from "./Context/currentUserContext";
import { ClusterProvider } from "./Context/clusterDataContext";
import { ClusterCheckBoxProvider } from "./Context/clusterCheckBoxContext";
import { MoveIdeaProvider } from "./Context/MoveIdeaContext";
function App() {
  return (<ClusterlessProvider>
    <CurrentuserProvider>
    <ClusterProvider>
    <ClusterCheckBoxProvider>
    <MoveIdeaProvider>
    <Router>
    <Routes>
    <Route exact path="/" element ={<Home_flow/>}/>
    <Route exact path="/addHighlight" element ={<HighlightFlow/>}/>
    <Route exact path="/EditHighlight" element ={<EditHighlightFlow/>}/>
    </Routes>
    </Router>
    </MoveIdeaProvider>
    </ClusterCheckBoxProvider>
    </ClusterProvider>
    </CurrentuserProvider>
    </ClusterlessProvider>);
}

export default App;
