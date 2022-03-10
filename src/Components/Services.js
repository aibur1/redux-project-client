import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';



const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/purchases')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  
  return (
    <div className='container '>
      <h2 className='text-center py-5'>Our services</h2>

      <Row xs={1}  md={3} className="g-4">

        {
          services?.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }

      </Row>


    </div>
  );
};

export default Services;