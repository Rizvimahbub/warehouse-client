import React, { useEffect, useState } from 'react';
import './InventoryItems.css';

const InventoryItems = ({product}) => {
    const {_id, name, url, description, quantity, price, supplier} = product;
    const [bikeQuantity, setBikeQuantity] = useState(0);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    const removeProcess = id => {
        const alert = window.confirm('Are you sure you want to delete?');
        if (alert) {
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const rest = products.filter(product => product._id !== id)
                        setProducts(rest);
                    }

                })
        }
    }

    const button = _id => {
        const id = product._id;
        const name = product.name;
        const url = product.url;
        const description = product.description;
        const newQuantity = bikeQuantity + 1;
        setBikeQuantity(newQuantity);
        const quantity = newQuantity;
        const supplier = product.supplier;
        const props = {id,name,url,description,quantity,supplier}

        fetch(`http://localhost:5000/orders/${_id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(props)
        })
        .then(res=>res.json())
        .then(data=> console.log(data))
    }
  
    return (
        <div className='card-item mb-5 mx-auto'>
            <div>
                <img className='w-100 ' src={url}/>
            </div>
            <div className='p-3 my-auto'>
                <h2>{name}</h2>
                <h4>{supplier}</h4>
                <h4>Price : ${price}</h4>
                <p className='mb-3'><h4>Specification : </h4>{description}</p>
                <button onClick={() => button(product._id)} className='item-btn me-2'>Order</button>
                <button onClick={() => removeProcess(product._id)} className='item-btn me-2'>Remove</button>
            </div>
        </div>
    );
};

export default InventoryItems;