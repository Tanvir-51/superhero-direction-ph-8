import React, { useEffect, useState } from "react";
import Info from "../Info/Info";
import "./Description.css";

const Description = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch("./companies.json")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);

  const addToCart = (info) => {
    console.log(info.name);
  };

  return (
    <div className="container description-container mt-3 ">
      <div className="tech-container">
        {/* <h3>Tech: {infos.length}</h3> */}
        {infos.map((info) => (
          <Info key={info.name} info={info} addToCart={addToCart}></Info>
        ))}
      </div>
      <div className="cart-container">
        <h4>Company added: </h4>
        <h4>Total Cost: $ </h4>
      </div>
    </div>
  );
};

export default Description;
