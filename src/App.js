import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import IdeaFlow from "./NewIdea/IdeaFlow";
import Home_flow from "./Home/HomeFlow";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import EditIdeaFlow from "./EditIdea/EditIdeaFlow";
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
    <Route exact path="/addIdea" element ={<IdeaFlow/>}/>
    <Route exact path="/EditIdea" element ={<EditIdeaFlow/>}/>
    </Routes>
    </Router>
    </MoveIdeaProvider>
    </ClusterCheckBoxProvider>
    </ClusterProvider>
    </CurrentuserProvider>
    </ClusterlessProvider>);
}

export default App;
