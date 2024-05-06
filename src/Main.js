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
import { Button, Toast } from "react-bootstrap";
import { getToken } from "firebase/messaging";
import { myGetToken, onMessageListener } from "./firebase";



function Main() {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  myGetToken(setTokenFound);

  onMessageListener().then(payload => {
    setShow(true);
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  const loading = useSelector((state) => state.isLoading)

  return (
    <>
    <App theme="material">
      <AppHeader />
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200
        }}>
          <Toast.Header>
            <img src="https://kto.kgp-cdn.com/kto/2023/11/20130407/Fortune-oxx-654d1007a30b7.jpg" />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>
      <header className="App-header">
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>
    
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
