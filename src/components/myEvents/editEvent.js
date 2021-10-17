import React, { useState } from "react";
import { Fragment } from "react";
import { isEmpty } from "../../utils/utils";
import "./editEvent.css";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoCheckbox } from "react-icons/io5";
import { MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { UpdateEvent } from "../../action/event.action";
import { useDispatch, useSelector } from "react-redux";
const EditEvent = (props) => {
  const userData = useSelector((state) => state.userReducer);

  const [photopreselect, setPhotoPreselect] = useState(null);
  const [file, setFile] = useState();
  console.log("image", photopreselect);
  const handlePicture = (e) => {
    setPhotoPreselect(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const [radioEtat, setRadioEtat] = useState(true);
  const [radioOnlineLocal, setRadioOnlineLocal] = useState(true);
  const dispatch=useDispatch()
  const [dataNewEvent, setDataNewEvent] = useState({
    posterId: userData._id,
    eventName:props.eventName ,
    eventType: props.eventType,
    link:props.link,
    place: props.place,
    location: props.location,
    date: props.date,
    time: props.time,
    info: props.info,
    nature: props.nature,
    file: file,
  });

  const handleEvent = async(e)   => {


    await dispatch(UpdateEvent(props.idEvent,dataNewEvent));
    window.location='/myEvents'
  };

  var locationLink = radioEtat ? (
    <Fragment>
      <h3>Location*</h3>
      <input
        placeholder="Location"
        onChange={(e) =>
          setDataNewEvent({ ...dataNewEvent, location: e.target.value })
        }
      ></input>
      <input
        placeholder="ville"
        onChange={(e) =>
          setDataNewEvent({ ...dataNewEvent, place: e.target.value })
        }
      ></input>
    </Fragment>
  ) : (
    <Fragment>
      <h3>Link*</h3>
      <input
        placeholder="http://zoom.exemple"
        onChange={(e) =>
          setDataNewEvent({ ...dataNewEvent, link: e.target.value })
        }
      ></input>
    </Fragment>
  );

  

  return (
    <div className="editEvent">
      <h4 style={{ fontSize: "25px" }}>Edit Event</h4>
      <p style={{ color: "rgb(181 164 159)" }}>
        peopple who view your event will see the following information
      </p>
      <div id="editEventImg">
        <img src={photopreselect}></img>
        {/* <button for="firstimg" id ="editButton"style={{background:"#696969"}} > Edit</button> */}
        <input
          type="file"
          accept="image/*"
          id="firstimg"
          name="file"
          style={{ display: "none" }}
          onChange={(e) => handlePicture(e)}
        ></input>

        <label for="firstimg" id="editButton" style={{ background: "#696969" }}>
          Edit
        </label>
      </div>
      <div className="updateEvent">
        <h3>Event Name*</h3>
        <input
          placeholder="my event"
          onChange={(e) =>
            setDataNewEvent({ ...dataNewEvent, eventName: e.target.value })
          }
        ></input>
        
        <h3>EventType</h3>
        <select
          name="pays"
          onChange={(e) =>
            setDataNewEvent({
              ...dataNewEvent,
              eventType: e.target.value,
            })
          }
        >
          <option value="education">education</option>
          <option value="Job">Job</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="where1">
        <div className="where11">
          <h3> Where*</h3>

          <div className="local1">
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
        <div className="location1">{locationLink}</div>
        <div className="date1">
          <h3>Date*</h3>
          <input
            type="date"
            id="day"
            placeholder="years-mois-day"
            onChange={(e) =>
              setDataNewEvent({ ...dataNewEvent, date: e.target.value })
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
        <div className="description1">
          <h3>Description</h3>
          <textarea
            id="description1"
            type="textarea"
            placeholder="write some words that decribe your event"
            onChange={(e) =>
              setDataNewEvent({
                ...dataNewEvent,
                info: e.target.value,
              })
            }
          />
        </div>
        <div className="otherSetup1">
          <h3>Is your event public or private?</h3>
          <div id="onlineLocal1">
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
                    nature: e.target.value,
                  })
                }
              />
              <MdPublic />
              <label>public</label>
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
              <label>private</label>
            </div>
          </div>
        </div>
        <div className="UpdateExit">
          <div className="btnCreate1">
          <button onClick={()=>props.close()}>Exit</button>
        </div>
        <div className="btnCreate1">
          <button onClick={() => {
          if (window.confirm("voulez-vous supprimer ce event")) {
            handleEvent();
          }
        }}>update</button>
        </div>
        </div>
        
        
      </div>
    </div>
  );
};
export default EditEvent;
