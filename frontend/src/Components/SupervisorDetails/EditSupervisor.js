import React, { Component } from 'react';
import axios from 'axios';

export default class EditSupervisor extends Component {

    constructor(props) {
        super(props);

        

        this.onChangesupervisor_name = this.onChangesupervisor_name.bind(this);
        this.onChangesupervisor_email = this.onChangesupervisor_email.bind(this);
        this.onChangesupervisor_faculty = this.onChangesupervisor_faculty.bind(this);
        this.onChangesupervisor_research_area = this.onChangesupervisor_research_area.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            supervisor_name:'',
            supervisor_email:'',
            supervisor_faculty:'',
            supervisor_research_area:''
            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/supervisor/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    supervisor_name:response.data.supervisor.supervisor_name,
                    supervisor_email:response.data.supervisor.supervisor_email,
                    supervisor_faculty:response.data.supervisor.supervisor_faculty,
                    supervisor_research_area:response.data.supervisor.supervisor_research_area,
                    
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangesupervisor_name(e){
        this.setState({supervisor_name:e.target.value});
    }
    onChangesupervisor_email(e){
        this.setState({supervisor_email:e.target.value});
    }
    onChangesupervisor_faculty(e){
        this.setState({supervisor_faculty:e.target.value});
    }
    onChangesupervisor_research_area(e){
        this.setState({supervisor_research_area:e.target.value});
    }
    


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
             
            supervisor_name: this.state.supervisor_name,
            supervisor_email: this.state.supervisor_email,
            supervisor_faculty: this.state.supervisor_faculty,
            supervisor_research_area: this.state.supervisor_research_area,
            

        };

        axios.put("http://localhost:8070/supervisor/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/AllSupervisor');
    }





    render() {
        return(

            <div className ="form_journey">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Edit Supervisor Details
                </h2>
           
                <form onSubmit={this.onSubmit}  id="form_journey">


                    <div className="row" required>
                        <label htmlFor="route">Name</label>
                        <input type="text" className="form-control" id="supervisor_name" placeholder=""
                          value={this.state.supervisor_name}
                          onChange = {this.onChangesupervisor_name}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="passenger_id">Email</label>
                        <input type="text" className="form-control" id="supervisor_email" placeholder=""
                         value={this.state.supervisor_email}
                         onChange = {this.onChangesupervisor_email}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="passenger_id">Department</label>
                        <input type="text" className="form-control" id="supervisor_faculty" placeholder=""
                         value={this.state.supervisor_faculty}
                         onChange = {this.onChangesupervisor_faculty}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="from">Research Area</label>
                        <input type="text" className="form-control" id="supervisor_research_area"  placeholder="" 
                            value={this.state.supervisor_research_area}
                            onChange = {this.onChangesupervisor_research_area}
                        />
                    </div>


                    
                    <button type="reset"  id = "#">Reset</button>

                    <button type="submit">Edit</button>
                    <br/><br/>

                </form>

                
                

            </div>
            
        )
    }
}