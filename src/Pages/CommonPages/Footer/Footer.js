import { faArrowRight, faArrowUp, faCopyright, faEnvelopesBulk, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footer'>
            <div className='footer-container mx-auto py-5 text-white'>
                <div className='ps-3'>
                    <h4 className='mb-4'>BIKESCAPE</h4>
                    <p className='w-75'>Bikescape offers a host of logistic management services and supply chain & provide innovative solutions with the best.</p>
                </div>
                <div className='ps-3'>
                    <h5>USEFUL LINKS</h5>
                    <h6 className='links'><FontAwesomeIcon icon={faArrowRight} /> Home</h6>
                    <h6 className='links'><FontAwesomeIcon icon={faArrowRight} /> About Us</h6>
                    <h6 className='links'><FontAwesomeIcon icon={faArrowRight} /> Service</h6>
                    <h6 className='links'><FontAwesomeIcon icon={faArrowRight} /> Contact</h6>
                </div>
                <div className='ps-3'>
                    <h5>CONTACT US</h5>
                    <h6 className='my-3'><FontAwesomeIcon icon={faLocationDot} /> Road : 24, House : 45, Block : F, Banani, Dhaka</h6>
                    <h6 className='my-3'><FontAwesomeIcon icon={faPhone} /> 01711111111</h6>
                    <h6 className='my-3'><FontAwesomeIcon icon={faEnvelopesBulk} /> Bikescape@gmail.com</h6>
                </div>
            </div>
            <div className='footer-line mx-auto mb-3'></div>
            <h6 className='copy text-white text-center'><FontAwesomeIcon icon={faCopyright} /> Copyrights {year} Bikers Heaven.All rights reserved. </h6>
            <div>
                <a className='d-block text-end pe-3' href='/home'><FontAwesomeIcon className='arrow border' icon={faArrowUp} /></a>
            </div>

        </div>
    );
};

export default Footer;