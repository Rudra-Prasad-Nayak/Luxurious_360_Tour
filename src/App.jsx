import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RoomView from "./components/RoomView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomName" element={<RoomView />} />
    </Routes>
  );
}

export default App;
