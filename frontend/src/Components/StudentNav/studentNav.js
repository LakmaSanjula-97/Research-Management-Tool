import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './studentNav.css'
import LOGO from '../../Images/RMTlogo.png'


export default class StudentNav extends Component {

    render() {
        return (
            <div>

            

            <section id='st-sec4'>
                <div class="topnav1" >
                    <a href="#"><img src={LOGO} id="Logo1"/></a>
                    <a href="/studentHome/ViewSupervisor" style={{float:"right", marginTop:'0.5cm'}}>Supervisors</a>
                    <a href="/studentHome/AddCoSupervisor" style={{float:"right", marginTop:'0.5cm'}}>CoSupervisor Requests</a>
                    <a href="#about" style={{float:"right", marginTop:'0.5cm'}}>About Us</a>
                </div>
            </section>

            


            </div>
        );
    }
}