import React from "react"
import "../styles/Menu.css"

const PrefPopUp = () => {
    return (
        <div class="popup preferences-link-popup hide" id="preferences-link-popup">
            <div class="popup-body">
                <button class="btn-close">&times;</button>
                <div class="option-pair"><h2 class="titulo-popup">Preferencias</h2></div>
                <div class="option-pair">
                    <label class="popup-text" htmlFor="dark-mode-checkbox">Modo Oscuro</label>
                    <input type="checkbox" id="dark-mode-checkbox"/>
                </div>
                <div class="option-pair">
                    <label class="popup-text" htmlFor="identation-input">Espacios de Identación</label>
                    <input type="number" min="2" max="8" id="identation-input"/>
                </div>
                <div class="option-pair">
                    <label class="popup-text" htmlFor="display-mode-form">Vista de Cuadernos</label>
                    <form action="get"/>
                        <label class="popup-text" htmlFor="row-radio-button">Filas</label>
                        <input type="radio" name="display-mode" id="row-radio-button"/>
                        <label class="popup-text" htmlFor="column-radio-button">Columnas</label>
                        <input type="radio" name="display-mode" id="column-radio-button"/>
                </div>
            </div>
        </div>
    )
}

export default PrefPopUp;