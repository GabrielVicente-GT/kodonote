import React from "react"
import ReactDOM from "react-dom"

//Firebase & aunthentication
// Esta variable se amndara a todas las paginas para saber con que usuario se está trabajando
import { auth } from "./firebase-config.js"

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogregPage auth={auth} />} />
        <Route path="/main" element={<App />} />
        <Route path="/editor" element={<EditorContainer />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
