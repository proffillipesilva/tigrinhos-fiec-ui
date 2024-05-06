import React, {useState} from "react";
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "tigrinhos-fiec.firebaseapp.com",
    databaseURL: "https://tigrinhos-fiec-default-rtdb.firebaseio.com",
    projectId: "tigrinhos-fiec",
    storageBucket: "tigrinhos-fiec.appspot.com",
    messagingSenderId: "119350795797",
    appId: "1:119350795797:web:85143a803ed23dde13b81c"
  };
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const myGetToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BIwrZaSUXDbDHOil30ukbuw8MpCL05mSPOa6e8wiCs7s-2axUp1k0hcN3AXTkYtCD7gPLPZMvttrLMWSHeHAN9Y'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});