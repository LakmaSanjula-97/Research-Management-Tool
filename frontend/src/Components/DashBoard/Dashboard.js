import React, {Component} from 'react';
import axios from 'axios';
import studentRegistration from '../../Images/image1.png'
import studentRegistration1 from '../../Images/image2.png'
import studentRegistration2 from '../../Images/image3.png'

import '../../Styles/Dashboard.css'


export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {busroutes: []};
    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/busroute/').then(response=>{
            this.setState({busroutes: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }


    
 
   
    
    render(){
        console.log(this.state.busroutes);
        return (
            <div>

                <div id="topic">
                    <h2>Welcome to Dashboard</h2>
                    <hr id="hr"></hr>
                </div>
                


               {/* ---------bus----------- */}
               <div>
                   <button id="dash_btn1">

                        {/* <i class="fa-solid fa-person-circle-check imgcolor1"></i> */}

                        <img  className="image" src={studentRegistration1} alt="60" style={{width:'150px'}}/>
                
                        <a className="btn btn-warning" id="dash_link1" href="/dashboard/ViewSupervisorApproval">
                            Supervisor Request
                        </a>
                       
                    </button>
               </div>

               <div>
                   <button id="dash_btn2">

                   <img  className="image" src={studentRegistration} alt="60" style={{width:'160px'}}/>

                        {/* <i class="fa-solid fa-person-circle-check imgcolor2"></i> */}
                
                        <a className="btn btn-warning" id="dash_link2" href="/dashboard/AllCoSupervisor">
                            Co-Supervisor Request
                        </a>
                       
                    </button>
               </div>

               <div>
                   <button id="dash_btn3">

                   <img  className="image" src={studentRegistration2} alt="60" style={{width:'110px'}}/>
                
                        <a className="btn btn-warning" id="dash_link3" href="/dashboard/AddPanelMember">
                            Manage Panel Members
                        </a>
                       
                    </button>
               </div>

                
                <div id="table1" style={{marginTop:'2cm'}}>
                
  
                </div>
            </div>
        );
    }
}