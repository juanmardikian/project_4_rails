import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";



import Welcome from "./Components/Welcome";
import SignUp from "./Components/SignUp";
import User from "./Components/User";

function App() {
  const [users, setUsers] = useState([]);
  const [stocks, setStocks] = useState([]);

  // First thing, the axios

  useEffect(() => {
    // setStocks(get());
  }, []);

  const getAllUsers = () => {
    let url = "http://localhost:3000/users";
    axios.get(url).then(res => {
      setUsers(res.data);
    });
  };


  return (
    <div className="App">
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/SignUp">
        <SignUp />
      </Route>
      <Route exact path="/User">
        <User stocks={stocks}/>
      </Route>
    </div>
  );
}

export default App;
