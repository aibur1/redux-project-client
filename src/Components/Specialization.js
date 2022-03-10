import React from 'react';
import specialisation from './Specialization.css';
import drone from './../images/red-drone.png';


const Specialization = () => {
    return (
        <div className='my-5'>
            <div className='d-flex'>
                <div className='col-md-7' >
                    <h5 className='text-danger'> -About</h5>
                    <h1 className='fs-1 fw-bold'>Specializing in Drone < br /> Services</h1>
                    <p>There are many variations of drone available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
                    <div className='lh-lg fs-4 '>
                        <div>
                            <span><i class="fas fa-mobile-alt"></i></span>
                            <span className='fw-bold'>Mobile Device Supported</span>
                        </div>
                        <div>
                            <span><i class="fas fa-gamepad"></i></span>
                            <span className='fw-bold my-3'>Easy integrative control</span>
                        </div>
                        <div>
                            <span><i class="fas fa-gamepad"></i></span>
                            <span className='fw-bold'>Customized Commands</span>
                        </div>
                    </div>
                    <button className='bg-danger mt-3 p-2 w-25 text-white fs-5'>Read More</button>
                </div>
                <div className='col-md-5' >
                    < img src={drone} />
                </div>
            </div>
        </div>
    );
};

export default Specialization;