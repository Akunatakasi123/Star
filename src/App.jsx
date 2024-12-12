import React from "react";
import Calculator from "./Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{
        color: 'white',
        textShadow: '2px 2px black'
      }}>
        Calculator App
      </h1>
      <Calculator />
    </div>
  );
}

export default App;