import React from 'react';
import './Confirmation.css'
import img from '../../images/done-svg.png'

const Confirmation = () => {
    return (
        <div className='confirmation text-center my-5'>
            <img src={img} alt="" className='my-3'/>
            <h1>Welcome to Our Fitness Studio Family.</h1>
            <h3>Your payment has been received. W'll confirm after review.</h3>
        </div>
    );
};

export default Confirmation;