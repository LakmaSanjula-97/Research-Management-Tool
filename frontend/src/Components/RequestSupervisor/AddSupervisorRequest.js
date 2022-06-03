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
                Add Supervisor Request
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
                    {/* <input type="text" className="form-control" id="research_area" placeholder="" required
                     onChange = {(e) => {
                        setresearch_area(e.target.value);
                    }}   
                    /> */}

                        <select className="form-control" id="research_area" style={{height:"1cm"}} required onChange = {(e) => {
                                    setresearch_area(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Natural Language Processing (NLP)">Natural Language Processing (NLP)</option>
                                <option value="Computational Linguistics (CL)">Computational Linguistics (CL)</option>
                                <option value="Data Science (DS)">Data Science (DS)</option>
                                <option value="Business Intelligence and Analytics (BIA">Business Intelligence and Analytics (BIA</option>
                                <option value="Knowledge Management (KM)">Knowledge Management (KM)</option>
                                <option value="Big Data (BD)">Big Data (BD)</option>
                                <option value="ICT for Development (ICTD)">ICT for Development (ICTD)</option>
                                <option value="E-learning and Education (ELE)">E-learning and Education (ELE)</option>
                                <option value="Human Computer Interaction (HCI)">Human Computer Interaction (HCI)</option>
                                <option value="Software-Defined Networks (SDN)">Software-Defined Networks (SDN)</option>
                                <option value="Software Engineering (SE)."> Software Engineering (SE).</option>
                                <option value="Cloud Computing (CC)">Cloud Computing (CC)</option>
                                <option value="Algorithms Design and Development (ADD)">Algorithms Design and Development (ADD)</option>

                            </select>
                </div>

                <div className="row">
                    <label htmlFor="route">Supervisor Name </label>
                    {/* <input type="text" className="form-control" id="supervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setsupervisor_name(e.target.value);
                    }}   
                    /> */}

                        <select className="form-control" id="supervisor_name" style={{height:"1cm"}} required onChange = {(e) => {
                                    setsupervisor_name(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Prof.Koliya Pulasinghe">Prof.Koliya Pulasinghe</option>
                                <option value="Prof. Chandimal S. Jayawardena">Prof. Chandimal S. Jayawardena</option>
                                <option value="Prof. Mahesha Kapurubandara">Prof. Mahesha Kapurubandara</option>
                                <option value="Prof. Samantha Thelijjagoda">Prof. Samantha Thelijjagoda</option>
                                <option value="Dr. Pradeepa Samarasinghe">Dr. Pradeepa Samarasinghe</option>
                                <option value="Dr. Janaka Wijekoon">Dr. Janaka Wijekoon</option>
                                <option value="Dr. Dharshana Kasthururathne">Dr. Dharshana Kasthururathne</option>
                                <option value="Dr. Anuradha Karunasena">Dr. Anuradha Karunasena</option>
                                <option value="Dr. Windhaya Rankothge">Dr. Windhaya Rankothge</option>
                                <option value="Dr. Malitha Wijesundara">Dr. Malitha Wijesundara</option>
                                <option value="Dr. Nuwan Kodagoda"> Dr. Nuwan Kodagoda</option>
                                <option value="Dr. Jayantha Amararachchi">Dr. Jayantha Amararachchi</option>
                                <option value="Dr. Jeewanee Bamunusinghe">Dr. Jeewanee Bamunusinghe</option>

                            </select>
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