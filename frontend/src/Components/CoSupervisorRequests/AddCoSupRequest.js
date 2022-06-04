import React, {useState} from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom';
import '../SupervisorDetails/supervisor.css'

export default function AddCoSupRequest() {


    const [Cosupervisor_name, setCosupervisor_name,] = useState("");
    const [groupId, setgroupId] = useState("");
    const [supervisor_name, setsupervisor_name] = useState("");
    const [researchTopic, setresearchTopic] = useState("");
    const [research_area, setresearch_area] = useState("");
    const [description, setdescription] = useState("");
    const [approval, setapproval] = useState("");
    
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newCoSupRequest ={

            Cosupervisor_name,
            groupId,
            supervisor_name,
            researchTopic, 
            research_area,
            description,
            approval,
            

        }

        // add route for the journey details

        axios.post("http://localhost:8070/coSupRequset/add", newCoSupRequest).then(()=>{
            alert("Co Supervisor Request Added");
            history.push('/dashboard/AllCoSupervisor');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Request for Co Supervisor
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey">


                <div className="row">
                    <label htmlFor="route">Co Supervisor Name </label>
                    <input type="text" className="form-control" id="Cosupervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setCosupervisor_name(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Group ID </label>
                    <input type="text" className="form-control" id="groupId" placeholder="" required
                     onChange = {(e) => {
                        setgroupId(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Supervisor Name </label>
                    <input type="text" className="form-control" id="supervisor_name"  placeholder="" required
                    onChange = {(e) => {
                        setsupervisor_name(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Research Topic</label>
                    <input type="text" className="form-control" id="researchTopic" placeholder="" required
                     onChange = {(e) => {
                        setresearchTopic(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Research Area</label>
                    <input type="text" data-testid="inputresearcharea" className="form-control" id="research_area" placeholder="" required
                     onChange = {(e) => {
                        setresearch_area(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Description</label>
                    <textarea rows="4" cols="50" data-testid="testareadescription" className="form-control" id="description" placeholder="" required
                     onChange = {(e) => {
                        setdescription(e.target.value);
                    }}
                    />
                </div>

                {/* <div className="row">
                    <label htmlFor="to">Approval</label>
                    <input type="text" className="form-control" id="approval" placeholder="" required
                     onChange = {(e) => {
                        setapproval(e.target.value);
                    }}
                    />
                </div> */}

                


                    {/* ------reset button---- */}
                <button type="reset"  id = "#">Reset</button>

                <button type="submit"  id = "#">Add</button>
            </form>

            
            
        </div>
    )
}