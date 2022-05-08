import React, { useEffect, useState } from 'react';
import './ManageInventory.css';
import InventoryItems from '../Home/InventoryItems/InventoryItems';
import Title from '../CommonPages/Title/Title';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-gorge-58416.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => {setProducts(data)})
    }, [products])

    

    return (
        <div className='inventory-section'>
            <Title title='Manage Inventory'></Title>
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