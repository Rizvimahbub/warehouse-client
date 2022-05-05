import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Bike.css'

const Bike = ({ bike }) => {
    
    const { _id, name, img, price, quantity, description, supplier } = bike;
    const navigate = useNavigate();

    const inventoryIdProcess = id => {
        navigate(`/bike/${id}`)
    }

    return (
        <div className='cart'>
            <div>
                <Card className='card'>
                    <Card.Img className='card-img' variant="top" src={img} />
                    <Card.Body>
                        <h2>{name}</h2>
                        <h4>{supplier}</h4>
                        <h5>Price : ${price}</h5>
                        <Card.Text>{description}</Card.Text>
                        <button onClick={() => inventoryIdProcess(_id)}>Stock Update</button>
                    </Card.Body>
                        
                </Card>
            </div>


        </div>
    );
};

export default Bike;