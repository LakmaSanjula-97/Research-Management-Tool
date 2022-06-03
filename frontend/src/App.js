import './App.css';
import React, { useContext } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthContextProvider } from "./Components/context/AuthContext";


import Dashboard from './Components/DashBoard/Dashboard';
import Sidebar from './Components/SideBar/sidebar';
import Navbar from './Components/Header/navbar';

// import AuthContext from './Components/context/AuthContext'
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import AuthContext from './Components/context/AuthContext';


import AddSupervisor from './Components/SupervisorDetails/AddSupervisor';
import allSupervisor from './Components/SupervisorDetails/AllSupervisor';
import EditSupervisor from './Components/SupervisorDetails/EditSupervisor';
import AddResearchTopic from './Components/ResearchTopics/AddResearchTopic';
import allresearchTopic from './Components/ResearchTopics/AllResearchTopic';
import EditresearchTopic from './Components/ResearchTopics/EditResearchtopic';

import FileUpload from './Components/FileUpload/FileUpload';
import FilesList from './Components/FileUpload/FilesList';
import SubmitUpload from './Components/Submissions/SubmissionUpload';
import SubmitList from './Components/Submissions/SubmitList';

axios.defaults.withCredentials = true;

function App() {

  // const { loggedIn } = useContext(AuthContext);
  return (


    <AuthContextProvider>
      <Router>
        <div>
          <Route path="/dashboard" component={Sidebar}  />
          <Route path="/dashboard" component={Navbar}/>

          <Route path="/dashboard" exact component={Dashboard} />

         

          {/*---------------- supervisor -----------------*/}

          <Route path="/dashboard/AddSupervisor" exact component={AddSupervisor} />
          <Route path="/dashboard/AllSupervisor" exact component={allSupervisor} />
          <Route path="/dashboard/EditSupervisor/:id" exact component={EditSupervisor} />


          {/*---------------- research topics -----------------*/}

          <Route path="/dashboard/AddResearchTopic" exact component={AddResearchTopic} />
          <Route path="/dashboard/AllResearchTopic" exact component={allresearchTopic} />
          <Route path="/dashboard/EditResearchTopic/:id" exact component={EditresearchTopic} />

          {/* --------------- file ------------ */}

          <Route path="/dashboard/fileupload" exact component={FileUpload}   />
          <Route path="/dashboard/filelist" exact component={FilesList} />

          <Route path="/dashboard/submitfileupload" exact component={SubmitUpload}   />
          <Route path="/dashboard/submitfilelist" exact component={SubmitList} />

          {/* ------------------------------------------- */}

          <Route exact path="/register"><Register /></Route>
          <Route exact path="/"><Login /></Route>



        </div>

      </Router>
    </AuthContextProvider>

  );
}

export default App;
