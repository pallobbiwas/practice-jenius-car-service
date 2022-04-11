import { faShieldCat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Expert.css";

const Expert = ({ expert:{name, img} }) => {
  return (
    <div className="col-md-6 col-lg-4 ">
      <div className=" bg-info rounded-3 m-4 text-center p-4">
        <img src={img} alt="experts img" className="img-fluid" />
        <h3 className="my-4">Name: {name}</h3>
        <div>
          <button className="btn btn-dark btn-outline-primary px-4">hire me 
          <FontAwesomeIcon className='ms-3' icon={faShieldCat}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
