import React from 'react';
import './Services.css'
import { faBoxArchive, faHouseChimney, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    return (
        <div id='services'>
            <div className='mt-5 mb-3 w-75 mx-auto'>
                <h1 className='text-center  title'>Services</h1>
                <div className='title-line mx-auto'></div>
            </div>
            <div className='service-container border py-5 w-75 mx-auto'>
                <div className='d-flex justify-content-evenly align-items-center m-4 box'>
                    <div>
                        <FontAwesomeIcon className='fs-1 pb-3 ps-3 icon' icon={faBoxArchive} />
                    </div>
                    <div className=' p-3'>
                        <h6 className='fw-bolder'>WAREHOUSING</h6>
                        <p className='w-100'>We have top notch security and loads of space. Store your stuff at our warehouse.</p>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly align-items-center m-4 box'>
                    <div>
                        <FontAwesomeIcon className='fs-1 pb-3 ps-3 icon' icon={faTruck} />
                    </div>
                    <div className=' p-3'>
                        <h6 className='fw-bolder'>CARGO</h6>
                        <p className='w-100'>Let us transport your things from point A to point B fast and securely.</p>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly align-items-center m-4 box'>
                    <div>
                        <FontAwesomeIcon className='fs-1 pb-3 ps-3 icon' icon={faHouseChimney} />
                    </div>
                    <div className=' p-3'>
                        <h6 className='fw-bolder'>DOOR-TO-DOOR DELIVERY</h6>
                        <p className='w-100'>Do you need something delivered? We are what you are looking for!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;