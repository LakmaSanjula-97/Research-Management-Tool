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

                <div>
                    <br></br>
                    <h2 id="headertext-Sup">
                        Supervisor Details
                    </h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="Search by Supervisor Name" name="searchQuery" 
                    style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} 
                    value={this.state.searchId} 
                    onChange={this.searchSupervisorName.bind(this)} />
            
                </div>

                <div>
                    <a className="btn btn-warning" id="btn3" href="/dashboard/AddSupervisor" style={{width:'4cm'}}>
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add Supervisor
                    </a>
                </div>

                <div id="table1">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <br></br>
                                <span >

                                    <span id="text1">Supervisor Details</span><br></br>
                                    
                                </span>
                                
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Name</th>
                                <th style={{'textAlign':'center'}}>Email</th>
                                <th style={{'textAlign':'center'}}>Department</th>
                                <th style={{'textAlign':'center'}}>Research Area</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                                
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