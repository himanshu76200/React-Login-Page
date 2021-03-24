import React from "react";
import Login from "./Login";

// var isLoggedIn = false;

var userIsRegistered = false;


function App() {
  return (
    <div className="container">{
      <Login status={userIsRegistered}/>
    }
    </div>
  );
}

export default App;
