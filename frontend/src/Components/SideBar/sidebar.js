import React from "react";
import '../../Styles/sidebar.css'
//import Image1 from'../../Images/journey_img1.png'

function sidebar() {

    return(
      
<div>
  

<div className="nav-side-menu">
    <div className="brand">TravelLanka
    
    </div>
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div className="menu-list">
  
            <ul id="menu-content" className="menu-content collapse out">

            {/* <div>
                <img src={Image1} id="image1"/>
            </div> */}

               <li>
                  <a href="#">
                    <i class="fas fa-umbrella-beach fa-4x iconcolor"></i>
                    <div id="topicname">
                      <span>TravelLanka</span>
    
                    </div>
                  </a>
                </li>


                {/* --------------------------------Dashboard-------------------------------------------------------- */}

                <li>
                  <a href="/dashboard">
                    <i className="fa fa-dashboard fa-lg"></i>&nbsp;&nbsp;&nbsp; Dashboard
                  </a>
                </li>


                {/* ---------------------------------Buses--------------------------------------------------------- */}

                <li  data-toggle="collapse" data-target="#buses" className="collapsed">
                  <a href="#"><i class="fa fa-bus" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; Supervisor <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="buses">
                    <li><a href="/dashboard/AddSupervisor">Add Supervisor</a></li>
                    <li><a href="/dashboard/AllSupervisor">All Supervisor</a></li>
                    
                </ul>


                <li data-toggle="collapse" data-target="#routes" className="collapsed">
                  <a href="#"><i class="fas fa-route"></i>&nbsp;&nbsp;&nbsp; Research Topic <span className="arrow"></span></a>
                </li>  
                <ul className="sub-menu collapse" id="routes">
                  <li><a href="/dashboard/AddResearchTopic">Add Research  Topic</a></li>
                  <li><a href="/dashboard/AllResearchTopic">All Research Topic</a></li>
                </ul>


                <li data-toggle="collapse" data-target="#timetable" className="collapsed">
                  <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; Template <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="timetable">
                  <li><a href="/dashboard/fileupload">upload template</a></li>
                  <li><a href="/dashboard/filelist">All Templates</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#journey" className="collapsed">
                  <a href="#"><i class="fas fa-map-marked-alt"></i>&nbsp;&nbsp;&nbsp; Journey <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="journey">
                  <li><a href="/dashboard/addJourney">Add Journey</a></li>
                  <li><a href="/dashboard/viewJourney">All Journeys</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#driver" className="collapsed">
                  <a href="#"> <i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp; Submissions<span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="driver">
                  <li><a href="/dashboard/submitfileupload">Add Submissions</a></li>
                  <li><a href="/dashboard/submitfilelist">All Submissions</a></li>
                </ul>

                <li>
                  <a href="#">
                  <i class="fas fa-address-card"></i>&nbsp;&nbsp;&nbsp; Token
                  </a>
                </li>

                <li>
                  <a href="/dashboard/reportdashboard">
                  <i class="fas fa-file-export"></i>&nbsp;&nbsp;&nbsp; Report
                  </a>
                </li>


                
                

            </ul>
     </div>
</div>

 
</div>


    )
}
export default sidebar;