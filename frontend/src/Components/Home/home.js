import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Image1 from '../../Images/RMT3.jpg';
import Image2 from '../../Images/SLIIT_Logo_Crest.png';

import './home.css'


export default class Home extends Component {

    render() {
        return (
            <div>

            <section>
                <nav class="navbar navbar-default" id='sec1'>
                    <div class="container-fluid">
                        <div class="navbar-header">
                            {/* <div class="navbar-brand">
                                <img src={Image1} className="home-image1" />
                            </div> */}
                            
                            <div>
                                <span className='home-text1'>RRESEARCH MANAGEMENT TOOL</span>

                                <div id='login'>
                                <div id='btnlg1'>
                                    <Link className="Register-btn"  to="/register"> Register</Link>
                                </div>

                                <div id='btnlg2'>
                                    <Link className="login-btn" to="/login">Login</Link>
                                </div>
                            </div>
                            </div>

                            
      
                        </div>
                    </div>
                </nav>
            </section>

            <section id='sec4'>
                <div class="topnav">
                    <a class="active" href="#home">Home</a>
                    <a href="/studentHome/LandingHome" style={{float:"right"}}>Students</a>
                    <a href="#contact" style={{float:"right"}}>Contact Us</a>
                    <a href="#about" style={{float:"right"}}>About Us</a>
                </div>
            </section>

            <section id='sec3'>
                <img src={Image1} className="image-banner" alt="Responsive image" />
            </section>

            <section id='sec5'>
                <div>
                    <h1 id='text-home1'>Research Planner -2022</h1>
                </div>

                <div>
                    <h1 id='text-home1'>SLIIT</h1>
                </div>
                
            </section>

            <section id='sec6'>
                <img src={Image2} className="imageH1" alt="Responsive image" />
            </section>

            <section id='sec7'>
               <div id='homedes'>
                   "&nbsp;&nbsp;‘SLIIT Research Planner’ is a web application which manage the 
                   Research project and automating certain tasks. In order to promote the collaborative 
                   research culture, SLIIT staff is invited to carry out research and development 
                   activities as small teams comprising one or more senior staff member, junior 
                   staff members, full or part time research assistants and students. Some groups 
                   also invite external parties to collaborate to carry out activities of research 
                   groups by funding fully or partially as well as contributing to their expertise 
                   in the respective area. "
               </div>
            </section>

<br></br><br></br>

            </div>
        );
    }
}