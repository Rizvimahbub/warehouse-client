import React from 'react';
import Dead from './NotFound.png';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1>Oops !!! Not Found</h1>
            <img className='w-50' src={Dead}/>
        </div>
    );
};

export default NotFound;