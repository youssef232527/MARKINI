import { GET_USER,UPDATE_PROFIL,UPLOAD_PICTURE } from "../action/user.actions";

const initialState = {};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        picture: action.payload,
      };
    case UPDATE_PROFIL:
      return{
        ...state,
        firstName:action.payload.firstName,
        lastName :action.payload.lastName,
        kind:action.payload.kind
      }
    default:
      return state;
  }
}
