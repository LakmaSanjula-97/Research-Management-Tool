import React, {Component} from 'react';
import axios from 'axios';

import './cosupervisor.css'

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
                    <br></br>
                    <p id='topic-cosup'>Co-Supervisor Request Approval Status</p>
                   
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="Search by Gropu Id" name="searchQuery" 
                        style={{width:"10cm",height:'1cm', marginLeft:"27cm", marginTop:"1cm", borderRadius:"9px"}} 
                        value={this.state.searchId} 
                        onChange={this.searchSupervisorName.bind(this)} 
                    />
            
                </div>
                <br></br>
               
                <div id="table1CoSup">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>


                            <tr>

                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Co-Supervisor Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Group Id</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Supervisor Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Approval Status</th>
                                
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