import React from 'react';
import "../styles/Menu.css"

const AddPopUp = () => {
    return (
        <div className='popup-body'>
            <div className="popup preferences-link-popup hide" id="preferences-link-popup">
                <div className="popup-body">
                    <div className="option-pair"><h2 className="titulo-popup">Cuadernos</h2></div>
                    <div className="option-pair">
                    <label className="popup-text" htmlFor="identation-input">Nombre del cuaderno: </label>
                        <input type="text" id="name-input"/>
                    </div>
                    <div className="option-pair">
                        <label className="popup-text" htmlFor="identation-input">Color del cuaderno: </label>
                        <input type="color" id="color-input"/>
                    </div>
                    <button className='CreateNotebook'>Crear cuaderno</button>
                </div>
            </div>
        </div>
    )
}

export default AddPopUp