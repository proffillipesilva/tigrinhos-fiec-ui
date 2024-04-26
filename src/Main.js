import React, { useState } from "react";
import { Route, Routes, Outlet } from 'react-router-dom'
import Login from "./views/Login/Login";
import Games from "./views/Games/Games";
import Game from "./views/Games/Game/Game";

import { Link } from 'react-router-dom'
import AppHeader from "./components/AppHeader";
import { App } from 'konsta/react';
import Manage from "./views/Manage/Manage";
import Play from "./views/Play/Play";
import MyLoading from "./components/MyLoading";
import { useSelector } from "react-redux";

function Main() {

  const loading = useSelector((state) => state.isLoading)

  return (
    <>
    <App theme="material">
    <AppHeader />
    {loading ? <div style={{height: "600px"}}>
         <MyLoading  /> </div> :
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/manage/:id" element={<Manage />} />
        <Route path="/games/:id" element={<Game />} />
        <Route path="/play" element={<Play />} />
        <Route path="*" element={<Login />} />
      </Routes>
  }
      
    </App>
    </>
  );
}

export default Main;
