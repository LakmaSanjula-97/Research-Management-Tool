import React, {Component} from 'react';
import axios from 'axios';


export default class FinalizedresearchTopic extends Component {

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
            <div style={{marginTop:'2cm'}}>

            <div id='st-sec10'>
                <div class="topnav1" >
                    
                    <a href="/studentHome/FinalResearchTopic" style={{float:"right", marginTop:'0.5cm'}}>Topic Submitted Groups</a>
                    <a href="/studentHome/AddResearchTopic" style={{float:"right", marginTop:'0.5cm'}}>Submit Research Topics</a>
                    
             
                </div>
            </div>

                <div id="topic" >
                    
                    <h2 id='topic-sup' style={{marginLeft:"4cm"}}>Research Topic Submitted Groups</h2>
                    
                </div>

                <div>

                    <input className="form-control" type = "search" 
                    placeholder="Search by Group Id" name="searchQuery" 
                    style={{width:"8cm", marginLeft:"29.5cm", marginTop:"1cm", borderRadius:"9px"}} 
                    value={this.state.searchId} 
                    onChange={this.searchGroupId.bind(this)} />
            
                </div>

                

                <div id="table1Sup" >

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            

                            <tr>

                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Group Id</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Supervisor Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Co-Supervisor Name</th>
                               

                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filtergroupId.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.groupId}</td>
                                    <td>{p.supervisor_name}</td>
                                    <td>{p.co_supervisor_name}</td>
                                    
                                    
                                    


                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}