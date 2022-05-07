import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BikeInfo.css';

const BikeInfo = () => {
    const { id } = useParams();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const [bike, setBikes] = useState({});
    const [quantity, setQuantity] = useState();
    const [increaseQuantity, setIncreaseQuantity] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/bike/${id}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [id])

    const productReduceProcess = () => {
        const quantity = parseInt(bike.quantity);
        const newQuantity = quantity - 1;
        bike.quantity = newQuantity;
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
        }, [id])
            .then(res => res.json())
            .then(data => console.log(data))
    }



const navigateToInventory = () => {
    navigate('/inventory')
}


return (
    <div>
        <div className='input-container mt-2'>
            <input onBlur={inputProductQuantity} className='input-quantity mb-2 border rounded-3 p-2  border-3 me-1' type='number' name='name' placeholder='Add number'></input>
            <button onClick={productIncreaseProcess} className='increase-btn text-center' name='number' type='submit' >Add</button>
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
                    <button className='decrease-btn mb-2 me-2' onClick={productReduceProcess}>Deliver</button>
                    <button onClick={navigateToInventory} className='inventory-btn mb-2 me-2'>Inventory</button>
                </div>
            </div>
        </div>
    </div>

);
};

export default BikeInfo;