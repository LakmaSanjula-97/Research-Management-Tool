

import React, {Component} from 'react';
import axios from 'axios';



export default class ViewSupervisorRequest extends Component {

    constructor(props){
        super(props);
        this.state = {supervisors: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/requestSupervisor/').then(response=>{
            this.setState({supervisors: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/requestSupervisor/').then(response =>{
            this.setState({supervisors:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/requestSupervisor/delete/${id}`).then((res) =>{
            
                //alert("Delete Successfully");

                window.confirm("Do you need to delete! ?");
                
            })
        
    }


    addJourney(){
        this.props.history.push('/admin/SupervisorView');
    }

    searchSupervisorName(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }


    

    render(){
        
        let filterGroupLeader = this.state.supervisors.filter((
            p)=>{
                return p.supervisor_name.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div style={{marginTop:'2cm'}}>

                <div id='st-sec10'>
                    <div class="topnav1" >
                        
                        <a href="/studentHome/ViewCoSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Approval Status Co-Supervisor</a>
                        <a href="/studentHome/ViewSupervisorRequest" style={{float:"right", marginTop:'0.5cm'}}>Approval Status Supervisor</a>
                        <a href="/studentHome/AddCoSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Request Co-Supervisor</a>
                        <a href="/studentHome/AddRequestSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Request Supervisor</a>
                        <a href="/studentHome/ViewSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Supervisor Details</a>
                        
                
                    </div>
                </div>

                <div id="topic" >
                    
                    <h2 id='topic-sup'>Supervisor Request Approval</h2>
                    
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="search by GroupLeader" name="searchQuery" 
                    style={{width:"10cm",height:'1cm', marginLeft:"27cm", marginTop:"1cm", borderRadius:"9px"}} 
                    value={this.state.searchId} 
                    onChange={this.searchSupervisorName.bind(this)} />
            
                </div>

               
                <div id="table1Sup">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            

                            <tr>

                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Research Topic</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Research Area</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Supervisor Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Group Leader</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Leader ITnumber</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Request Message</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Approval</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Ststus</th>
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filterGroupLeader.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.researchTopic}</td>
                                    <td>{p.research_area}</td>
                                    <td>{p.supervisor_name}</td>
                                    <td>{p.GroupLeader}</td>
                                    <td>{p.GroupLeaderITnumber}</td>
                                    <td>{p.Requestmessage}</td>
                                    <td>{p.approval}</td>
                                    

                                    <td>
                                        
                                      
                                    
                                        <a className="btn btn-danger" id="btn10" onClick={() => this.deleteSupervisor(p._id)}>
                                            <i class="fa fa-trash blackiconcolor" aria-hidden="true"></i>&nbsp;&nbsp;Delete&nbsp;
                                        </a>
                                    </td>


                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}