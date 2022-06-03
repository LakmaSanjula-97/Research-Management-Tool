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


import ViewSupervisorApproval from './Components/Admin/SupervisorApproval/SupervisorView';
import EditRequestSupervisor from './Components/Admin/SupervisorApproval/UpdateSupervisorApproval';
import AddSupervisorRequest from './Components/RequestSupervisor/AddSupervisorRequest';
import ViewSupervisorRequest from './Components/RequestSupervisor/ViewSupervisorRequest';


import AddGroups from './Components/GroupRegister/AddGroups';
import ViewGroupDetails from './Components/GroupRegister/ViewGroupDetails';
import AdminViewGroupDetails from './Components/Admin/GroupId/AdminViewGroupDetails';
import UpdateGroupId from './Components/Admin/GroupId/UpdateGroupId';


import AddPanelMember from './Components/Admin/PanelMember/AddPanelMember';
import ViewPanelMember from './Components/Admin/PanelMember/ViewPanelMember';
import UpdatePanelMember from './Components/Admin/PanelMember/UpdatePanelMembers';
import StudentViewPanelMember from './Components/StudentPanelView/StudentViewPanelMembers';


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


          {/*---------------- Request supervisor -----------------*/}
          <Route path="/dashboard/ViewSupervisorApproval" exact component={ViewSupervisorApproval}/>
          <Route path="/dashboard/EditRequestSupervisor/:id" exact component={EditRequestSupervisor}/>
          <Route path="/dashboard/AddRequestSupervisor" exact component={AddSupervisorRequest}/>
          <Route path="/dashboard/ViewSupervisorRequest" exact component={ViewSupervisorRequest}/>


          {/*---------------- Add groups -----------------*/}
          <Route path="/dashboard/AddGroups" exact component={AddGroups}/>
          <Route path="/dashboard/ViewGroupDetails" exact component={ViewGroupDetails}/>
          <Route path="/dashboard/AdminViewGroupDetails" exact component={AdminViewGroupDetails}/>
          <Route path="/dashboard/UpdateGroupId/:id" exact component={UpdateGroupId}/>

           {/*---------------- Add Panel member -----------------*/}
           <Route path="/dashboard/AddPanelMember" exact component={AddPanelMember}/>
           <Route path="/dashboard/ViewPanelMember" exact component={ViewPanelMember}/>
           <Route path="/dashboard/UpdatePanelMember/:id" exact component={UpdatePanelMember}/>
           <Route path="/dashboard/StudentViewPanelMember" exact component={StudentViewPanelMember}/>


          <Route exact path="/register"><Register /></Route>
          <Route exact path="/"><Login /></Route>



        </div>

      </Router>
    </AuthContextProvider>

  );
}

export default App;
