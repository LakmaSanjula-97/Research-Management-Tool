import React, {Component} from 'react';
import axios from 'axios';


export default class allresearchTopic extends Component {

    constructor(props){
        super(props);
        this.state = {researchTopic: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/researchTopic/').then(response=>{
            this.setState({researchTopic: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/researchTopic/').then(response =>{
            this.setState({researchTopic:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteResearchTopic=(id)=>{
        axios.delete(`http://localhost:8070/researchTopic/delete/${id}`).then((res) =>{
            
                //alert("Delete Successfully");

                window.confirm("Do you need to delete! ?");
                
            })
        
    }


    addJourney(){
        this.props.history.push('/dashboard/AddResearchTopic');
    }

    searchGroupId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    // ViewRoom(id){
    //     this.props.history.push(`/SingleDetailedRoom/${id}`);
       
    // }
    

    render(){
        
        let filtergroupId = this.state.researchTopic.filter((
            p)=>{
                return p.groupId.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div>

                <div>
                    <br></br>
                    <h2 id="headertext-Sup" style={{marginLeft:'15cm'}}>
                        Finalized Research Topic Details
                    </h2>
                    <hr id="hr"></hr>
                </div>

                <div>

                    <input className="form-control" type = "search" 
                    placeholder="Search by Group Id" name="searchQuery" 
                    style={{width:"8cm", marginLeft:"29.5cm", marginTop:"1cm", borderRadius:"9px"}} 
                    value={this.state.searchId} 
                    onChange={this.searchGroupId.bind(this)} />
            
                </div>

                

                <div id="table1" >

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >
                                    <br></br>
                                    <span id="text1">ResearchTopics</span>

                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Research Title</th>
                                <th style={{'textAlign':'center'}}>Research Category</th>
                                <th style={{'textAlign':'center'}}>Research Area</th>
                                <th style={{'textAlign':'center'}}>Supervisor Name</th>
                                <th style={{'textAlign':'center'}}>Co-Supervisor Name</th>
                                <th style={{'textAlign':'center'}}>Group Id</th>
                                <th style={{'textAlign':'center'}}>View</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                                
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filtergroupId.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.researchTitle}</td>
                                    <td>{p.research_category}</td>
                                    <td>{p.research_area}</td>
                                    <td>{p.supervisor_name}</td>
                                    <td>{p.co_supervisor_name}</td>
                                    <td>{p.groupId}</td>
                                    
                                    <td>
                                        <a className="btn btn-warning" id="btn8" href={`/dashboard/DetailResearchTopic/${p._id}`}>
                                            <i class="fa fa-eye"></i>&nbsp;&nbsp;view 
                                        </a>
                                    </td>

                                    <td>
                                        <a className="btn btn-warning" id="btn6" href={`/dashboard/EditResearchTopic/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                      
                                    
                                        <a className="btn btn-danger" id="btn7" onClick={() => this.deleteResearchTopic(p._id)}>
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