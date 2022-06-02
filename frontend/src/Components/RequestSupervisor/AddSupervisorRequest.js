import React, {useState} from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom';

export default function AddSupervisorRequest() {


    const [researchTopic, setresearchTopic] = useState("");
    const [research_area, setresearch_area] = useState("");
    const [Requestmessage, setRequestmessage] = useState("");
    const [GroupLeader, setGroupLeader] = useState("");
    const [supervisor_name, setsupervisor_name,] = useState("");
    const [GroupLeaderITnumber, setGroupLeaderITnumber] = useState("");
    const [sdate, setsdate] = useState("");
   
    
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newSupervisor ={

            researchTopic,
            research_area,
            GroupLeader,
            supervisor_name,
            Requestmessage,
            GroupLeaderITnumber,
            sdate,
            

        }

        // add route for the journey details

        axios.post("http://localhost:8070/requestSupervisor/add", newSupervisor).then(()=>{
            alert("Supervisor Added");
            history.push('/dashboard/viewSupervisorRequest');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Add Journey
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey">


                <div className="row">
                    <label htmlFor="route">Research Topic </label>
                    <input type="text" className="form-control" id="researchTopic" placeholder="" required
                     onChange = {(e) => {
                        setresearchTopic(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Research Area </label>
                    <input type="text" className="form-control" id="research_area" placeholder="" required
                     onChange = {(e) => {
                        setresearch_area(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Supervisor Name </label>
                    <input type="text" className="form-control" id="supervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setsupervisor_name(e.target.value);
                    }}   
                    />
                </div>

                <div className="row" required>
                        <label htmlFor="passenger_id">Request message</label>
                        <input type="text" className="form-control" id="Requestmessage" placeholder=""
                         
                         onChange = {(e) => {
                            setRequestmessage(e.target.value);
                         }}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="from">Group Leader</label>
                        <input type="text" className="form-control" id="GroupLeader"  placeholder="" 
                           
                           onChange = {(e) => {
                            setGroupLeader(e.target.value);
                         }}
                        />
                    </div>

                <div className="row">
                    <label htmlFor="passenger_id">Group Leader ITnumber </label>
                    <input type="text" className="form-control" id="GroupLeaderITnumber" placeholder="" required
                     onChange = {(e) => {
                        setGroupLeaderITnumber(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Date </label>
                    <input type="date" className="form-control" id="sdate"  placeholder="" required
                    onChange = {(e) => {
                        setsdate(e.target.value);
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