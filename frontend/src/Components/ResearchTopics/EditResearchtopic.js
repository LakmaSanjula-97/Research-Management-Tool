import React, { Component } from 'react';
import axios from 'axios';

export default class EditresearchTopic extends Component {

    constructor(props) {
        super(props);

        

        this.onChangeresearchTitle = this.onChangeresearchTitle.bind(this);
        this.onChangeresearch_category = this.onChangeresearch_category.bind(this);
        this.onChangeresearch_area = this.onChangeresearch_area.bind(this);
        this.onChangesupervisor_name = this.onChangesupervisor_name.bind(this);
        this.co_supervisor_name = this.onChangeco_supervisor_name.bind(this);
        this.onChangegroupId = this.onChangegroupId.bind(this);
        this.onChangemember1 = this.onChangemember1.bind(this);
        this.onChangeleader_email = this.onChangeleader_email.bind(this);
        this.onChangeleader_phoneNumber = this.onChangeleader_phoneNumber.bind(this);
        this.onChangemember2 = this.onChangemember2.bind(this);
        this.onChangemember3 = this.onChangemember3.bind(this);
        this.onChangemember4 = this.onChangemember4.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            researchTitle:'',
            research_category:'',
            research_area:'',
            supervisor_name:'',
            co_supervisor_name:'', 
            groupId:'', 
            member1:'',
            leader_email:'', 
            leader_phoneNumber:'',   
            member2:'', 
            member3:'',
            member4:''
            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/researchTopic/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    researchTitle:response.data.researchTopic.researchTitle,
                    research_category:response.data.researchTopic.research_category,
                    research_area:response.data.researchTopic.research_area,
                    supervisor_name:response.data.researchTopic.supervisor_name,
                    co_supervisor_name:response.data.researchTopic.co_supervisor_name,
                    groupId:response.data.researchTopic.groupId,
                    member1:response.data.researchTopic.member1,
                    leader_email:response.data.researchTopic.leader_email,
                    leader_phoneNumber:response.data.researchTopic.leader_phoneNumber,
                    member2:response.data.researchTopic.member2,
                    member3:response.data.researchTopic.member3,
                    member4:response.data.researchTopic.member4,
                    
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeresearchTitle(e){
        this.setState({researchTitle:e.target.value});
    }

    onChangeresearch_category(e){
        this.setState({research_category:e.target.value});
    }

    onChangeresearch_area(e){
        this.setState({research_area:e.target.value});
    }

    onChangesupervisor_name(e){
        this.setState({supervisor_name:e.target.value});
    }

    onChangeco_supervisor_name(e){
        this.setState({co_supervisor_name:e.target.value});
    }

    onChangegroupId(e){
        this.setState({groupId:e.target.value});
    }

    onChangemember1(e){
        this.setState({member1:e.target.value});
    }

    onChangeleader_email(e){
        this.setState({leader_email:e.target.value});
    }

    onChangeleader_phoneNumber(e){
        this.setState({leader_phoneNumber:e.target.value});
    }

    onChangemember2(e){
        this.setState({member2:e.target.value});
    }

    onChangemember3(e){
        this.setState({member3:e.target.value});
    }

    onChangemember4(e){
        this.setState({member4:e.target.value});
    }

  


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
             
            researchTitle: this.state.researchTitle,
            research_category: this.state.research_category,
            research_area: this.state.research_area,
            supervisor_name: this.state.supervisor_name,
            co_supervisor_name: this.state.co_supervisor_name,
            groupId: this.state.groupId,
            member1: this.state.member1,
            leader_email: this.state.leader_email,
            leader_phoneNumber: this.state.leader_phoneNumber,
            member2: this.state.member2,
            member3: this.state.member3,
            member4: this.state.member4,
            

        };

        axios.put("http://localhost:8070/researchTopic/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/AllResearchTopic');
    }





    render() {
        return(

            <div className ="form_journey">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Edit Research Topic Details
                </h2>
           
                <form onSubmit={this.onSubmit}  id="form_journey">


                    <div className="row">
                    <label htmlFor="route">Research Title </label>
                    <input type="text" className="form-control" id="researchTitle" placeholder="" required
                       value={this.state.researchTitle}
                       onChange = {this.onChangeresearchTitle}
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Research Category </label>
                    <input type="text" className="form-control" id="research_category" placeholder="" required
                       value={this.state.research_category}
                       onChange = {this.onChangeresearch_category}
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Research Area</label>
                    <input type="text" className="form-control" id="research_area"  placeholder="" required
                        value={this.state.research_area}
                        onChange = {this.onChangeresearch_area}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Supervisor Name</label>
                    <input type="text" className="form-control" id="supervisor_name" placeholder="" required
                        value={this.state.supervisor_name}
                        onChange = {this.onChangesupervisor_name}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Co-Supervisor Name</label>
                    <input type="text" className="form-control" id="co_supervisor_name" placeholder="" required
                        value={this.state.co_supervisor_name}
                        onChange = {this.onChangeco_supervisor_name}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Id</label>
                    <input type="text" className="form-control" id="groupId" placeholder="" required
                        value={this.state.groupId}
                        onChange = {this.onChangegroupId}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader Name</label>
                    <input type="text" className="form-control" id="member1" placeholder="" required
                        value={this.state.member1}
                        onChange = {this.onChangemember1}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader Email</label>
                    <input type="text" className="form-control" id="leader_email" placeholder="" required
                        value={this.state.leader_email}
                        onChange = {this.onChangeleader_email}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader phone Number</label>
                    <input type="text" className="form-control" id="leader_phoneNumber" placeholder="" required
                        value={this.state.leader_phoneNumber}
                        onChange = {this.onChangeleader_phoneNumber}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 2</label>
                    <input type="text" className="form-control" id="member2" placeholder="" required
                        value={this.state.member2}
                        onChange = {this.onChangemember2}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 3</label>
                    <input type="text" className="form-control" id="member3" placeholder="" required
                        value={this.state.member3}
                        onChange = {this.onChangemember3}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 4</label>
                    <input type="text" className="form-control" id="member4" placeholder="" required
                        value={this.state.member4}
                        onChange = {this.onChangemember4}
                    />
                </div>


                    <button type="submit">Edit</button>
                    <br/><br/>

                </form>

                
                

            </div>
            
        )
    }
}