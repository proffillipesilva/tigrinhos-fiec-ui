importScripts("https://cdnjs.cloudflare.com/ajax/libs/firebase/10.11.1/firebase-app-compat.min.js");
importScripts("https://cdnjs.cloudflare.com/ajax/libs/firebase/10.11.1/firebase-messaging-compat.min.js");
const firebaseConfig = {
  apiKey: "AIzaSyDvX35wuBNftMy219zaZJvRzFzohX7MsI4",
  authDomain: "tigrinhos-fiec.firebaseapp.com",
  databaseURL: "https://tigrinhos-fiec-default-rtdb.firebaseio.com",
  projectId: "tigrinhos-fiec",
  storageBucket: "tigrinhos-fiec.appspot.com",
  messagingSenderId: "119350795797",
  appId: "1:119350795797:web:85143a803ed23dde13b81c"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage (function(payload) {
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon
    };
    return self.registration.showNotification(payload.notification.title, notificationOption);
});