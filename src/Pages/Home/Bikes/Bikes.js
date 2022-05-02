import React from 'react';
import './Bikes.css';
import Bike2 from '../../../Images/bike2.png';
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
            <div>
                <h1 className='text-center title'>Bikes</h1>
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