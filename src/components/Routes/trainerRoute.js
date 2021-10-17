import React, { useContext } from "react";
import { isAuth } from "./AppContext";
import { useHistory, Redirect, Route } from "react-router";
import { isEmpty } from "../../utils/utils";
import { useSelector } from "react-redux";

const TrainerRoute = ({
  natureUser: natureUser,
  path: path,
  component: Component,
}) => {
  
  console.log(" user depuis trainer route",natureUser)
  if (natureUser ==="trainer" ) {
    return <Route path={path} component={Component} />;
  } else {
    return <Redirect to="/"></Redirect>;
  }
};

export default TrainerRoute;
