import React from 'react';
import team from './Team.css';
import img1 from './../images/Team-image/1.jpg';
import img2 from './../images/Team-image/2.jpg';
import img3 from './../images/Team-image/3.jpg';
import { Card } from 'react-bootstrap';


const Team = () => {
    return (
        <div className='py-5'>
            <div>
                <h4 className='text-center'>- AR Drone -</h4>
                <h1 className='text-center pb-5'>Our Dedicate Team To < br /> Touch With You 24/7</h1>
            </div>
            <div>
                <div className='d-flex py-5'>
                    <div className='col-md-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Stephen Humbert</Card.Title>
                                <Card.Text>
                                    Facebook - Twitter - Linked
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>John Casey</Card.Title>
                                <Card.Text>
                                    Facebook - Twitter - Linked
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Martin Gomez</Card.Title>
                                <Card.Text>
                                    Facebook - Twitter - Linked
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;