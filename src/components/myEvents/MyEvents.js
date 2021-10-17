import React, { useContext, useEffect, useState } from "react";
import Menu from "../profil/menu";
import EvenementPublic from "../Evenement/evenementPublic";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../action/user.actions";
import { getEvents } from "../../action/event.action";
import { UidContext } from "../Routes/AppContext";
import { isEmpty } from "../../utils/utils";
import { Fragment } from "react";
import EditEvent from "./editEvent";
import "./MyEvents.css";
import Event from "./event";
const MyEvent = () => {
  const [loadEvent, setLoadEvent] = useState(true);
  const dispatch = useDispatch();
  const [count, setCount] = useState();
  const uid = useContext(UidContext);
  const events = useSelector((state) => state.eventReducer);
  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (loadEvent) {
      dispatch(getUser(uid));

      dispatch(getEvents(count));

      setLoadEvent(false);
    }
  }, [loadEvent]);
  function shortTime(a, b) {
    const dif = new Date(a.date).valueOf() - new Date(b.date).valueOf();

    return dif;
  }
  const eventsUser = !isEmpty(events[0]) && (
    <Fragment>
      {events.sort(shortTime).map((ev, key) => {
        if (ev.posterId === uid) {
          return (
            <Event
              idEvent={ev._id}
              name={ev.name}
              time={ev.time}
              date={ev.date}
              info={ev.info}
              photo={ev.picture}
              eventName={ev.eventName}
              eventType={ev.eventType}
              link={ev.link}
              place={ev.place}
              location={ev.location}
              id={ev.posterId}
              nature={ev.nature}
            />
          );
        }
      })}
    </Fragment>
  );
  return (
    <div className="eventsUserGlobale">
      <Menu />
      <h4 style={{ textAlign: "center", fontSize: "30px" }}> My Events </h4>
      <div className="eventsUser">{eventsUser}
      <div>
      {/* <EditEvent  photo={"photo"} eventName={"eventName"} info={"info"} date={"date"}/> */}
    </div>
    
      </div>
    
    </div>

  );
};
export default MyEvent;
