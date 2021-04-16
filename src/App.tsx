import React from "react";
import "./App.css";

import UserList from "./components/UserList/UserList";
import User from "./components/User/User";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">We-Blog</header>
      <Route exact path="/" component={UserList} />
      <Route path="/users/:id" component={User} />
    </div>
  );
}

export default App;
