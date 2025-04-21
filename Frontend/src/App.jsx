import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Show from "./pages/Show";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/show" element={<Show />} />
    </Routes>
  );
}

export default App;
