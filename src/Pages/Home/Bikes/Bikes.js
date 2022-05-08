import React from 'react';
import './Bikes.css';
import { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import { CardGroup } from 'react-bootstrap';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-gorge-58416.herokuapp.com/bike')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <div id='bikes' className='my-5'>
            <div className='my-5 w-75 mx-auto'>
                <h1 className='text-center  title'>Bikes</h1>
                <div className='title-line mx-auto'></div>
            </div>
            <CardGroup>
                <div className='container my-5'>
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>)
                    }
                </div>
            </CardGroup>


        </div>
    );
};

export default Bikes;