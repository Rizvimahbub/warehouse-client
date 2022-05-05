import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BikeInfo.css';

const BikeInfo = () => {
    const { id } = useParams();
    const [bike, setBikes] = useState({});
    const [quantity, setQuantity] = useState();
    const [increaseQuantity, setIncreaseQuantity] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/bike/${id}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    const productReduceProcess = () => {
        setQuantity(bike.quantity--);


        fetch(`http://localhost:5000/bike/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bike)
        }, [])
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const inputProductQuantity = event => {
        setIncreaseQuantity(event.target.value);
    }


    const productIncreaseProcess = (event) => {
        event.preventDefault();
        bike.quantity = bike.quantity + parseInt(increaseQuantity);
        setQuantity(bike.quantity);


        fetch(`http://localhost:5000/bike/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bike)
        }, [])
            .then(res => res.json())
            .then(data => console.log(data))
    }

    

    return (
        <div>
            <div className='text-center mt-2'>
                <input onBlur={inputProductQuantity} className='mb-2 border rounded-3 p-2  border-3 w-25 me-1' type='number' name='name' placeholder='Add number'></input>
                <button onClick={productIncreaseProcess} className='delivered-btn text-center' name='number' type='submit' >Add</button>
            </div>
            <div className='row w-100 bikeInfo'>
                <div className='col-md-6 col-sm-12'>
                    <img className='w-100' src={bike.img} />
                </div>
                <div className='col-md-6 col-sm-12 d-flex justify-content-center align-items-center '>
                    <div className='mb-5 ps-2'>
                        <h1>{bike.name}</h1>
                        <h3>Supplier : {bike.supplier}</h3>
                        <h4>Price : ${bike.price}</h4>
                        <h4>Quantity : {bike.quantity}</h4>
                        <p><h5>Specification : </h5>{bike.description}</p>
                        <button className='add-btn mb-2 w-25' onClick={productReduceProcess}>Deliver</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BikeInfo;