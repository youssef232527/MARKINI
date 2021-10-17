import React from "react";

import img1 from "../../image/img1.svg";
import markeni from "../../images/markeni.png";
import '../style/styleLogin.css'

function Login() {
  return (
    
    <div className="">
      <div id="footerH">
            <div id="premierTrait"></div> 
            <div className="markeni"><img src={markeni} alt="carte"/></div>
        </div> 

        <div className="headerLogin">
      <div className="imageH">
        <a href="#">
          <img src={img1} alt="carte" />
        </a>
      </div>

      <div className="borderLogin">
        <h4 className="titleH">Verify Phone Number</h4>
        <p id="parag">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.This content is a little bit longer
        </p>
        <div className="input_fieldH">
          <input type="text" placeholder="xxx-xxx" />
        </div>
        <input type="submit" value="Verify" class="btn solid" />
      </div>
    </div>
      <div className="radiusH"></div>
    </div>
    
  );
}
export default Login;
