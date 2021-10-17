import React, { useContext, useState } from "react";
import handMobile from "../../images/handmobile.png";
import "../style/evenementUnique.css";
import "../style/evenementPublic.css";
import { MdDateRange } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { isEmpty } from "../../utils/utils";
import { useSelector, useDispatch} from "react-redux";
import { UidContext } from "../Routes/AppContext";
import { getEvents, likeEvent ,unlikeEvent} from "../../action/event.action";
import { getUser } from "../../action/user.actions";
import { Redirect } from "react-router-dom";
const EvenementPublic = (props) => {
  const usersData = useSelector((state) => state.userReducers);
  const [addIgnor, setAddIgnor] = useState(false);

  const dispatch = useDispatch();
  const uid=useContext(UidContext)
  const addListeEventsFavourite =  () => {
    // eslint-disable-next-line no-restricted-globals
   var bool=confirm ('add a favorite events');
   bool &&  dispatch(likeEvent(props.idEvent,uid))  ;
   window.location='/evenement';
    
  };
  const ignoreEvent=()=>{
    // eslint-disable-next-line no-restricted-globals
    var bool=confirm ('delete event');
    bool && dispatch(unlikeEvent(props.idEvent,uid))  ; 
    window.location='/evenement';
  }

  const agiteEvent = addIgnor ? (
    <div className="addFavourite">
      <MdFavoriteBorder
        size="20px"
        cursor="pointer"
        onClick={() => {setAddIgnor(!addIgnor);
         
        
         addListeEventsFavourite();
          window.location='/evenement';
         
         
        
        }}
      />

      <AiFillDelete
        size="20px"
        cursor="pointer"
        onClick={() => {setAddIgnor(!addIgnor);
          ignoreEvent();}}
      />
      <FiDelete
        size="20px"
        cursor="pointer"
        onClick={() => setAddIgnor(!addIgnor)}
      />
    </div>
  ) : (
    <BiDotsHorizontalRounded
      size="30px"
      color="#3DCECE"
      cursor="pointer"
      onClick={() => setAddIgnor(!addIgnor)}
    />
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
            {!isEmpty(usersData[0]) &&
              usersData.map((user) => {
                if (user._id === props.id){
                  console.log(  "user_id",  user._id,  "id",props.id, "user", user  ,"user name",user.firstName);
                  return <p>{`${user.firstName} ${user.lastName}`}</p>;
                   
                }

                  
              })}
          </h7>{" "}
        </div>
        <div>
          <MdDateRange />
          <p>{props.date}</p>
        </div>
        {agiteEvent}
      </div>
    </div>
  );
};
export default EvenementPublic;
