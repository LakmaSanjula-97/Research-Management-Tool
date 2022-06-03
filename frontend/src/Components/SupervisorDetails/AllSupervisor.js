import React, {Component} from 'react';
import axios from 'axios';



export default class allSupervisor extends Component {

    constructor(props){
        super(props);
        this.state = {supervisors: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/supervisor/').then(response=>{
            this.setState({supervisors: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/supervisor/').then(response =>{
            this.setState({supervisors:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/supervisor/delete/${id}`).then((res) =>{
            
                //alert("Delete Successfully");

                window.confirm("Do you need to delete! ?");
                
            })
        
    }


    addJourney(){
        this.props.history.push('/dashboard/addJourney');
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
                    <h2>Dashboard - View Request Supervisor</h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="search by passenger id" name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} value={this.state.searchId} onChange={this.searchSupervisorName.bind(this)} />
            
                </div>

                <div>
                    <a className="btn btn-warning" id="btn3" href="/dashboard/addJourney">
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Supervisor
                    </a>
                </div>

                <div id="table1">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Supervisor</span>


                                                             


                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Name</th>
                                <th style={{'textAlign':'center'}}>Email</th>
                                <th style={{'textAlign':'center'}}>Department</th>
                                <th style={{'textAlign':'center'}}>Research Area</th>
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filtersupervisor_name.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.supervisor_name}</td>
                                    <td>{p.supervisor_email}</td>
                                    <td>{p.supervisor_faculty}</td>
                                    <td>{p.supervisor_research_area}</td>
                                    

                                    <td>
                                        <a className="btn btn-warning" id="btn1" href={`/dashboard/EditSupervisor/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                      
                                    
                                        <a className="btn btn-danger" id="btn2" onClick={() => this.deleteSupervisor(p._id)}>
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