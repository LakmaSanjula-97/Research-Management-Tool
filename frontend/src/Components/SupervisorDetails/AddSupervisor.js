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
                    <label htmlFor="route">Supervisor Name </label>
                    

                        <select className="form-control" id="supervisor_name" style={{height:"1cm"}} required 
                        onChange = {(e) => {
                            setsupervisor_name(e.target.value);
                                }}>
                                <option>Select Supervisor</option>
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


                <div className="row">
                    <label htmlFor="passenger_id">Email </label>
                    <input type="text" className="form-control" id="supervisor_email" placeholder="" required
                     onChange = {(e) => {
                        setsupervisor_email(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Department  </label>
                    <input type="text" className="form-control" id="supervisor_faculty"  placeholder="" required
                    onChange = {(e) => {
                        setsupervisor_faculty(e.target.value);
                    }}
                    />
                </div>

               



                <div className="row">
                    <label htmlFor="route">Research Area </label>
                   

                        <select className="form-control" id="supervisor_research_area" style={{height:"1cm"}} 
                        required 
                        onChange = {(e) => {
                            setsupervisor_research_area(e.target.value);
                                }}>
                                <option>Select Research Area</option>
                                <option value="Natural Language Processing (NLP)">Natural Language Processing (NLP)</option>
                                <option value="Computational Linguistics (CL)">Computational Linguistics (CL)</option>
                                <option value="Data Science (DS)">Data Science (DS)</option>
                                <option value="Business Intelligence and Analytics (BIA">Business Intelligence and Analytics (BIA)</option>
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


                    {/* ------reset button---- */}
                <button type="reset"  id = "#">Reset</button>

                <button type="submit"  id = "#">Add</button>
            </form>

            
            
        </div>
    )
}