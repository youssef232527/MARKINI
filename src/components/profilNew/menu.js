import React from "react";
import "../style/styleMenuProfil.css";
import logo from "../../images/logo.png";
import { FaGithub } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaCompass, FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Menu = () => {
  return (
    <div>
      <div className="navbar">
        <div className="headerProfil">
          <div className="logo-container">
            <img className="logo" src={logo} />
          </div>
          <div className="menu-p">
            <li>
              <FaCompass size="30px" color="#2F4F4F" cursor="pointer" />
            </li>
            <li>
              <IoNotificationsSharp size="30px" color="#2F4F4F" cursor="pointer"/>
            </li>
            <li>
              <CgProfile size="30px" color="#2F4F4F" cursor="pointer"/>
            </li>
            <li>
              <FaBars size="30px" color="#2F4F4F" cursor="pointer" />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
