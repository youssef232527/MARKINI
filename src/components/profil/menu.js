import React, { Fragment, useContext, useState } from "react";
import "../style/styleMenuProfil.css";
import logo from "../../images/logo.png";
import { FaGithub } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaCompass, FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import cookie from "js-cookie";
import axios from "axios";
//protect route
import { isAuth } from "../Routes/AppContext";
import { useSelector } from "react-redux";

const Menu = () => {
  //protect route
  const userData = useSelector((state) => state.userReducer);
  const newEvent = userData.kind == "Trainer" && (
    
    <Fragment>
      
      <button
        onClick={() => {
          localStorage.setItem("nature", "trainer")
          window.location = "./newEvent";
        }}
      >
        {" "}
        new 
      </button>
    </Fragment>
  );
  const myEvents = userData.kind == "Trainer" && (
    
    <Fragment>
      
      <button
        onClick={() => {
          localStorage.setItem("nature", "trainer")
          window.location = "./myEvents";
        }}
      >
        {" "}
        Events
      </button>
    </Fragment>
  );

  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const [barrConnexion, setBarConnexion] = useState(false);
  const handleBar = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => {
        localStorage.setItem("autorisation", false);

        removeCookie("jwt");
      })
      .catch((err) => console.log(err));
    alert("vous voulez deconnectez");
    localStorage.setItem("nature", "");

    window.location = "/";
  };
  const bar = barrConnexion && (
    <Fragment>
      <button
        onClick={() => {
          localStorage.setItem("autorisation", false);
          handleBar();
        }}
      >
        {" "}
        logout{" "}
      </button>
    </Fragment>
  );
  return (
    <div>
      <div className="navbar">
        <div className="headerProfil">
          <div className="logo-container">
            <img className="logo" src={logo} />
          </div>
          <div className="menu-p">
            <li>
              <FaCompass
                size="30px"
                color="#2F4F4F"
                cursor="pointer"
                onClick={() => (window.location = "/evenement")}
              />
            </li>
            <li>
              <IoNotificationsSharp
                size="30px"
                color="#2F4F4F"
                cursor="pointer"
              />
            </li>
            <li>
              <CgProfile
                size="30px"
                color="#2F4F4F"
                cursor="pointer"
                onClick={() => (window.location = "/profil")}
              />
            </li>
            <li>
              <FaBars
                size="30px"
                color="#2F4F4F"
                cursor="pointer"
                id="click"
                onClick={() => setBarConnexion(!barrConnexion)}
              />
              <div className="popupeMenu">
                 {bar}
              {newEvent}
              {myEvents}
              </div>
             
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
