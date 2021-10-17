import React, { useContext } from "react";
import { isAuth } from "./AppContext";
import { useHistory, Redirect, Route } from "react-router";
import { isEmpty } from "../../utils/utils";

const PrivateRoute = ({
  autorisation: autorisation,
  path: path,
  component: Component,
}) => {

 const natureUser= localStorage.getItem("natureUser")
  console.log("depauis condition",natureUser)
  if (eval(autorisation)) {
    
    return <Route path={path} component={Component} />;
  } 
  
  if (natureUser === "student" ) {
    return <Route path={path} component={Component} />;
  } else {
    return <Redirect to="/"></Redirect>;
  }
};

export default PrivateRoute;
