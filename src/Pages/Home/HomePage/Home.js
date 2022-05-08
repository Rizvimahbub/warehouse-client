import React from 'react';
import './Home.css';
import Bike from '../../../Images/bike.png';
import Bikes from '../Bikes/Bikes';
import Services from '../Services/Services';
import Quote from '../Quote/Quote';
import Title from '../../CommonPages/Title/Title';


const Home = () => {
    
    
    return (
        <div id='#home'>
            <Title title='Home'></Title>
            <div className='w-100'>
                <img className='w-100' src={Bike}></img>
            </div>
            <Bikes></Bikes>
            <Services></Services>
            <Quote></Quote>
      
        </div>
    );
};

export default Home;