import React, {Component} from 'react';
import axios from 'axios';



export default class ViewSupervisor extends Component {

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
                    <h2>Supervisor Details</h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="search by passenger id" name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} value={this.state.searchId} onChange={this.searchSupervisorName.bind(this)} />
            
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
                                    
                                </tr>
                            })}
                            
                        </tbody> 

                    </table>
                </div>
            </div>
        );
    }
}