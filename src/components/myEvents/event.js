import React, { useContext, useState } from "react";
import "../style/evenementUnique.css";
import "../style/evenementPublic.css";
import { MdDateRange } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { isEmpty } from "../../utils/utils";
import { useSelector, useDispatch } from "react-redux";
import { UidContext } from "../Routes/AppContext";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { RiDeleteBack2Line } from "react-icons/ri";
import { deletEvent } from "../../action/event.action";
import EditEvent from "./editEvent";
const Event = (props) => {
  const usersData = useSelector((state) => state.userReducers);
  const userData = useSelector((state) => state.userReducer);
  const [popup, setPopup] = useState(false);
  const [editFenetre, setEdetFenetre] = useState(false);

  const dispatch = useDispatch();
  const uid = useContext(UidContext);
  const editEvent = () => {};

  const deleteEvent = () => {
    dispatch(deletEvent(props.idEvent));
    window.location = "/myEvents";
  };
  function closeEditEvent() {
    setEdetFenetre(false);
  }

  const popupFenetreEdit = editFenetre && (
    <EditEvent
      close={closeEditEvent}
      idEvent={props.idEvent}
      name={props.name}
      time={props.time}
      date={props.date}
      info={props.info}
      photo={props.picture}
      eventName={props.eventName}
      eventType={props.eventType}
      link={props.link}
      place={props.place}
      location={props.location}
      id={props.posterId}
      nature={props.nature}
    />
  );

  const popupClass = popup && (
    <div className="classPopup">
      <span style={{ cursor: "pointer" }} onClick={() => setEdetFenetre(true)}>
        <AiOutlineEdit /> edit{" "}
      </span>{" "}
      <br />
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (window.confirm("voulez-vous supprimer ce event")) {
            deleteEvent();
          }
        }}
      >
        <AiOutlineDelete /> delete
      </span>
      <br />
      <span style={{ cursor: "pointer" }} onClick={() => setPopup(false)}>
        <RiDeleteBack2Line cursor="pointer" /> exit
      </span>
    </div>
  );

  return (
    <div className="EvenmentUniquePublic">
      <img
        className="imageEvenementPublic"
        src={props.photo}
        alt="event photo"
      />
      {/* <CgProfile size="50px" />   */}
      <h4>{props.eventName} </h4>
      <p>{props.info}</p>
      <div className="coordonneEvenement">
        <div className="cgProfile">
          <CgProfile />
          <h7>
            {/* {!isEmpty(usersData[0]) &&
              usersData.map((user) => {
                if (user._id === props.id)
                  return <p>{`${user.firstName} ${user.lastName}`}</p>;
              })} */}
              <p> {userData.firstName} { userData.lastName}</p>
          </h7>{" "}
        </div>
        <div>
          <MdDateRange />
          <p>{props.date}</p>
        </div>
        <BiDotsHorizontalRounded
          size="30px"
          color="#3DCECE"
          cursor="pointer"
          onClick={() => setPopup(true)}
        />
      </div>

      {popupClass}
      {popupFenetreEdit}
    </div>
  );
};
export default Event;
