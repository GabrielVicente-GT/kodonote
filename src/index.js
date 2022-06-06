import React from "react"
import ReactDOM from "react-dom"
import { FirebaseProvider } from "./hooks/FirebaseProvider"

import { BrowserRouter } from "react-router-dom"

// HashRouter Router -> electron
import { HashRouter } from "react-router-dom"

// Pages
import App from "./App"

ReactDOM.render(
    <HashRouter>
      <FirebaseProvider>
        <App/>
      </FirebaseProvider>
    </HashRouter>,
  document.getElementById("root")
)
