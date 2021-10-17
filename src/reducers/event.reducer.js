import {
  ADD_POST,
  DELETE_EVENT,
  GET_EVENTS,
  LIKE_EVENT,
  UNLIKE_EVENT,
  UPDATE_EVENT,
} from "../action/event.action";

const initialState = {};
export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;

    case LIKE_EVENT:
      return state.map((event) => {
        if (event._id === action.payload.eventId) {
          return {
            ...event,
            likers: [action.payload.userId, ...event.likers],
          };
        }
        return event;
      });
    case UNLIKE_EVENT:
      return state.map((event) => {
        if (event._id === action.payload.eventId) {
          return {
            ...event,
            unlikers: [action.payload.userId, ...event.likers],
          };
        }
        return event;
      });
    case DELETE_EVENT:
      return state.filter((post) => post._id !== action.payload.postId);
    case UPDATE_EVENT:
      return{
         ...state,
         posterId:action.payload.posterId,
         eventName: action.payload.eventName,
        eventType: action.payload.eventType,
        link: action.payload.link,
        place:action.payload.place,
        location: action.payload.location,
        date: action.payload.day,
        time: action.payload.time,
        info:action.payload.info,
        nature: action.payload.nature,
        picture:action.payload.picture,
      }
     
      default:
      return state;
  }
}
