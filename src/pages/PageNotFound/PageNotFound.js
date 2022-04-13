import React from 'react';
import error from '../../images/error.gif';

const PageNotFound = () => {
    return (
        <div>
            <img className='w-100 img-fluid' src={error} alt="" />
        </div>
    );
};

export default PageNotFound;