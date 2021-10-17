import React from "react";
import "../style/styleMenuAcceuil.css";
import logo from "../../images/markeni.png";
const Menu = () => {
  return (
    <div>
      <div className="navbar">
        <div className="headerAcceuil">
          <div className="logo-container">
            <img className="logo" src={logo} />
          </div>
          <div className="menu-p">
           
            <li className="option">Blog</li>
           
            <li className="option">Custumers</li>
           
           
            <li className="option">About us</li>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
