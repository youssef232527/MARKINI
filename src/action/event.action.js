import axios from "axios";
import { UPDATE_PROFIL } from "./user.actions";

//events

export const GET_EVENTS = "GET_EVENTS";
export const ADD_POST = "ADD_POST";
export const LIKE_EVENT = "LIKE_EVENT";
export const UNLIKE_EVENT = "UNLIKE_EVENT";
export const DELETE_EVENT = "DELET_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const getEvents = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/event/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_EVENTS, payload: array });
      })
      .catch((err) => console.log(err));
  };
};
export const addEvent = (data) => {
  return (dispatch) => {
    return axios.post(`${process.env.REACT_APP_API_URL}api/event`, data);
  };
};

export const likeEvent = (eventId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/event/like-event/` + eventId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: LIKE_EVENT, payload: { eventId, userId } });
      })
      .catch((err) => console.log(err));
  };
};
export const unlikeEvent = (eventId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/event/unlike-event/` + eventId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNLIKE_EVENT, payload: { eventId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletEvent = (eventId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/event/` + eventId,
    })
      .then((res) => {
        dispatch({ type: DELETE_EVENT, payload: { eventId } });
      })
      .catch((err) => console.log(err));
  };
};
export const UpdateEvent = (eventId, data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/event/` + eventId,
      data: {
        posterId:data.posterId,
        eventName: data.eventName,
        eventType: data.eventType,
        eventLink: data.link,
        eventPlace: data.place,
        eventLocation: data.location,
        date: data.date,
        time: data.time,
        info: data.info,
        stateEvent: data.nature,
        file: data.file,
      },
    })
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/event/${eventId}`)
          .then((res) => {
            dispatch({ type: UPDATE_EVENT, payload: res.data });
          });
      })
      .catch((err) => console.log(err));
  };
};
