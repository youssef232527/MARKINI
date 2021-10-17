import React, { Fragment, useEffect, useState } from "react";
import handMobile from "../../images/handmobile.png";

import "../style/evenementUnique.css";
import { MdTimer, MdDateRange } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import data from "./data.json";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/utils";
import { RiContactsBookLine } from "react-icons/ri";
import event from "../../images/event.jpg";
const EvenementU = (props) => {
  var date = new Date(2020, 1, 17, 10, 30);

  const usersData = useSelector((state) => state.userReducers);
 
 

  
  return (
   
  
    
    <div className="EvenmentUnique">
      <img className="imageEvenement" src={props.photo} alt="handMobile" />
      {/* <CgProfile size="50px" />   */}
      <h4> {props.eventName}</h4>
      <p>{props.info}</p>

      <div className="coordonneEvenement">
        <div className="cgProfile">
          <CgProfile />
          {!isEmpty(usersData[0]) &&
            usersData.map((user) => {
              if (user._id == props.id)
                return <p>{`${user.firstName} ${user.lastName} `}</p>;
            })}
        </div>
        <div>
          <MdDateRange />
          <p>{props.date}</p>
        </div>
        <div>
          <MdTimer />
          <p>{props.time}</p>
        </div>
        {/* <p>{date.getTime()}</p>
                <p>{date.getFullYear()}</p>
                <p>{date.getHours()}</p>
                <p>{date.getMinutes()}</p> */}
      </div>
      <img
        className="imgUserEvent"
        src={
          !isEmpty(usersData[0]) &&
          usersData.map((user) => {
            if (user._id === props.idPoster) return user.picture;
          }).join('')
        }
      />
    </div>
  );
};
export default EvenementU;
