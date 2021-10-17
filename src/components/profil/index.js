import React, { Fragment, useContext, useEffect } from "react";
import data from "./data.json";
import markeni from "../../images/markeni.png";
import Menu from "./menu";
import "../style/styleProfil.css";


import Personnal from "./personnel";
import Skill from "./skill";
import Langue from "./langue";
import { isAuth } from "../Routes/AppContext";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/utils";
const ProfilNew = () => {


  
  return (
    <div className="profil">
      <div id="imageProfilHande">
        <Menu></Menu>
        <div className="wrap">
          <div className="bodyProfil">
            <Personnal />
            <Skill />
            <Langue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilNew;
