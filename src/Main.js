import React, { useState } from "react";
import { Route, Routes, Outlet } from 'react-router-dom'
import Login from "./views/Login/Login";
import Games from "./views/Games/Games";
import Game from "./views/Games/Game/Game";

import { Link } from 'react-router-dom'

function Main() {

  return (
    <>
   <header>
    <ul>
      <li><Link to={"login"}>Login</Link></li>
      <li><Link to={"games"}>Games</Link></li>
    </ul>
   </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<Game />} />
        <Route path="*" element={<Login />} />
      </Routes>
      
    </>
  );
}

export default Main;
