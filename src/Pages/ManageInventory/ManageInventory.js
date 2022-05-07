import React, { useEffect, useState } from 'react';
import './ManageInventory.css';
import { CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import InventoryItems from '../Home/InventoryItems/InventoryItems';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => {setProducts(data)})
    }, [products])

    return (
        <div className='inventory-section'>
            <h1 className='inventory-title text-center mb-5'>Bikes</h1>
            <div className='inventory-cards m-5'>
                {
                    products.map(product => <InventoryItems
                        key={product._id}
                        product={product}
                    ></InventoryItems>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;