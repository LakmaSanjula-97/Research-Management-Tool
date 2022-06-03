import React, {useState} from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom';

export default function AddResearchTopic() {


    const [researchTitle, setresearchTitle,] = useState("");
    const [research_category, setresearch_category] = useState("");
    const [research_area, setresearch_area] = useState("");
    const [supervisor_name, setsupervisor_name] = useState("");
    const [co_supervisor_name, setco_supervisor_name] = useState("");
    const [groupId, setgroupId] = useState("");
    const [member1, setmember1] = useState("");
    const [leader_email, setleader_email] = useState("");
    const [leader_phoneNumber, setleader_phoneNumber] = useState("");
    const [member2, setmember2] = useState("");
    const [member3, setmember3] = useState("");
    const [member4, setmember4] = useState("");
   
 
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newResearchTopic ={

            researchTitle,
            research_category,
            research_area,
            supervisor_name,
            co_supervisor_name, 
            groupId, 
            member1,
            leader_email, 
            leader_phoneNumber,
            member2, 
            member3,
            member4 

        }

        // add route for the journey details

        axios.post("http://localhost:8070/researchTopic/add", newResearchTopic).then(()=>{
            alert("Research Topic Added");
            history.push('/dashboard/AllResearchTopic');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Add Research Topic
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey">


                <div className="row">
                    <label htmlFor="route">Research Title </label>
                    <input type="text" className="form-control" id="researchTitle" placeholder="" required
                     onChange = {(e) => {
                        setresearchTitle(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Research Category </label>
                    <input type="text" className="form-control" id="research_category" placeholder="" required
                     onChange = {(e) => {
                        setresearch_category(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Research Area</label>
                    <input type="text" className="form-control" id="research_area"  placeholder="" required
                    onChange = {(e) => {
                        setresearch_area(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Supervisor Name</label>
                    <input type="text" className="form-control" id="supervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setsupervisor_name(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Co-Supervisor Name</label>
                    <input type="text" className="form-control" id="co_supervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setco_supervisor_name(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Id</label>
                    <input type="text" className="form-control" id="groupId" placeholder="" required
                     onChange = {(e) => {
                        setgroupId(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader Name</label>
                    <input type="text" className="form-control" id="member1" placeholder="" required
                     onChange = {(e) => {
                        setmember1(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader Email</label>
                    <input type="text" className="form-control" id="leader_email" placeholder="" required
                     onChange = {(e) => {
                        setleader_email(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader phone Number</label>
                    <input type="text" className="form-control" id="leader_phoneNumber" placeholder="" required
                     onChange = {(e) => {
                        setleader_phoneNumber(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 2</label>
                    <input type="text" className="form-control" id="member2" placeholder="" required
                     onChange = {(e) => {
                        setmember2(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 3</label>
                    <input type="text" className="form-control" id="member3" placeholder="" required
                     onChange = {(e) => {
                        setmember3(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 4</label>
                    <input type="text" className="form-control" id="member4" placeholder="" required
                     onChange = {(e) => {
                        setmember4(e.target.value);
                    }}
                    />
                </div>


                  
                

                <button type="submit"  id = "#">Add</button>
            </form>

            
            
        </div>
    )
}