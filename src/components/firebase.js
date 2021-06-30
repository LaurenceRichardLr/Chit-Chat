import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB2hqukGZT5nHOCcyh1bvLARlPhwg8ewR8",
  authDomain: "chit-chat-6a599.firebaseapp.com",
  projectId: "chit-chat-6a599",
  storageBucket: "chit-chat-6a599.appspot.com",
  messagingSenderId: "942042485833",
  appId: "1:942042485833:web:328273234500f47a839b98"
}).auth();