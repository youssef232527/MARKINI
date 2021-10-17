import React, { Fragment, useContext, useEffect, useState } from "react";
import "../style/styleEvenement.css";
import Menu from "../profil/menu";
import EvenementU from "./evenementFavorite";
import EvenementPublic from "./evenementPublic";
import data from "./data.json";
import dataEvents from "./dataEvents.json";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../action/event.action";
import { isEmpty } from "../../utils/utils";
import { getUsers } from "../../action/users.actions";

import { getUser } from "../../action/user.actions";
import { UidContext } from "../Routes/AppContext";

const Evenement = () => {
  const [loadEvent, setLoadEvent] = useState(true);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventReducer);
  const user = useSelector((state) => state.userReducer);
  const [count,setCount]=useState(9);
  useEffect(() => {
    if (loadEvent) {
      dispatch(getUser(uid));
      
      dispatch(getUsers());
      dispatch(getEvents(count));

      setLoadEvent(false);
    }
  }, [loadEvent,count]);

  const loadMore=()=>{
    setCount( count+3 );
    dispatch(getEvents(count));
   
  }


  function shortTime(a, b) {
    const dif = new Date(a.date).valueOf() - new Date(b.date).valueOf();

    return dif;
  }

  var compteurFavourite = 0;
  var compteurPublic = 0;
  

  // const eventsFavourite = !isEmpty(events[0]) && (
  //   <Fragment>
  //     {events.sort(shortTime).map((eventFav, key) => {
  //       compteurFavourite = compteurFavourite + 1;
  //       if (compteurFavourite < 40) {
  //         return (
  //           <EvenementU
  //             id={eventFav.id}
  //             name={eventFav.name}
  //             time={eventFav.time}
  //             date={eventFav.date}
  //             info={eventFav.info}
  //             photo={eventFav.picture}
  //             eventName={eventFav.eventName}
  //             id={eventFav.posterId}
  //           />
  //         );
  //       }
  //     })}
  //   </Fragment>
  // );
  // let evenement = {
  //   _id: "",
  //   eventName: "",
  //   eventType: "",
  //   link: "",
  //   picture: "",
  //   location: "",
  //   date: "",
  //   nature: "",
  //   info: "",
  // };
  const ev = !isEmpty(user.likes) && (
    <Fragment>
      {user.likes.map((key) => {
        const evenement = events.filter(keyEvent =>  keyEvent._id == key);
        
      console.log(evenement)
        return (
          <EvenementU
            id={ !isEmpty(evenement) ? evenement[0]._id: null}
            name={ !isEmpty(evenement) ?  evenement[0].eventName : null}
            time={ !isEmpty(evenement) ? evenement[0].time : null}
            date={!isEmpty(evenement) ?  evenement[0].date : null}
            info={!isEmpty(evenement) ?  evenement[0].info : null} 
            photo={!isEmpty(evenement) ?  evenement[0].picture : null}
            eventName={ !isEmpty(evenement) ?  evenement[0].eventName : null}
            idPoster={!isEmpty(evenement) ?  evenement[0].posterId : null}
          />
        );
      })}
    </Fragment>
  )
  const eventsPublic1 = !isEmpty(events[0]) && (
    <Fragment>
      {events.sort(shortTime).map((eventFav, key) => {
        compteurPublic = compteurPublic + 1;
        if (compteurPublic < 40) {
          return (
            <EvenementPublic
              idEvent={eventFav._id}
              name={eventFav.name}
              time={eventFav.time}
              date={eventFav.date}
              info={eventFav.info}
              photo={eventFav.picture}
              eventName={eventFav.eventName}
              id={eventFav.posterId}
            />
          );
        }
      })}
    </Fragment>
  );
  const eventsPublic= !isEmpty(user.unlikes) ? (
    <Fragment>
      {user.unlikes.map((key) => {
        const  evenement = events.filter(keyEvent =>  keyEvent._id !== key);
        return(
          evenement.sort(shortTime).map((eventFav)=>{
            return(
              <EvenementPublic
              idEvent={eventFav._id}
              name={eventFav.name}
              time={eventFav.time}
              date={eventFav.date}
              info={eventFav.info}
              photo={eventFav.picture}
              eventName={eventFav.eventName}
              id={eventFav.posterId}
            />
            )
          })
        )
      })}
     
      
    </Fragment>
  ): eventsPublic1


 
  // var dataShorting= events.sort(shortTime);
  // var dataShortingPublic=events.sort(shortTime)

  return (
    <div className="evenement">
      <div id="imageProfilEvenement">
        <Menu></Menu>
        <div className="favoriteEventtitre">
          <h4>Favourite events</h4>
          <p>here are you favourite events</p>
        </div>
        <div className="wrapEvenement"> {ev}</div>
        <div className="publicEvents">
          <div className="publicEventTitre">
            <div>
              <h4>Public events</h4>
              <p>new event every day</p>
            </div>
            <div
              className="btnmore0"
              style={{
                background: "#ffffffd3",
                color: "#37C3A7",
                height: "50px",
              }}
            >
              <span onClick={()=>loadMore()}>Browse all </span>
            </div>
          </div>

          <div className="publicEventGlobale">{eventsPublic}</div>
        </div>
      </div>
    </div>
  );
};
export default Evenement;
