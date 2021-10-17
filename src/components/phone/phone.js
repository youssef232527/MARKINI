import React, { useState } from "react";
import logo1 from "../../images/markeni.png";
import plant from "../../image/signPhoto.png";
import girl from "../../image/img1.svg";
import "../style/styleSignIn.css";
import "../sigIn/signIn.css";
// import './signIn.css';
import '../style/styleLogin.css';
import Menu from './menus'

const Phone = () => {
  return (
    <div id="phoneBackground">
    <div className="signup">
     <Menu />
      <div className="mainAll">
        <div className="main2">
          <div className="img1">
            <img className="men" src={girl} />
          </div>
          <div className="signup-div">
            <div className="div2">
              <h4 className="titleH">Verify Phone Number</h4>
              <p id="parag">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.This content is a little bit
                longer
              </p>
              <div className="input_fieldH">
                <input type="text" required="required"  placeholder="xxx-xxx" />
              </div>
              <input className="btn2" type="submit" value="Verify"  />
            </div>
          </div>
        </div>
      </div>
      <div className="radiusH"></div>
    </div>
    </div>
  );
};

export default Phone;
