import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../authentification.init';
import Title from '../../CommonPages/Title/Title';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const email = user.email;
    useEffect(() => {
        try {
            fetch(`http://localhost:5000/orders?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            })
                .then(res => res.json())
                .then(data => setProducts(data))
        }
        catch(error){
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
            }
        }
    }, [email])



    const removeProcess = id => {
        const alert = window.confirm('Are you sure you want to delete?');
        if (alert) {
            fetch(`http://localhost:5000/orders/${id}`, {
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


    return (
        <div>
            <div>
                <Title title='Orders'></Title>
            </div>
            <div className='inventory-cards m-5'>

                {
                    products.map(product =>
                        <div className='card-item mb-5 mx-auto'>
                            <div>
                                <img className='w-100 ' src={product.url} />
                            </div>
                            <div className='p-3 my-auto'>
                                <h2>{product.name}</h2>
                                <h4>{product.supplier}</h4>
                                <h4>Quantity : {product.quantity}</h4>
                                <p className='mb-3'><h6>Specification : </h6>{product.description}</p>
                                <button onClick={() => removeProcess(product._id)} className='item-btn me-2'>Remove</button>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Orders;