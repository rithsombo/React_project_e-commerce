import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          alt=""
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
