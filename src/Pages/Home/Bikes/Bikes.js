import React from 'react';
import './Bikes.css';
import { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import { CardGroup } from 'react-bootstrap';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <div id='bikes' className='my-5'>
            <div className='my-5 w-75 mx-auto d-flex justify-content-around align-items-center'>
                <h1 className='text-start  title'>Bikes</h1>
                <div className='title-line w-75'></div>
            </div>
            <CardGroup>
                <div className='container my-5'>
                    {
                        bikes.map(bike => <Bike
                            key={bike.id}
                            bike={bike}
                        ></Bike>)
                    }
                </div>
            </CardGroup>


        </div>
    );
};

export default Bikes;