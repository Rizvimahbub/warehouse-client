import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BikeId = () => {
    const { id } = useParams();
    const [motorCycle, setMotorCycle] = useState({});
    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data =>console.log(data))
    },[id])

    return (
        <div>
            <div>
                <h1>{id}</h1>
            </div>
            <div></div>
        </div>
    );
};

export default BikeId;