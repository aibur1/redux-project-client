import React from 'react';
import Drones from '../../Components/Drones';
import Gallery from '../../Components/Gallery';
import Specialization from '../../Components/Specialization';
import Team from '../../Components/Team';

const About = () => {
    return (
        <div className='container'>
            <Drones></Drones>
            <Specialization></Specialization>
            <Team></Team>
            <Gallery></Gallery>
            
        </div>
    );
};

export default About;