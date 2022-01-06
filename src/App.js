import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './screens/home';



const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Chat!</h1>
      </header>
      <Home />
    </div>
  );
}

export default App;