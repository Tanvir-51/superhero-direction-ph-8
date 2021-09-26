import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Info from "../Info/Info";
import "./Description.css";

const Description = () => {
  const [infos, setInfos] = useState([]); // using useState to set the data in the variables
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./companies.json")
      .then((res) => res.json())
      .then((data) => setInfos(data)); // getting information from the json file.
  }, []);

  const addToCart = (info) => {
    const newCart = [...cart, info]; // adding new element in the old array.
    setCart(newCart);
  };

  return (
    <div className="container description-container mt-3 ">
      <div className="tech-container">
        {infos.map((info) => (
          <Info key={info.name} info={info} addToCart={addToCart}></Info> // all the company information
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Description;
