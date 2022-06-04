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
import AddCoSupRequest from './Components/CoSupervisorRequests/AddCoSupRequest';
import allCoSupRequest from './Components/CoSupervisorRequests/AllCoSupRequest';
import EditCoSupRequest from './Components/CoSupervisorRequests/EditCoSupReqquest';
import ViewCoSupRequest from './Components/CoSupervisorRequests/ViewCoSupRequest';

import Home from './Components/Home/home';
import StudentNav from './Components/StudentNav/studentNav';

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


import AddMarkingScheme from './Components/Admin/MarkingScheme/AddMarkingScheme';


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

          {/*---------------- cosupervisor req-----------------*/}


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


          <Route path="/dashboard/AddCoSupervisor" exact component={AddCoSupRequest} />
          <Route path="/dashboard/AllCoSupervisor" exact component={allCoSupRequest} />
          <Route path="/dashboard/EditCoSupervisor/:id" exact component={EditCoSupRequest} />
          <Route path="/dashboard/ViewCoSupervisor" exact component={ViewCoSupRequest} />



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

          <Route path="/dashboard/AddMarkingScheme" exact component={AddMarkingScheme}/>


          
          <Route path="/" exact component={Home} />
          <Route exact path="/register"><Register /></Route>
          <Route exact path="/login"><Login /></Route>

          {/* --------------------------------------------------- */}
          <Route path="/studentNav" exact component={StudentNav} />

        </div>

      </Router>
    </AuthContextProvider>

  );
}

export default App;

