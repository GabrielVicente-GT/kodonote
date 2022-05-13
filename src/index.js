import React from "react"
import ReactDOM from "react-dom"


// React Router
import { 
  BrowserRouter
} from "react-router-dom"

// HashRouter Router -> electron
import {
  HashRouter,
} from "react-router-dom"

// Pages
import App from "./App"

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
)
