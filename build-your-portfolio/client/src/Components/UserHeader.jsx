import React from "react";
import Profile from '../images/profile.png';

export default function UserHeader() {
  return (
    <div className="userHeader" style={{backgroundColor:'purple'}}>
    <div className="UserProfile">
      <img src={Profile} className="UserPic" />
    </div>
    <div className="userButtons">
      <input style={{margin: '10px', width:'50vw'}}
        className="logIn"
        placeholder="Amount you want to invest"
        value=""
      ></input>
      <input style={{margin: '10px', width:'50vw'}} className="logIn"></input>
    </div>
  </div>
  )
}
