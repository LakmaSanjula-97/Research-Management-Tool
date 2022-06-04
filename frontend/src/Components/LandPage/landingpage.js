import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Image1 from '../../Images/RMTll.jpg';
import Image2 from '../../Images/SLIIT_Logo_Crest.png';

import '../Home/home.css'


export default class LandingHome extends Component {

    render() {
        return (
            <div style={{marginTop:'2cm'}}>

            

            

            <section id='sec3'>
                <img src={Image1} className="image-banner" alt="Responsive image" />
            </section>

            <section id='ldsec5'>
                <div>
                    <h1 id='text-home1'>Welcome to</h1>
                </div>
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


            </div>
        );
    }
}