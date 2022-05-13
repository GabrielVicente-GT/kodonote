import React from "react"
import ReactDOM from "react-dom"


//REact Router
import { BrowserRouter
  } from "react-router-dom"

// Hashrouter router -> electron
import {
    HashRouter,
  } from "react-router-dom";

// Pages
import Annotations from "./components/Annotations";




ReactDOM.render(
    <BrowserRouter>
      <Annotations />
    </BrowserRouter>,
  document.getElementById("root")
);
