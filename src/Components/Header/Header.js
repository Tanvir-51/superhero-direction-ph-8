import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-secondary text-white pb-3 container">
      <h1>Top Tech Companies</h1>
      <p>Tech Companies which are shaping our future.</p>
      <p>
        Total Budget: <span className="fw-bold">$10 Trillion Dollar</span>
      </p>
    </div>
  );
};

export default Header;
