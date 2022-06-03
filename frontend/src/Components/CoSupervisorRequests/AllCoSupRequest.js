// import React, {Component} from 'react';
// import axios from 'axios';



// export default class allCoSupRequest extends Component {

//     constructor(props){
//         super(props);
//         this.state = {coSupRequest: [], searchId:''};
 
//     }

//     //auto refreh the code
//     componentDidMount(){
//         axios.get('http://localhost:8070/coSupRequset/').then(response=>{
//             this.setState({coSupRequest: response.data})
//         }).catch(function (error){
//             console.log(error);
//         })
//     }

//     // update code
//     componentDidUpdate(){
//         axios.get('http://localhost:8070/coSupRequset/').then(response =>{
//             this.setState({coSupRequest:response.data})
//         }).catch(function (error){
//             console.log(error);
//         })
//     }

//     // delete 
//     deleteCoSupervisor=(id)=>{
//         axios.delete(`http://localhost:8070/coSupRequset/delete/${id}`).then((res) =>{
            
//                 //alert("Delete Successfully");

//                 window.confirm("Do you need to delete! ?");
                
//             })
        
//     }


//     addJourney(){
//         this.props.history.push('/dashboard/addJourney');
//     }

//     searchCoSupervisorName(event){
//         this.setState({ searchId: event.target.value.substr(0,
//             20)});
//     }


    

//     render(){
        
//         let filterCosupervisor_name = this.state.coSupRequest.filter((
//             p)=>{
//                 return p.Cosupervisor_name.indexOf(this.state.
//                     searchId)!==-1;
//             }
//         );


//         return (
//             <div>

//                 <div id="topic">
//                     <h2>Dashboard - Manage Co-Supervisor Requests </h2>
//                     <hr id="hr"></hr>
//                 </div>

                
//                 <div>

//                     <input className="form-control" type = "search" placeholder="search by Co-Supervisor Name" name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} value={this.state.searchId} onChange={this.searchCoSupervisorName.bind(this)} />
            
//                 </div>

                

//                 <div id="table1">

//                     <table id="journey_table" style={{textAlign:'center'}}>
//                         <thead>

//                             <tr style={{'textAlign':'left'}}>
//                                 <span >

//                                     <span id="text1">Co-Supervisor Requests</span>

                                                             

//                                 </span>
//                             </tr>

//                             <tr>

//                                 <th style={{'textAlign':'center'}}>Co-Supervisor Name</th>
//                                 <th style={{'textAlign':'center'}}>Group Id</th>
//                                 <th style={{'textAlign':'center'}}>Supervisor Name</th>
//                                 <th style={{'textAlign':'center'}}>Research Topic</th>
//                                 <th style={{'textAlign':'center'}}>Research Area</th>
//                                 <th style={{'textAlign':'center'}}>Description</th>
//                                 <th style={{'textAlign':'center'}}>Approval Status</th>
                                
//                             </tr>

//                         </thead>
                        
//                         <tbody>

//                             {filterCosupervisor_name.map((p, index)=>{
//                                 return <tr key={index}>
                                     
//                                     <td>{p.Cosupervisor_name}</td>
//                                     <td>{p.groupId}</td>
//                                     <td>{p.supervisor_name}</td>
//                                     <td>{p.researchTopic}</td>
//                                     <td>{p.research_area}</td>
//                                     <td>{p.description}</td>
//                                     <td>{p.researchTopic}</td>
//                                     <td>{p.approval}</td>
                                    

//                                     <td>
//                                         <a className="btn btn-warning" id="btn1" href={`/dashboard/EditCoSupervisor/${p._id}`}>
//                                             <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
//                                         </a>
                                      
                                    
//                                         <a className="btn btn-danger" id="btn2" onClick={() => this.deleteCoSupervisor(p._id)}>
//                                             <i class="fa fa-trash blackiconcolor" aria-hidden="true"></i>&nbsp;&nbsp;Delete&nbsp;
//                                         </a>
//                                     </td>


//                                 </tr>
//                             })}
                            
//                         </tbody> 

                        

//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }




import React, {Component} from 'react';
import axios from 'axios';

import '../SupervisorDetails/supervisor.css'

export default class ViewSupervisorApproval extends Component {

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

    // delete 
    deleteCoSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/coSupRequset/delete/${id}`).then((res) =>{
            
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
        
        let filtersupervisor_name = this.state.supervisors.filter((
            p)=>{
                return p.supervisor_name.indexOf(this.state.
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
                                <th style={{'textAlign':'center'}}>Research Topic</th>
                                <th style={{'textAlign':'center'}}>Research Area</th>
                                <th style={{'textAlign':'center'}}>Description</th>
                                <th style={{'textAlign':'center'}}>Approval Status</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filtersupervisor_name.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.Cosupervisor_name}</td>
                                    <td>{p.groupId}</td>
                                    <td>{p.supervisor_name}</td>
                                    <td>{p.researchTopic}</td>
                                    <td>{p.research_area}</td>
                                    <td>{p.description}</td>
                                    <td>{p.approval}</td>
                                    

                                    <td>
                                        <a className="btn btn-warning" id="btn1" href={`/dashboard/EditCoSupervisor/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>

                                        <a className="btn btn-danger" id="btn2" onClick={() => this.deleteCoSupervisor(p._id)}>
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