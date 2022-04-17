import React from 'react';
import './SinglePackage.css';

const SinglePackage = (props) => {
    const {title, subTitle, price, feature1,feature2,feature3,feature4,feature5,feature6}=props.service;
    return (
        <div className='service-card'>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <p className='my-3 price-section'>$ <span className='price'>{price}</span> /Week</p>
            <ul>
                <li>{feature1}</li>
                <li>{feature2}</li>
                <li>{feature3}</li>
                <li>{feature4}</li>
                <li>{feature5}</li>
                <li>{feature6}</li>
            </ul>
            <button className='take-plan-btn'>Take Plan</button>
        </div>
    );
};

export default SinglePackage;