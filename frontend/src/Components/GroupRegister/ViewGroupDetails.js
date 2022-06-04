import React, {Component} from 'react';
import axios from 'axios';



export default class ViewGroupDetails extends Component {

    constructor(props){
        super(props);
        this.state = {groupdetail: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/groupdetail/').then(response=>{
            this.setState({groupdetail: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/groupdetail/').then(response =>{
            this.setState({groupdetail:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/groupdetail/delete/${id}`).then((res) =>{
            
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
        
        let filtermember1Name = this.state.groupdetail.filter((
            p)=>{
                return p.member1Name.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div style={{marginTop:'2cm'}}>

            <div id='st-sec10'>
                <div class="topnav1" >
                    
                    <a href="/studentHome/ViewGroupDetails" style={{float:"right", marginTop:'0.5cm'}}>Reserch Groups</a>
                    <a href="/studentHome/AddGroups" style={{float:"right", marginTop:'0.5cm'}}>Research Group Registration</a>
             
                </div>
            </div>

                <div id="topic" >
                    
                    <h2 id='topic-sup'>Research Group Details</h2>
                    
                </div>

                
                <div>


                    <input className="form-control" type = "search" placeholder="search by passenger id" name="searchQuery" 
                    style={{width:"10cm",height:'1cm', marginLeft:"27cm", marginTop:"1cm", borderRadius:"9px"}} 
                    value={this.state.searchId} onChange={this.searchSupervisorName.bind(this)} />

            
                </div>

                

                <div id="table1Sup" >

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">GroupDetails</span>

                                         <br></br>                 

                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Leader Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Leader IT No</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Member2 Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Member2 IT No</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Member3 Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Member3 IT No</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Member4 Name</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Member4 IT No</th>
                                <th style={{'textAlign':'center', 'backgroundColor':'#051931',color:'white'}}>Group ID</th>
                                
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filtermember1Name.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.member1Name}</td>
                                    <td>{p.member1ITnumber}</td>
                                    <td>{p.member2Name}</td>
                                    <td>{p.member2ITnumber}</td>
                                    <td>{p.member3Name}</td>
                                    <td>{p.member3ITnumber}</td>
                                    <td>{p.member4Name}</td>
                                    <td>{p.member4ITnumber}</td>
                                    <td>{p.GroupID}</td>


                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}