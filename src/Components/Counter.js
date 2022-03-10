import React from 'react';
import counter from './Counter.css';
import img from './../images/counter_background.jpg';

const Counter = () => {
    return (
        <div className='counter row' >
            <div className='counter_heading2' >
                <h1 className='text-white counter_heading'>Our Experience & Measures</h1>
                <p className='text-white counter_text'>If you want a drone for shooting 4K videos of your concerts,< br />
                    events or music videos the next one is< br />
                    perfectly built just for you.</p>
            </div>

            <div className='row experience text-white pt-4 ' >
                <div className='col-md-3' >

                    <i class="fas fa-camera"></i>
                    <h1 className='py-3' >80</h1>
                    <h5 className='pb-3'>SATISFIED CLIENTS</h5>
                    <h6 className='experience_desc' >A drone is an unmanned aerial < br/> vehicle (UAV) that is fitted with < br/> various equipment and tools.</h6>
                </div>
                <div className='col-md-3' >
                    <i class="fas fa-camera"></i>
                    <h1 className='py-3'>65</h1>
                    <h5 className='pb-3'>PROJECTS DONE</h5>
                    <h6>These devices can hover and < br/> maneuver above your event < br/> capturing images and video.</h6>
                </div>
                <div className='col-md-3' >
                    <i class="fas fa-camera"></i>
                    <h1 className='py-3'>180</h1>
                    <h5 className='pb-3'>COMPLETE PACKAGE</h5>
                    <h6>Maybe your event includes music < br/> that you want recorded, rather < br/> than unsteady photos or video.</h6>
                </div>
                <div className='col-md-3' >
                    <i class="fas fa-camera"></i>

                    <h1 className='py-3'>18</h1>
                    <h5 className='pb-3'>GREAT AWARDS</h5>
                    <h6>Our drone event services provide < br/> you with a skilled UAV pilot that < br/> will provide drone photography.</h6>
                </div>
            </div>

        </div>

    );
};

export default Counter;