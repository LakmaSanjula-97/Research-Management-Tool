import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './studentNav.css'



export default class StudentNav extends Component {

    render() {
        return (
            <div>

            

            <section id='st-sec4'>
                <div class="topnav1" >
                    <a class="active" href="#">xxxxxxx-2022</a>
                    <a href="/studentHome/ViewSupervisor" style={{float:"right"}}>Supervisors</a>
                    <a href="#contact" style={{float:"right"}}>Contact Us</a>
                    <a href="#about" style={{float:"right"}}>About Us</a>
                </div>
            </section>

            


            </div>
        );
    }
}