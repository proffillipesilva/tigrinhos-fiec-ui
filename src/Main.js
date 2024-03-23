import React, { useState } from "react";
import { Route, Routes, Outlet } from 'react-router-dom'
import Login from "./views/Login/Login";
import Games from "./views/Games/Games";
import Game from "./views/Games/Game/Game";

import { Link } from 'react-router-dom'
import AppHeader from "./components/AppHeader";
import { App } from 'konsta/react';

function Main() {

  return (
    <>
    <App theme="material">
   <AppHeader />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<Game />} />
        <Route path="*" element={<Login />} />
      </Routes>
      
    </App>
    </>
  );
}

export default Main;
