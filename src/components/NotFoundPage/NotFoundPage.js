import React from 'react';
import errorImg from '../../images/notFoundPage-warning.png'
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='not-found-section'>
            <img src={errorImg} alt="" />
            <h1>404</h1>
            <p>The page your're looking for is not available now!</p>
        </div>
    );
};

export default NotFoundPage;