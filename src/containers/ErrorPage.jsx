import React from 'react';
import PageNotFound from '../image/404NotFoundError.jpg';

const ErrorPage = () => {
    return (
        <div className='tab-container'>
            <img src={PageNotFound} alt='Page not found'/>
        </div>
    )
};

export default ErrorPage;