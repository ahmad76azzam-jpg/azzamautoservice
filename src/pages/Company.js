import React from "react";
import "../styles/Company.css";
import storeImage from "../assets/store.jpg";
import bohanImage from "../assets/bohan1.png"; // new image

const Company = () => {
  return (
    <div className="company-container">
      {/* Header Section */}
      <div className="company-header">
        <h1>About Azzam Auto Service</h1>
        <p>Quality. Trust. Performance — Since 1990</p>
      </div>

      {/* Store Section */}
      <div className="company-content">
        <img src={storeImage} alt="Our Store" className="company-image" />
        <div className="company-description">
          <h2>Who We Are</h2>
          <p>
            At <strong>Azzam Auto Service</strong>, we pride ourselves on being
            one of the leading automotive product suppliers in the region.
            From engine oils and filters to batteries and car care items, we
            provide only high-quality brands such as <strong>Liqui Moly</strong>,
            <strong> Motul</strong>, and more.
          </p>
          <p>
            Our team is dedicated to helping every customer find exactly what
            their vehicle needs. Whether you're a car enthusiast or a mechanic,
            we deliver trusted products and professional guidance to keep your
            engine running smoothly.
          </p>
        </div>
      </div>

      {/* Bohan Partnership Section */}
      <div className="company-content reverse">
        <div className="company-description">
          <h2>Our Partnership with Bohan</h2>
          <p>
            We are the proud distributors of <strong>Bohan Batteries</strong> in
            South Lebanon, offering reliable, high-performance batteries for all
            types of vehicles. Our partnership with Bohan ensures that our
            customers receive the best in power, durability, and long-lasting
            performance.
          </p>
        </div>
        <img src={bohanImage} alt="Bohan Battery" className="company-image" />
      </div>
    </div>
  );
};

export default Company;
