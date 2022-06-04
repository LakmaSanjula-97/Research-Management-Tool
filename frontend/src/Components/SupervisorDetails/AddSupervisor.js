import React, {useState} from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom';
import './supervisor.css'

export default function AddSupervisor() {


    const [supervisor_name, setsupervisor_name,] = useState("");
    const [supervisor_email, setsupervisor_email] = useState("");
    const [supervisor_faculty, setsupervisor_faculty] = useState("");
    const [supervisor_research_area, setsupervisor_research_area] = useState("");
    
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newSupervisor ={

            supervisor_name,
            supervisor_email,
            supervisor_faculty,
            supervisor_research_area,
            

        }

        // add route for the journey details

        axios.post("http://localhost:8070/supervisor/add", newSupervisor).then(()=>{
            alert("Supervisor Added");
            history.push('/dashboard/AllSupervisor');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext-Sup">
                Add Supervisor Details
            </h2>
            <hr id="hr"></hr>
            <br></br>
            
            <form onSubmit={sendData}  id="form_journey" style={{'marginLeft':'15cm'}}>


                <div className="row">
                    <label htmlFor="route">Name </label>
                    <input type="text" className="form-control" id="supervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setsupervisor_name(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Email </label>
                    <input type="text" data-testid="supervisor_email" className="form-control" id="supervisor_email" placeholder="" required
                     onChange = {(e) => {
                        setsupervisor_email(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Department  </label>
                    <input type="text" data-testid="department" className="form-control" id="supervisor_faculty"  placeholder="" required
                    onChange = {(e) => {
                        setsupervisor_faculty(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">research Area</label>
                    <input type="text" className="form-control" id="supervisor_research_area" placeholder="" required
                     onChange = {(e) => {
                        setsupervisor_research_area(e.target.value);
                    }}
                    />
                </div>


                    {/* ------reset button---- */}
                <button type="reset"  id = "#">Reset</button>

                <button type="submit"  id = "#">Add</button>
            </form>

            
            
        </div>
    )
}