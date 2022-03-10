import React from 'react';
import photography from './Photography.css';
import drone1 from './../images/flying-drone.jpg';
import drone2 from './../images/flying-drone-2.png';
import drone3 from './../images/half-drone.jpg';
import { Button } from 'bootstrap';

const Photography = () => {
    return (
        <div className='' >
            <div className='row' >

                <div className='col-md-4' >
                    < img src={drone1} />
                </div>
                <div className='col-md-6  photography  ' >
                    <h4>AERIAL PHOTOGRAPHY</h4>
                    <h1>Capture Events From A <br /> New Perspective</h1>
                    <p className='drone_desc'>Whatever the length of the occasion, whether it be for an hour, a day, a weekend or longer, we conduct thorough flight plans and assessments to ensure your event is filmed in a way that provides stunning HD aerial images, whilst being tailored to your precise requirements and always with safety regulations.</p>


                    <button className='drone_btn btn-animated '><span className='btn text-white'>CONTACT US</span></button>
                </div>
                <div className='col-md-2 pt-5' >
                    < img className='drone_img ' src={drone2} />
                </div>

            </div>

        </div>
    );
};

export default Photography;