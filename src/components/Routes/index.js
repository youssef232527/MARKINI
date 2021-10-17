import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../home/index";
import Login from "../Login/index";
import Sign from "../SignIn/index";
import Profil from "../profil";
import Evenement from "../Evenement/Evenement";
import ProfilNew from "../profilNew";
import NewEvent from "../NewEven/newEvent";
import Signin from "../sigIn/signIn";
import Signup from "../sigUp/sigUp";
import Phone from "../phone/phone";
import MyEvent from "../myEvents/MyEvents";
/*protect route*/
// import ProtectedRoute from './ProtectedRoute';

import TrainerRoute from "./trainerRoute";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./authContext";
import { ImBold } from "react-icons/im";

const Routers = (props) => {

  
  
  let autorisation = localStorage.getItem("autorisation");
 
  let natureUser=localStorage.getItem("nature");
 
console.log("depauis routes",natureUser)
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/signIn" exact component={Signin} />
        <PrivateRoute
          autorisation={autorisation}
          path="/profil"
          component={Profil}
        />
        <PrivateRoute
          autorisation={autorisation}
          path="/evenement"
          component={Evenement}
        />
        <TrainerRoute
          natureUser={natureUser}
          path="/newEvent"
          
          component={NewEvent}
        />
        <TrainerRoute
          natureUser={natureUser}
          path="/myEvents"
          
          component={MyEvent}
        />
        <PrivateRoute
          autorisation={autorisation}
          path="/phone"

          component={Phone}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default Routers;
