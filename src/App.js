import React, { Component, useEffect, useState } from "react";
import Routers from "./components/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { UidContext } from "./components/Routes/AppContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./action/user.actions";
/*prtect route*/
// import { isAuth } from "./components/Routes/AppContext";

function App() {
  const [uid, setUid] = useState(null);
  // var [value, setValue] = useState("");



  const dispatch = useDispatch();

  
  useEffect(() => {
    
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
          
        })
        .catch((err) => console.log("no   token"));
    };
    fetchToken();
    if (uid) {
      dispatch(getUser(uid));
     
    }
  }, [uid]); /*nature de user*/
  
  return (
    <UidContext.Provider value={uid}>
      <Routers  />
    </UidContext.Provider>
  );
}

export default App;
