import React, { Component } from 'react';
import axios from 'axios';

export default class DetailedresearchTopic extends Component {

    constructor(props) {
        super(props);
  
        

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

    

    render() {
        return(

            <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext-Sup" style={{marginLeft:'17cm'}}>
                View Research Topic Details
            </h2>
            <hr id="hr"></hr>
           
                <form  id="form_journey" style={{marginLeft:'15cm'}}>


                    <div className="row">
                    <label htmlFor="route">Research Title </label>
                    <input type="text" className="form-control" id="researchTitle" placeholder="" required
                       value={this.state.researchTitle}
                       
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Research Category </label>
                    <input type="text" className="form-control" id="research_category" placeholder="" required
                       value={this.state.research_category}
                       
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Research Area</label>
                    <input type="text" className="form-control" id="research_area"  placeholder="" required
                        value={this.state.research_area}
                        
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Supervisor Name</label>
                    <input type="text" className="form-control" id="supervisor_name" placeholder="" required
                        value={this.state.supervisor_name}
                        
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Co-Supervisor Name</label>
                    <input type="text" className="form-control" id="co_supervisor_name" placeholder="" required
                        value={this.state.co_supervisor_name}
                        
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Id</label>
                    <input type="text" className="form-control" id="groupId" placeholder="" required
                        value={this.state.groupId}
                       
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader Name</label>
                    <input type="text" className="form-control" id="member1" placeholder="" required
                        value={this.state.member1} />
                       
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader Email</label>
                    <input type="text" className="form-control" id="leader_email" placeholder="" required
                        value={this.state.leader_email}
                        
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Group Leader phone Number</label>
                    <input type="text" className="form-control" id="leader_phoneNumber" placeholder="" required
                        value={this.state.leader_phoneNumber}
                        
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 2</label>
                    <input type="text" className="form-control" id="member2" placeholder="" required
                        value={this.state.member2}
                       
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 3</label>
                    <input type="text" className="form-control" id="member3" placeholder="" required
                        value={this.state.member3}
                        
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Member 4</label>
                    <input type="text" className="form-control" id="member4" placeholder="" required
                        value={this.state.member4}
                        
                    />
                </div>


                </form>

                
                

            </div>
            
        )
    }
}