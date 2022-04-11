import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Servic.css";

const Servic = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="m-2 bg-info p-4 rounded-3">
        <img className="img-fluid" src={img} alt="" />
        <h4>{name}</h4>
        <p>price: {price}</p>
        <p>{description}</p>
        <div className="mt-4 text-center d-flex align-items-center justify-content-center">
          <button className="btn btn-dark btn-outline-primary px-4">
            Books this package
            <FontAwesomeIcon className=' ms-3' icon={faMessage} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Servic;
