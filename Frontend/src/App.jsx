import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Show from "./pages/Show";

function App() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);

    if (token) {
      setSession(true);
    } else {
      setSession(false);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/upload" element={session ? <Upload /> : <Login />} />
      <Route path="/show" element={session ? <Show /> : <Login />} />
    </Routes>
  );
}

export default App;
