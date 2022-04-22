import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/Menu.css"

const Options = () => {

    return (
        <aside class="options">
            <div class="search-bar-box">
                <input type="text" name="search-bar" id="search-bar" class="search-bar" placeholder="Buscar cuaderno"/>
            </div>
            <div class="option-list">
                <button class="account-link">Cuenta</button>
                <button class="config-link">Configuración</button>
                <button class="preferences-link">Preferencias</button>
            </div>
        </aside>
    )
}

export default Options;
