import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    
    const { _id, img, price, name, desc } = service;
    
    
    
    return (
        <div>
            <div>
            <Col>
                <Card className="">

                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h3>${price}</h3>
                        <h6>{desc}</h6>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            </div>
        </div>
    );
};

export default Service;