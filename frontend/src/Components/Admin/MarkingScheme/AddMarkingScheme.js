import React, {useState} from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom';

export default function AddMarkingScheme() {


    const [Name, setName,] = useState("");
    const [type, settype] = useState("");
    const [marking_scheme, setmarking_scheme] = useState("");
    const [mDate, setmDate] = useState("");
    
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newSupervisor ={

            Name,
            type,
            marking_scheme,
            mDate,
            

        }

        // add route for the journey details

        axios.post("http://localhost:8070/marking/add", newSupervisor).then(()=>{
            alert("Supervisor Added");
            history.push('dashboard/AllSupervisor');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Add Supervisor
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey">


                <div className="row">
                    <label htmlFor="route">Name </label>
                    <input type="text" className="form-control" id="Name" placeholder="" required
                     onChange = {(e) => {
                        setName(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Type </label>
                    <input type="text" className="form-control" id="type" placeholder="" required
                     onChange = {(e) => {
                        settype(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Marking Scheme </label>
                    <textarea rows="4" cols="50"type="text" className="form-control" id="marking_scheme"  placeholder="" required
                    onChange = {(e) => {
                        setmarking_scheme(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">mdate</label>
                    <input type="date" className="form-control" id="mDate" placeholder="" required
                     onChange = {(e) => {
                        setmDate(e.target.value);
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