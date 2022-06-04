import React, {useState} from 'react';
import axios from "axios";
import IMAGE8 from '../../Images/RMT9.jpg'
import {useHistory} from 'react-router-dom';

export default function AddGroups() {

    const [member1Name, setmember1Name] = useState("");
    const [member2Name, setmember2Name] = useState("");
    const [member3Name, setmember3Name] = useState("");
    const [member4Name, setmember4Name] = useState("");
    const [member1email, setmember1email,] = useState("");
    const [member2email, setmember2email] = useState("");
    const [member3email, setmember3email] = useState("");
    const [member4email, setmember4email,] = useState("");
    const [member1phoneNumber, setmember1phoneNumber] = useState("");
    const [member2phoneNumber, setmember2phoneNumber] = useState("");
    const [member3phoneNumber, setmember3phoneNumber] = useState("");
    const [member4phoneNumber, setmember4phoneNumber] = useState("");
    const [member1ITnumber, setmember1ITnumber] = useState("");
    const [member2ITnumber, setmember2ITnumber] = useState("");
    const [member3ITnumber, setmember3ITnumber] = useState("");
    const [member4ITnumber, setmember4ITnumber] = useState("");
    
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newSupervisor ={

            member1Name,
            member2Name,
            member4Name,
            member1email,
            member3Name,
            member2email,
            member3email,
            member4email,
            member1phoneNumber,
            member2phoneNumber,
            member3phoneNumber,
            member4phoneNumber,
            member1ITnumber,
            member2ITnumber,
            member3ITnumber,
            member4ITnumber
            

        }

        // add route for the journey details

        axios.post("http://localhost:8070/groupdetail/add", newSupervisor).then(()=>{
            alert("Supervisor Added");
            // history.push('/dashboard/viewSupervisorRequest');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey" style={{marginTop:'2cm'}}>
            

            <div id='st-sec10'>
                <div class="topnav1" >
                    
                    <a href="/studentHome/ViewGroupDetails" style={{float:"right", marginTop:'0.5cm'}}>Reserch Groups</a>
                    <a href="/studentHome/AddGroups" style={{float:"right", marginTop:'0.5cm'}}>Research Group Registration</a>
             
                </div>
            </div>
            <br></br>
            <br></br>
            <h2 id="headertext">
                Research Group Registration
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey" style={{marginLeft:'4cm'}}>


                <div className="row">
                    <label htmlFor="route">Leader Name </label>
                    <input type="text" className="form-control" id="member1Name" placeholder="" required
                     onChange = {(e) => {
                        setmember1Name(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Leader Email </label>
                    <input type="text" className="form-control" id="member1email" placeholder="" required
                     onChange = {(e) => {
                        setmember1email(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Leader IT Number </label>
                    <input type="text" className="form-control" id="member1ITnumber" placeholder="" required
                     onChange = {(e) => {
                        setmember1ITnumber(e.target.value);
                    }}   
                    />
                </div>


                <div className="row">
                    <label htmlFor="route">Leader Phone Number </label>
                    <input type="text" className="form-control" id="member1phoneNumber" placeholder="" required
                     onChange = {(e) => {
                        setmember1phoneNumber(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 2 Name </label>
                    <input type="text" className="form-control" id="member2Name" placeholder="" required
                     onChange = {(e) => {
                        setmember2Name(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 2 Email </label>
                    <input type="text" className="form-control" id="member2email" placeholder="" required
                     onChange = {(e) => {
                        setmember2email(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 2 IT Number </label>
                    <input type="text" className="form-control" id="member2ITnumber" placeholder="" required
                     onChange = {(e) => {
                        setmember2ITnumber(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 2 Phone Number </label>
                    <input type="text" className="form-control" id="member2phoneNumber" placeholder="" required
                     onChange = {(e) => {
                        setmember2phoneNumber(e.target.value);
                    }}   
                    />
                </div>

                

                <div className="row" required>
                        <label htmlFor="passenger_id">Member 3 Name</label>
                        <input type="text" className="form-control" id="member3Name" placeholder=""
                         
                         onChange = {(e) => {
                            setmember3Name(e.target.value);
                         }}
                        />
                    </div>

                    <div className="row">
                    <label htmlFor="from">Member 3 Email </label>
                    <input type="text" className="form-control" id="member3email"  placeholder="" required
                    onChange = {(e) => {
                        setmember3email(e.target.value);
                    }}
                    />
                    </div>

                    <div className="row">
                    <label htmlFor="route">Member 3 IT Number </label>
                    <input type="text" className="form-control" id="member3ITnumber" placeholder="" required
                     onChange = {(e) => {
                        setmember3ITnumber(e.target.value);
                    }}   
                    />
                    </div>

                    <div className="row">
                    <label htmlFor="route">Member 3 Phone Number </label>
                    <input type="text" className="form-control" id="member3phoneNumber" placeholder="" required
                     onChange = {(e) => {
                        setmember3phoneNumber(e.target.value);
                    }}   
                    />
                </div>

                    

                    <div className="row" required>
                        <label htmlFor="from">Member 4 Name</label>
                        <input type="text" className="form-control" id="member4Name"  placeholder="" 
                           
                           onChange = {(e) => {
                            setmember4Name(e.target.value);
                         }}
                        />
                    </div>


                

                <div className="row">
                    <label htmlFor="from">Member 4 Email </label>
                    <input type="text" className="form-control" id="member4email"  placeholder="" required
                    onChange = {(e) => {
                        setmember4email(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Member 4 IT Number </label>
                    <input type="text" className="form-control" id="member4ITnumber" placeholder="" required
                     onChange = {(e) => {
                        setmember4ITnumber(e.target.value);
                    }}   
                    />
                    </div>

                    <div className="row">
                    <label htmlFor="route">Member 4 Phone Number </label>
                    <input type="text" className="form-control" id="member4phoneNumber" placeholder="" required
                     onChange = {(e) => {
                        setmember4phoneNumber(e.target.value);
                    }}   
                    />
                    </div>

                

                    {/* ------reset button---- */}
                <button type="reset"  id = "#">Reset</button>

                <button type="submit"  id = "#">Add</button>
            </form>

            <div >
                <img src={IMAGE8} id="imageL10"/>
            </div>   
            
        </div>
    )
}