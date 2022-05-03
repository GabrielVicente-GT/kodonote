import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/App.css"
import GridContainer from "./components/ContainerNB.js"
import Options from "./components/options.js"
import PrefPopUp from "./components/PopupPref.js"
import { useUserAuth } from "./auth/UserAuthContext"

const MainMenu = () => {

    // Obtener metodos del proveedor de contexto
    // logOut se manda a opciones para cerrar la sesión
    const { user, logOut } = useUserAuth()

    return (
      <body>
        <header class="header">
          <h2 class="title">{user ? "Hola de nuevo " + user?.email + "!" : "Kodonote"}</h2>
        </header>
        <div class="content">
          <Options logOut={logOut}/>
          <GridContainer />
          <PrefPopUp />
        </div>
      </body>
    );
}

export default MainMenu