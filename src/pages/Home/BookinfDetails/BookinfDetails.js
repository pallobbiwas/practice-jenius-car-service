import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookinfDetails = () => {
    const navigate = useNavigate()
    const prams = useParams();
    console.log(prams.serviceId);
    const swtichCheekout = () => {
        navigate('/cheekout')
    }
    return (
        <div>
            <h2>details of booking</h2>
            <div>
                <button onClick={swtichCheekout} className="btn btn-info">CheekOut</button>
            </div>
        </div>
    );
};

export default BookinfDetails;