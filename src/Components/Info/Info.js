import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Info.css";

const Info = (props) => {
  const { name, ceo, founded, headquarters, net_worth, image } = props.info; //destructuring info
  return (
    <div className="info-container">
      <div className="card" style={{ width: "18rem", height: "100%" }}>
        <div className="card-body">
          <img className="info-image card-img-top" src={image} alt="" />
          <h4>Name: {name}</h4>
          <h4>CEO: {ceo}</h4>
          <h4>Founded:{founded}</h4>
          <h4>Headquarters:{headquarters}</h4>
          <h4>Net Worth: {net_worth}</h4>
          <button
            onClick={() => props.addToCart(props.info)}
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
