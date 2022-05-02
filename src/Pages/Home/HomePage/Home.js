import React from 'react';
import './Home.css';
import Bike from '../../../Images/bike.png';
import Bikes from '../Bikes/Bikes';

const Home = () => {
    return (
        <div>
            <div className='w-100'>
                <img className='w-100' src={Bike}></img>
            </div>
            <Bikes></Bikes>
        </div>
    );
};

export default Home;