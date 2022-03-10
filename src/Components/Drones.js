import React from 'react';
import drone from './../images/ar-drone.jpg';

const Drones = () => {
    return (
        <div className='py-5'>
            <div className='d-flex' >
                <div className='col-md-5'>
                    < img className='img-fluid' src={drone} />
                </div>
                <div className='col-md-7 px-4'>
                    <h1>AR Drone</h1>
                    <p>Provides you the latest features drone for capturing most excitind images and videos.We have a dynamic collection of modern drone that you can either be pre-programmed or be remotely controlled by a pilot. Our drone are guided by in-build GPS systems or the pilot controlling them. <br /> <strong className='fs-5'>What are our common drone features and components?</strong>
                        <li className='fst-italic'>Electronic speed controllers, which control a motor's speed and directons.</li>
                        <li className='fst-italic'>Flight controller</li>
                        <li className='fst-italic' >GPS module</li>
                        <li className='fst-italic'>Battery</li>
                        <li className='fst-italic'> Antena</li>
                        <li className='fst-italic'>Receiver</li>
                        <li className='fst-italic'>Cameras</li>
                        <li className='fst-italic'>Sensors,including ultrasonic sensors and collison avoidance sensors</li>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Drones;