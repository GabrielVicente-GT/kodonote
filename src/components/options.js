import React, { useState } from 'react';
import "../styles/Menu.css"
import AccoPopUp from '../components/PopupAccount'
import ConfigPopUp from '../components/PopupConfig'
import PopUp from '../components/PopUp'
import logo from "../graphic-resources/logo-negative.png"

const Options = ({ logOut }) => {

    const handleLogOut = async () => {
        try{
            await logOut()
        } catch(error){
            console.log(error.message)
        }
    }

    const [buttonPopupCuen, setButtonPopupCuen] = useState(false)
    const [buttonPopupConfi, setButtonPopupConfi] = useState(false)

    return (
        <div className="options">
            <img src={logo} alt="logo"></img>
            <input type="text" name="search-bar" id="search-bar" className="search-bar" placeholder="Buscar cuaderno"/>
            <div className="option-list">
                <button className="account-link" onClick={() => setButtonPopupCuen(true)}>Cuenta</button>
                <button className="config-link" onClick={() => setButtonPopupConfi(true)}>Configuración</button>
                <button className='log-out' onClick={handleLogOut}>Cerrar sesión</button>
            </div>
            <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
                <AccoPopUp/>
            </PopUp>
            <PopUp trigger={buttonPopupConfi} setTrigger={setButtonPopupConfi}>
                <ConfigPopUp/>
            </PopUp>
        </div>
        
    )
}

export default Options;
