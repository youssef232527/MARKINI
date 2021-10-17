import React, { useContext, useState } from "react";
import logo1 from "../../images/markeni.png";
import plant from "../../image/signPhoto.png";
import girl from "../../images/girl.png";
import "../style/styleSignIn.css";
import "./signIn.css";
// import './signIn.css';

// backend
import axios from "axios";

//protect route


const Signin = (props) => {
  

  

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    //erreur message
    const pseudoError = document.querySelector(".pseudo.error");
    const passwordError = document.querySelector(".password.error");
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        pseudo,
        password,
      },
    })
      .then((res) => {
       
        
        // console.log("kind",userNature)
        if (res.data.errors) {
          console.log(res);
          pseudoError.innerHTML = "pseudo inconnu";
          passwordError.innerHTML = "pasword incorrect";
        } else {
         
          localStorage.setItem('autorisation' ,true);
                    
         window.location='/profil'
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
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
            <img className="men" src={girl} />
          </div>
          <div className="signup-div">
            <div className="titre-signup">
              <h1 className="title-signup">Sign in</h1>
            </div>
            <div className="div">
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
                <i class="fas fa-lock"></i>
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="password error"></div>
              <p
                style={{
                  color: "#fff",
                  marginBottom: "10px",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                forget Password ?{" "}
              </p>
              <div className="inp-btn">
                <div className="buttons-div">
                  <button className="btn1" onClick={handleLogin}>
                    Login
                  </button>
                  <hr class="hr-text" data-content="OR" />
                  <button className="btn2">
                    <i id="google" class="fab fa-google"></i>&nbsp; Login with
                    google
                  </button>
                  <p className="ph">
                    New user?&nbsp;
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={(e) => (window.location = "/signUp")}
                      className="login"
                    >
                      Sign up for free
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="plant" src={plant} />
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

export default Signin;
