import React, {useState} from 'react';
import axios from "axios";
import IMAGE8 from '../../Images/RMT8.jpg'
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
            // history.push('/dashboard/AllResearchTopic');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey" style={{marginTop:'2cm'}}>

            <div id='st-sec10'>
                <div class="topnav1" >
                    
                    <a href="/studentHome/FinalResearchTopic" style={{float:"right", marginTop:'0.5cm'}}>Topic Submitted Groups</a>
                    <a href="/studentHome/AddResearchTopic" style={{float:"right", marginTop:'0.5cm'}}>Submit Research Topics</a>
                    
             
                </div>
            </div>

            <br></br>
            <h2 id="headertext1">
                Add Research Topic
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey" style={{marginLeft:'4cm'}}>


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

                {/* <div className="row">
                    <label htmlFor="from">Research Area</label>
                    <input type="text" className="form-control" id="research_area"  placeholder="" required
                    onChange = {(e) => {
                        setresearch_area(e.target.value);
                    }}
                    />
                </div> */}

                <div className="row">
                    <label htmlFor="route">Research Area </label>
                   

                        <select className="form-control" id="research_area" style={{height:"1cm"}} 
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


                {/* <div className="row">
                    <label htmlFor="to">Supervisor Name</label>
                    <input type="text" className="form-control" id="supervisor_name" placeholder="" required
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

                {/* <div className="row">
                    <label htmlFor="to">Co-Supervisor Name</label>
                    <input type="text" data-testid="coname" className="form-control" id="co_supervisor_name" placeholder="" required
                     onChange = {(e) => {
                        setco_supervisor_name(e.target.value);
                    }}
                    />
                </div> */}

                <div className="row">
                    <label htmlFor="route">Co-Supervisor Name </label>
                    

                        <select className="form-control" id="co_supervisor_name" style={{height:"1cm"}} required 
                        onChange = {(e) => {
                            setco_supervisor_name(e.target.value);
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


                  
                <button type="reset"  id = "#">Reset</button>

                <button type="submit"  id = "#">Add</button>
            </form>

            <div >
                <img src={IMAGE8} id="imageL8"/>
            </div>
            
            
        </div>
    )
}