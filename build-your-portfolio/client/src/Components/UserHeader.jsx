import React, { useState, useEffect } from "react";
import Profile from "../images/profile.png";

export default function UserHeader({invest, investFormOpen, handleInvestChange, setInvestFormOpen }) {
  

 
  return (
    <div className="userHeader" style={{ backgroundColor: "purple" }}>
      <div className="UserProfile">
        <img src={Profile} className="UserPic" />
      </div>
      <div className="imputInvest">
        {investFormOpen && <form onSubmit= {() => setInvestFormOpen(false)}><input
          onChange={handleInvestChange}
          style={{ margin: "10px", width: "50vw" }}
          className="logIn"
          placeholder="Amount you want to invest"
          value={invest}
          
        /></form>}
        <h1>{invest}</h1>
        <h1></h1>
      </div>
    </div>
  );
}
