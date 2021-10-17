import React, { Fragment, useState } from "react";
import logo1 from "../../images/markeni.png";
import "./signUp.css";
import plant from "../../image/signPhoto.png";
import men from "../../images/men.png";
import "../style/styleSignIn.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
//&nbsp;

const Signup = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [kind, setKind] = useState("");
  let KindRadio = ["Accademy", "Trainer", "User"];
  
  const handleSignUp =(e)=>{
    const pseudoError=document.querySelector('.pseudo.error');
    const emailError=document.querySelector('.email.error');
    const phoneError=document.querySelector('.phone.error');
    const passwordError=document.querySelector('.password.error');
    const kindError=document.querySelector('.kind.error');
    if(!kind){
        kindError.innerHTML="you must cheked first ";
    }
    else {
         axios({
            method:"post",
            url :`${process.env.REACT_APP_API_URL}api/user/register`,
            data:{
                pseudo,
                email,
                phone,
                password,
                kind,
            }
        })
        .then((res)=>{
            if(res.data.errors){
              console.log(res.data.errors)
                pseudoError.innerHTML=res.data.errors.pseudo;
                emailError.innerHTML=res.data.errors.email;
                phoneError.innerHTML=res.data.errors.phone;
                passwordError.innerHTML=res.data.errors.password;
                
            }else{
              window.location = "/signIn";
            }
        })
        .catch((err)=>console.log(err))

    }


    
  }




  return (
    <div className="signup">
      <div className="home">
        <div className="navbar">
          <div className="header">
            <div className="logo-container">
              <img className="logo" src={logo1} />
            </div>
            <div className="menuAll">
              <ul className="menu">
                <li className="option">Blog</li>
                <li className="option">Custumers</li>
                <li className="option">About us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mainAll">
        <div className="main">
          <div className="img-plant">
            <img className="plant" src={plant} />
          </div>
          <div className="signup-div">
            <div className="titre-signup">
              <h1 className="title-signup">Sign up</h1>
            </div>
            <div className="div0">
              <div className="inputs">
                <div className="input_field">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="User name"
                    onChange={(e) => setPseudo(e.target.value)}
                    value={pseudo}
                  />
                  
                </div>
                <div className="pseudo error"></div>
                <div className="input_field">
                  <i class="fa fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="email error"></div>
                <div className="input_field">
                  <i class="fas fa-phone"></i>
                  <input
                    type="text"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="phone error"></div>
                <div className="input_field">
                  <i class="fas fa-lock"></i>
                  <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <div className="password error"></div>
              <div className="inp-btn">
                <div className="radio-inp">
                  {KindRadio.map((kind,key) => {
                    return (
                      <div className="inputs-radio">
                        <input
                          className="input-radio"
                          type="radio"
                          id="academy"
                          name="radio"
                          value={kind}
                          onChange={(e)=>setKind(e.target.value)}
                        />
                        <label className="label-radio" for="html">
                          {kind}
                        </label>
                      </div>
                    );
                  })}
                  {/* <div className="inputs-radio">
                    <input
                      className="input-radio"
                      type="radio"
                      id="academy"
                      name="radio"
                      value="academy"
                    />
                    <label className="label-radio" for="html">
                      Academy
                    </label>
                  </div>
                  <div className="inputs-radio">
                    <input
                      className="input-radio"
                      type="radio"
                      id="trainer"
                      name="radio"
                      value="trainer "
                    />
                    <label className="label-radio" for="html">
                      Trainer
                    </label>
                  </div>
                  <div className="inputs-radio">
                    <input
                      className="input-radio"
                      type="radio"
                      id="user"
                      name="radio"
                      value="user"
                    />
                    <label className="label-radio" for="html">
                      User
                    </label>
                  </div> */}
                  <br />
                </div>
                <div className="kind error"></div>
                <div className="buttons-div">
                  <br />
                  <button onClick={handleSignUp} className="btn1">Sign up</button>
                  <hr class="hr-text" data-content="OR" />
                  <button className="btn2">
                    <i id="google" class="fab fa-google"></i>&nbsp; Sign up with
                    google
                  </button>
                  <p className="ph">
                    Already have an account?&nbsp;
                    <a style={{cursor:"pointer"}}onClick={(e)=>  window.location = "/signIn"} className="login">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="men" src={men} />
          </div>
        </div>
      </div>
      <div className="wave-div">
        <svg
          className="wave-svg"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path"
            d="M0.00,49.99 C261.51,278.58 337.69,-137.85 503.61,54.56 L500.00,150.00 L0.00,150.00 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Signup;
