import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Exparts from "../Exparts/Exparts";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>home-car genius service</title>
      </Helmet>
      <Banner />
      <Services />
      <Exparts />
    </div>
  );
};

export default Home;
