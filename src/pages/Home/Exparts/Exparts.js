import React from "react";
import person1 from "../../../images/experts/expert-1.jpg";
import person2 from "../../../images/experts/expert-2.jpg";
import person3 from "../../../images/experts/expert-3.jpg";
import person4 from "../../../images/experts/expert-4.jpg";
import person5 from "../../../images/experts/expert-5.jpg";
import person6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";
import "./Exparts.css";

const Exparts = () => {
  const exparts = [
    { id: 1, name: "mr.kaka", img: person1 },
    { id: 2, name: "mr.paka", img: person2 },
    { id: 3, name: "mr.apap", img: person3 },
    { id: 4, name: "mr.kakku", img: person4 },
    { id: 5, name: "mr.nikkaa", img: person5 },
    { id: 6, name: "mr.ekkaa", img: person6 },
  ];
  return (
    <div id="expart" className="container-fluid">
      <div className="my-4 text-center">
        <h2>Our experts</h2>
        <hr />
      </div>
      <div className="row">
        {exparts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
