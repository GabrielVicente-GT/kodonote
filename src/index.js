import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import firebaseConfig from "./firebase-config"
//Firebase & aunthentication
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render((
    <App />
), document.getElementById("root"))
