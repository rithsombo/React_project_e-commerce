import React from "react";
import "./breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { products } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {products.category} <img src={arrow_icon} alt="" />
      {products.name} <img src={arrow_icon} alt="" />
    </div>
  );
};

export default Breadcrums;
