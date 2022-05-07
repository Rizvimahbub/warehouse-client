import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quote.css';


const Quote = () => {

    const navigate = useNavigate();    

    const navigateToInventory = () => {
        navigate('/inventory')
    }

    return (
        <div>
            <div className='my-5 w-75 mx-auto'>
                <h1 className='text-center  title'>Quote</h1>
                <div className='title-line mx-auto'></div>
            </div>
            <div className='quote'>
                <div className='quote-container mx-auto text-center py-5'>
                    <h5 className='mb-3 quote-heading mx-auto'>REQUEST A QUICK QUOTE</h5>
                    <div className='quote-line mb-4 mx-auto'></div>
                    <p className='mb-4 quote-paragraph mx-auto'>Would you like to speak to one of our  agents over the phone? Just submit your details and we’ll be in touch shortly. You can also <span className='email'><a href='https://accounts.google.com/signout/chrome/landing?continue=https://mail.google.com&oc=https://mail.google.com&hl=en-GB'>email us</a></span> if you would prefer.</p>

                    <form>
                        <input className='input border border-1 rounded-3 mb-2 p-2' type='text' name='name' placeholder='Name'></input><br />
                        <input className='input border border-1 rounded-3 mb-2 p-2' type='email' name='email' placeholder='Email'></input><br />
                        <input className='input border border-1 rounded-3 mb-2 p-2' type='number' name='number' placeholder='Phone'></input><br />
                        <input className='input border border-1 rounded-3 mb-2 p-2' type='text' name='subject' placeholder='Subject'></input><br />
                        <textarea className='input border border-1 rounded-3 mb-2 p-2' placeholder='Message'></textarea><br />
                        <button className='add-btn mb-2 me-2'>Submit</button>
                        <button onClick={navigateToInventory} className='add-btn mb-2 me-2'>Inventory</button>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Quote;