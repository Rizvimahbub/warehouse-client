import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Bike.css'

const Bike = ({ bike }) => {
    const { name, img, price, quantity, description, supplier } = bike;
    return (
        <div className='cart'>
            <div>
                <Card>
                    <Card.Img className='card-img' variant="top" src={img} />
                    <Card.Body>
                        <h2>{name}</h2>
                        <h4>{supplier}</h4>
                        <h5>Price : ${price}</h5>
                        <Card.Text>{description}</Card.Text>
                        <button>Stock Update</button>
                    </Card.Body>
                        
                </Card>
            </div>


        </div>
    );
};

export default Bike;