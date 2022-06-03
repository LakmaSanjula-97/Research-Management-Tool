import React, {Component} from 'react';
import axios from 'axios';

import '../SupervisorDetails/supervisor.css'

export default class ViewCoSupRequest extends Component {

    constructor(props){
        super(props);
        this.state = {supervisors: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/coSupRequset/').then(response=>{
            this.setState({supervisors: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/coSupRequset/').then(response =>{
            this.setState({supervisors:response.data})
        }).catch(function (error){
            console.log(error);
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
        
        let filtergroupId = this.state.supervisors.filter((
            p)=>{
                return p.groupId.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div>

                <div id="topic">
                    <h2>Dashboard - Co-Supervisor Approval</h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="search by supervisor name" name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} value={this.state.searchId} onChange={this.searchSupervisorName.bind(this)} />
            
                </div>

               
                <div id="table1">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Approval</span>

                                                          

                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Co-Supervisor Name</th>
                                <th style={{'textAlign':'center'}}>Group Id</th>
                                <th style={{'textAlign':'center'}}>Supervisor Name</th>
                       
                                <th style={{'textAlign':'center'}}>Approval Status</th>
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filtergroupId.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.Cosupervisor_name}</td>
                                    <td>{p.groupId}</td>
                                    <td>{p.supervisor_name}</td>
                                    
                                    <td>{p.approval}</td>
                                    

                                    

                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}