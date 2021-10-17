import React, { Fragment, useState } from "react";
import Menu from "../profil/menu";
import "../style/styleNewEvent.css";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoCheckbox } from "react-icons/io5";
import { MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import cercle from "../../images/cercleCopie.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, getEvents } from "../../action/event.action";

const NewEvent = () => {
  const userData = useSelector((state) => state.userReducer);

  /**** changer photo even */
  
  const [radioEtat, setRadioEtat] = useState(true);
  const [radioOnlineLocal, setRadioOnlineLocal] = useState(true);

  const [eventPicture, setEventPicture] = useState(null);
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const handlePicture = (e) => {
    setEventPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };
  const handleEvent = async () => {
    const data = new FormData();
    data.append("posterId", userData._id);
    data.append("eventName",dataNewEvent.eventName );
    data.append("eventType",dataNewEvent.eventType);
    data.append("link", dataNewEvent.link);
    data.append("location", dataNewEvent.eventLocation);
    data.append("place", dataNewEvent.eventPlace);
    data.append("date", dataNewEvent.day);
    data.append( "time", dataNewEvent.time);
    data.append("info", dataNewEvent.description);
    data.append("nature", dataNewEvent.stateEvent);
    if (file) data.append("file", file);
    await dispatch(addEvent(data));
    window.location='/newEvent'
    // dispatch(getEvents());
  };
  const [dataNewEvent, setDataNewEvent] = useState({
    id: "",
    eventName: "",
    EventType: "",
    eventLink: "",
    eventPlace: "",
    eventLocation: "",
    day: "",
    time: "",
    description: "",
    stateEvent: "",
    photoNewEvent: "",
  });



  var photoEventChanger = eventPicture ? (
    <img src={eventPicture}></img>
  ) : (
    <HiOutlinePhotograph
      size="80px"
      color="#6c757d78"
      style={{ margin: "40px 55px" }}
    />
  );

  var locationLink = radioEtat ? (
    <Fragment>
      <h3>Location*</h3>
      <input
        placeholder="Locatione"
        onChange={(e) =>
          setDataNewEvent({ ...dataNewEvent, eventLocation: e.target.value })
        }
      ></input>
      <input
        placeholder="ville"
        onChange={(e) =>
          setDataNewEvent({ ...dataNewEvent, eventPlace: e.target.value })
        }
      ></input>
    </Fragment>
  ) : (
    <Fragment>
      <h3>Link*</h3>
      <input
        placeholder="http://zoom.exemple"
        onChange={(e) =>
          setDataNewEvent({ ...dataNewEvent, eventLink: e.target.value })
        }
      ></input>
    </Fragment>
  );

  return (
    <div>
      <Menu />

      <h4 id="titleEvent" style={{ textAlign: "center", fontSize: "30px" }}>
        CREATE YOUR EVENT
      </h4>
      <img id="imageCercle" src={cercle}></img>
      <div className="containerNewEvent">
        <div className="dislayFlex">
          <div className="newEventImage">
            <div className="eventImage">
              <div id="chekbox">
                <IoCheckbox color="#2DA58D" size="30px" />
              </div>
              {photoEventChanger} {/*photoEventChanger*/}
            </div>

            <div className="file">
              <input
                type="file"
                accept="image/*"
                id="photoNewEvent"
                name="file"
                style={{ display: "none" }}
                onChange={(e) => handlePicture(e)} //handleClickPhoto
              ></input>
              <label for="photoNewEvent" style={{ cursor: "pointer" }}>
                changer
              </label>
            </div>
          </div>
          <div className="newEvent">
            <div className="nameType">
              <h3>Event Name*</h3>
              <input
                placeholder="my event"
                // value={dataNewEvent.eventName}
                onChange={(e) =>
                  setDataNewEvent({
                    ...dataNewEvent,
                    eventName: e.target.value,
                  })
                }
              ></input>
              <h3>EventType</h3>
              <select
                name="pays"
                onChange={(e) =>
                  setDataNewEvent({
                    ...dataNewEvent,
                    EventType: e.target.value,
                  })
                }
              >
                <option value="education">education</option>
                <option value="Job">Job</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="where">
              <h3> Where*</h3>
              <div id="onlineLocal">
                <div className="local">
                  <input
                    type="radio"
                    id="local"
                    value="local"
                    checked={radioEtat}
                    onClick={() => setRadioEtat(!radioEtat)}
                  />
                  <label>Local</label>
                </div>
                <div className="online">
                  <input
                    type="radio"
                    id="online"
                    value="online"
                    checked={!radioEtat}
                    onClick={() => setRadioEtat(!radioEtat)}
                  />
                  <label>Online</label>
                </div>
              </div>
              {locationLink}
            </div>
            <div className="date">
              <h3>Date*</h3>
              <input
              type="date"
                id="day"
                placeholder="years-mois-day"
                onChange={(e) =>
                  setDataNewEvent({ ...dataNewEvent, day: e.target.value })
                }
              ></input>
              <input
                id="time"
                placeholder="10:00"
                onChange={(e) =>
                  setDataNewEvent({ ...dataNewEvent, time: e.target.value })
                }
              ></input>
            </div>
            <div className="description">
              <h3>Description</h3>
              <textarea
                id="description"
                type="textarea"
                placeholder="write some words that decribe your event"
                onChange={(e) =>
                  setDataNewEvent({
                    ...dataNewEvent,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="otherSetup">
              <h3>Other Setup</h3>
              <label>Is your event public or private?</label>
              <div id="onlineLocal">
                <div className="local">
                  <input
                    style={{
                      marginRight: "3px",
                      position: "relative",
                      top: "2px",
                    }}
                    type="radio"
                    id="local"
                    value="local"
                    checked={radioOnlineLocal}
                    onClick={() => setRadioOnlineLocal(!radioOnlineLocal)}
                    onChange={(e) =>
                      setDataNewEvent({
                        ...dataNewEvent,
                        stateEvent: e.target.value,
                      })
                    }
                  />
                  <MdPublic />
                  <label>Local</label>
                </div>
                <div className="online">
                  <input
                    style={{
                      marginRight: "3px",
                      position: "relative",
                      top: "2px",
                    }}
                    type="radio"
                    id="online"
                    value="online"
                    checked={!radioOnlineLocal}
                    onClick={() => setRadioOnlineLocal(!radioOnlineLocal)}
                    onChange={(e) =>
                      setDataNewEvent({
                        ...dataNewEvent,
                        stateEvent: e.target.value,
                      })
                    }
                  />
                  <RiGitRepositoryPrivateFill />
                  <label>Online</label>
                </div>
              </div>
              <div className="btnCreate">
                <button onClick={(e) => handleEvent(e)}>create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewEvent;
