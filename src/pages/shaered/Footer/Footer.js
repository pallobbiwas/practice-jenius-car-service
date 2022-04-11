import React from "react";
import "./Footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="bg-primary text-white text-center py-3">
      <p>super car servicing center</p>
      <p>
        <small>copyrigyh&copy; {year}</small>
      </p>
    </div>
  );
};

export default Footer;
