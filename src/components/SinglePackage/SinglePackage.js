import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SinglePackage.css';

const SinglePackage = (props) => {
    const {title, subTitle, price, feature1,feature2,feature3,feature4,feature5,feature6,img}=props.service;
    const navigate = useNavigate();
    const proceedCheckout =(title)=>{
        navigate(`/checkout/${title}`);
    }
    return (
        <div className='service-card'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <div className='w-25 mx-auto'><hr /></div>
            <p className='my-3 price-section'>$ <span className='price'>{price}</span> /Week</p>
            <ul>
                <li>{feature1}</li>
                <li>{feature2}</li>
                <li>{feature3}</li>
                <li>{feature4}</li>
                <li>{feature5}</li>
                <li>{feature6}</li>
            </ul>
            <button className='take-plan-btn' onClick={()=>proceedCheckout(title)}>Take Plan</button>
        </div>
    );
};

export default SinglePackage;