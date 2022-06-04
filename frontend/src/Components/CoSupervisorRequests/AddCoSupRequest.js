import React, {useState} from 'react';
import axios from "axios";
import IMAGE7 from '../../Images/RMT7.jpg'
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
            // history.push('/dashboard/AllCoSupervisor');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey" style={{marginTop:'2cm'}}>

            <div id='st-sec10'>
                    <div class="topnav1" >
                        
                        <a href="/studentHome/ViewCoSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Approval Status Co-Supervisor</a>
                        <a href="/studentHome/ViewSupervisorRequest" style={{float:"right", marginTop:'0.5cm'}}>Approval Status Supervisor</a>
                        <a href="/studentHome/AddCoSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Request Co-Supervisor</a>
                        <a href="/studentHome/AddRequestSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Request Supervisor</a>
                        <a href="/studentHome/ViewSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Supervisor Details</a>
                        
                
                    </div>
                </div>
            <br></br>
            <h2 id="headertext1">
                Request for Co-Supervisor
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey" style={{marginLeft:'4cm'}}>


                {/* <div className="row">
                    <label htmlFor="route">Co Supervisor Name </label>
                    <input type="text" className="form-control" id="Cosupervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setCosupervisor_name(e.target.value);
                    }}   
                    />
                </div> */}

                <div className="row">
                    <label htmlFor="route">Co Supervisor Name </label>
                    

                        <select className="form-control" id="Cosupervisor_name" style={{height:"1cm"}} required 
                        onChange = {(e) => {
                            setCosupervisor_name(e.target.value);
                                }}>
                                <option>Select Co-Supervisor</option>
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
                    <label htmlFor="passenger_id">Group ID </label>
                    <input type="text" className="form-control" id="groupId" placeholder="" required
                     onChange = {(e) => {
                        setgroupId(e.target.value);
                    }}  
                    />
                </div>

                {/* <div className="row">
                    <label htmlFor="from">Supervisor Name </label>
                    <input type="text" className="form-control" id="supervisor_name"  placeholder="" required
                    onChange = {(e) => {
                        setsupervisor_name(e.target.value);
                    }}
                    />
                </div> */}

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
                    <label htmlFor="to">Research Topic</label>
                    <input type="text" className="form-control" id="researchTopic" placeholder="" required
                     onChange = {(e) => {
                        setresearchTopic(e.target.value);
                    }}
                    />
                </div>

                {/* <div className="row">
                    <label htmlFor="to">Research Area</label>
                    <input type="text" className="form-control" id="research_area" placeholder="" required
                     onChange = {(e) => {
                        setresearch_area(e.target.value);
                    }}
                    />
                </div> */}

                <div className="row">
                    <label htmlFor="route">Research Area </label>
                   

                        <select className="form-control"  id="research_area"  style={{height:"1cm"}} 
                        required 
                        onChange = {(e) => {
                            setresearch_area(e.target.value);
                                }}>
                                <option>Select Research Area</option>
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
                    <label htmlFor="to">Description</label>
                    <textarea rows="4" cols="50" className="form-control" id="description" placeholder="" required
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

            <div >
                <img src={IMAGE7} id="imageL7"/>
            </div>

            
            
        </div>
    )
}