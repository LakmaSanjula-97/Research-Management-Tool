import React, {Component} from 'react';
import axios from 'axios';



export default class StudentViewPanelMember extends Component {

    constructor(props){
        super(props);
        this.state = {supervisors: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/panelMembers/').then(response=>{
            this.setState({supervisors: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/panelMembers/').then(response =>{
            this.setState({supervisors:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/panelMembers/delete/${id}`).then((res) =>{
            
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
        
        let filterGroup_Id = this.state.supervisors.filter((
            p)=>{
                return p.Group_Id.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div style={{marginTop:'2cm'}}>
                
                <br></br>
                <div id="topic">
                    <h2 id='topic-sup'>Panel Member Details</h2>
                    
                </div>

                
                <div>

                    <input className="form-control" type = "search" 
                    placeholder="search by group id" name="searchQuery" 
                    style={{width:"10cm",height:'1cm', marginLeft:"27cm", marginTop:"1cm", borderRadius:"9px"}}  
                    value={this.state.searchId} onChange={this.searchSupervisorName.bind(this)} />
            
                </div>

               
                <div id="table1Sup">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            
                            <tr>

                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Group Id</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Panel Member 1</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Panel Member 2</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Panel Member 3</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Panel Member 4</th>
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filterGroup_Id.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.Group_Id}</td>
                                    <td>{p.panelmember1}</td>
                                    <td>{p.panelmember2}</td>
                                    <td>{p.panelmember3}</td>
                                    <td>{p.panelmember4}</td>
                                    

                                   


                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}