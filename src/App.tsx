import React from "react";
import "./App.css";

import PostUsers from "./components/PostUsers/PostUsers";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <header className="App-header">We-Blog</header>
      <PostUsers />
      <User />
    </div>
  );
}

export default App;
