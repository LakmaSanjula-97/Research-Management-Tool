import React, { Component } from 'react';
import axios from 'axios';

export default class EditCoSupRequest extends Component {

    constructor(props) {
        super(props);

        

        this.onChangeCosupervisor_name = this.onChangeCosupervisor_name.bind(this);
        this.onChangegroupId = this.onChangegroupId.bind(this);
        this.onChangesupervisor_name = this.onChangesupervisor_name.bind(this);
        this.onChangeresearchTopic = this.onChangeresearchTopic.bind(this);
        this.onChangeresearch_area = this.onChangeresearch_area.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeapproval = this.onChangeapproval.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            Cosupervisor_name:'',
            groupId:'',
            supervisor_name:'',
            researchTopic:'', 
            research_area:'',
            description:'',
            approval:'',
            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/coSupRequset/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

   
                    Cosupervisor_name:response.data.coSupRequset.Cosupervisor_name,
                    groupId:response.data.coSupRequset.groupId,
                    supervisor_name:response.data.coSupRequset.supervisor_name,
                    researchTopic:response.data.coSupRequset.researchTopic,
                    research_area:response.data.coSupRequset.research_area,
                    description:response.data.coSupRequset.description,
                    approval:response.data.coSupRequset.approval,
                    
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeCosupervisor_name(e){
        this.setState({Cosupervisor_name:e.target.value});
    }

    onChangegroupId(e){
        this.setState({groupId:e.target.value});
    }

    onChangesupervisor_name(e){
        this.setState({supervisor_name:e.target.value});
    }

    onChangeresearchTopic(e){
        this.setState({researchTopic:e.target.value});
    }

    onChangeresearch_area(e){
        this.setState({research_area:e.target.value});
    }

    onChangedescription(e){
        this.setState({description:e.target.value});
    }

    onChangeapproval(e){
        this.setState({approval:e.target.value});
    }

   



    
    


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
            Cosupervisor_name:this.state.Cosupervisor_name,
            groupId:this.state.groupId,
            supervisor_name:this.state.supervisor_name,
            researchTopic:this.state.researchTopic,
            research_area:this.state.research_area,
            description:this.state.description,
            approval:this.state.approval,        
            

        };

        axios.put("http://localhost:8070/coSupRequset/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/AllCoSupervisor');
    }





    render() {
        return(

            <div className ="form_journey">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Give Approval For Research Topics
                </h2>
           
                <form onSubmit={this.onSubmit}  id="form_journey">


                    

                <div className="row">
                    <label htmlFor="route">Co Supervisor Name </label>
                    <input type="text" className="form-control" id="Cosupervisor_name"  readOnly
                    value={this.state.Cosupervisor_name}
                    onChange = {this.onChangeCosupervisor_name}
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Group ID </label>
                    <input type="text" className="form-control" id="groupId" placeholder="" readOnly
                     value={this.state.groupId}
                     onChange = {this.onChangegroupId}
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">Supervisor Name </label>
                    <input type="text" className="form-control" id="supervisor_name"  placeholder="" readOnly
                    value={this.state.supervisor_name}
                    onChange = {this.onChangesupervisor_name}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Research Topic</label>
                    <input type="text" className="form-control" id="researchTopic" placeholder="" readOnly
                     value={this.state.researchTopic}
                     onChange = {this.onChangeresearchTopic}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Research Area</label>
                    <input type="text" className="form-control" id="research_area" placeholder="" readOnly
                    value={this.state.research_area}
                    onChange = {this.onChangeresearch_area}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">Description</label>
                    <textarea rows="4" cols="50" className="form-control" id="description" placeholder="" readOnly
                    value={this.state.description}
                    onChange = {this.onChangedescription}
                    />
                </div>

                

                <div>
                    <label htmlFor="">Approval Status</label><br></br>
                    <select className="form-control" id="approval" required  style={{height:"1cm"}}
                                value={this.state.approval}
                                onChange = {this.onChangeapproval}
                            >
                                <option>Select </option>
                                <option value="Approved">Approved</option>
                                <option value="Not-Approved">Not Approved</option>
                                
                            </select>
                        </div>

                    
                    
                    <button type="submit" >Update</button>
                    <br/><br/>

                </form>

                
                

            </div>
            
        )
    }
}