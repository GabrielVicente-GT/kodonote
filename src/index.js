import React from "react"
import ReactDOM from "react-dom"


//REact Router
import { BrowserRouter
  } from "react-router-dom"

// React router -> electron
import {
    HashRouter,
  } from "react-router-dom";

// Pages
import App from "./App";




ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);
