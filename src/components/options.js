import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/Menu.css"
import logo from "../graphic-resources/logo-negative.png"

const Options = () => {

    return (
        <div class="options">
            <img src={logo}></img>
            <input type="text" name="search-bar" id="search-bar" class="search-bar" placeholder="Buscar cuaderno"/>
            <div class="option-list">
                <button class="account-link">Cuenta</button>
                <button class="config-link">Configuración</button>
                <button class="preferences-link">Preferencias</button>
            </div>
        </div>
    )
}

export default Options;
