import React from "react";
import UserHeader from "./UserHeader";
import MainMenu from "./MainMenu";
import { Redirect } from "react-router-dom";

export default function User(props) {
  if (localStorage.getItem("authToken")) {
    return (
      <div>
        <UserHeader />
        <MainMenu stocks={props.stocks}/>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}
