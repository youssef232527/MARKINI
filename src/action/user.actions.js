import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_PROFIL = "UPDATE_PROFIL";
export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
          .then((res) => {
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
          });
      })
      .catch((err) => console.log(err));
  };
};

export const updateProfil = (userId, data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        status: data.status,
        email: data.email,
      },
    })
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/${userId}`)
          .then((res) => {
            dispatch({ type: UPDATE_PROFIL, payload: res.data });
          });
      })
      .catch((err) => console.log(err));
  };
};
