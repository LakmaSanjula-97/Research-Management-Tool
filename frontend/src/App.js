import './App.css';
import React, { useContext } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthContextProvider } from "./Components/context/AuthContext";


import Dashboard from './Components/DashBoard/Dashboard';
import Sidebar from './Components/SideBar/sidebar';
import Navbar from './Components/Header/navbar';
import ReportDashboard from './Components/Reports/ReportDashboard';


import AddJourney from './Components/Manage_Journey/AddJourney';
import ViewJourney from './Components/Manage_Journey/ViewJourney';
import EditJourney from './Components/Manage_Journey/EditJourney';
import ReportJourney from './Components/Reports/JourneyReport';



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


          <Route path="/dashboard/addJourney" exact component={AddJourney} />
          <Route path="/dashboard/viewJourney" exact component={ViewJourney} />
          <Route path="/dashboard/updateJourney/:id" exact component={EditJourney} />
          <Route path="/dashboard/journeyreport" exact component={ReportJourney} />


          <Route path="/dashboard/reportdashboard" exact component={ReportDashboard} />

          {/*---------------- supervisor -----------------*/}

          <Route path="/dashboard/AddSupervisor" exact component={AddSupervisor} />
          <Route path="/dashboard/AllSupervisor" exact component={allSupervisor} />
          <Route path="/dashboard/EditSupervisor/:id" exact component={EditSupervisor} />


          {/*---------------- research topics -----------------*/}

          <Route path="/dashboard/AddResearchTopic" exact component={AddResearchTopic} />
          <Route path="/dashboard/AllResearchTopic" exact component={allresearchTopic} />
          <Route path="/dashboard/EditResearchTopic/:id" exact component={EditresearchTopic} />


          <Route exact path="/register"><Register /></Route>
          <Route exact path="/"><Login /></Route>



        </div>

      </Router>
    </AuthContextProvider>

  );
}

export default App;
