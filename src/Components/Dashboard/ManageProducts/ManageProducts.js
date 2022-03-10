import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Card, Col } from 'react-bootstrap';

const ManageProducts = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/purchases')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/purchases/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = offers.filter(offer => offer._id !== id);
                        setOffers(remaining);
                    }

                })
        }
    }


    return (
        <div className="text-center my-5">
            <h2>Hello from manage product</h2>
            {
                offers.map(offer => <div key={offer._id}>
                    {/* <h3>{offer.name}</h3>
                    <h4>{offer.price}</h4>
                    <button onClick={() => handleDelete(offer._id)}>Delete</button>
                    <Link to={`/offers/update/${offer._id}`}><button>Update</button></Link> */}




                    <Row xs={1} md={3} className="g-4 ">

                        <Col>
                            <Card className="">
                                <Card.Img variant="top" src={offer.img} />
                                <Card.Body>
                                    <Card.Title> {offer.name}</Card.Title>
                                    <h4>${offer.price}</h4>
                                    <h6>{offer.description}</h6>
                                    <button onClick={() => handleDelete(offer._id)}>Delete</button>
                                    {/* <Link to={`/purchases/update/${offer._id}`}><button>Update</button></Link> */}

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>



                </div>)
            }


        </div>
    );
};

export default ManageProducts;