import React from "react"
import ReactDOM from "react-dom"
import firebaseConfig from "./firebase-config"

//Firebase & aunthentication
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

//REact Router
import { BrowserRouter, Routes, Route 
  } from "react-router-dom"

// React router -> electron
import {
    HashRouter,
  } from "react-router-dom";
// Pages
import LogregPage from "./LogregPage"
import App from "./App";
import EditorContainer from "./EditorContainer"

ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<LogregPage />} />
        <Route path="/main" element={<App />} />
        <Route path="/editor" element={<EditorContainer />} />
      </Routes>
    </HashRouter>,
    document.getElementById("root")
  );
