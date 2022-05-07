import React from 'react';
import { Spinner } from 'react-bootstrap';





const Spinners = () => {
    return (
        <div style={{ height: '90vh' }} className='w-100 d-flex justify-content-center align-items-center'>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
        </div>

    );
};

export default Spinners;