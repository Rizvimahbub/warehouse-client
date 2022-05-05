import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BikeInfo.css';

const BikeInfo = () => {
    const { id } = useParams();
    const [bike, setBikes] = useState({});
    const [bikeQuantity, setBikeQuantity] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/bike/${id}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [id])

    const productReduceProcess = () => {
        let quantity = parseInt(bike.quantity);
        let newQuantity = quantity - 1;
        bike.quantity = newQuantity;
        setBikeQuantity(bike.quantity);


        fetch(`http://localhost:5000/bike/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        }, [])
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='row w-100 bikeInfo'>
            <div className='col-md-6 col-sm-12'>
                <img className='w-100' src={bike.img} />
            </div>
            <div className='col-md-6 col-sm-12 d-flex justify-content-center align-items-center'>
                <div className='w-75 border border-danger'>
                    <h1>{bike.name}</h1>
                    <h3>Supplier : {bike.supplier}</h3>
                    <h4>Price : ${bike.price}</h4>
                    <h4>Quantity : {bike.quantity}</h4>
                    <h5><span className='fw-bold'>Specification :</span> {bike.description}</h5>
                    <button onClick={productReduceProcess}>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default BikeInfo;