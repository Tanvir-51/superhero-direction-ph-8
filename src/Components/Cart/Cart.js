import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let names = [];
  let i = 0;
  let total = 0;
  for (const info of cart) {
    total = total + info.net_worth;

    names[i] = info.name;
    i++;
  }
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div
          className="card-body"
          style={{ backgroundColor: "#EFD6AC", marginLeft: "10px" }}
        >
          <h4>Company added: {props.cart.length}</h4>
          <h4>Total Value: ${total} </h4>
          <br />

          {names.map((name) => (
            <li className="list-name">Name: {name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
