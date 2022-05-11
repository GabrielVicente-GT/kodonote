import React from 'react'
import "../styles/Menu.css"

const PopUp = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div>
                <button class="btn-close" onClick={() => props.setTrigger(false)} type='button'>x</button>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default PopUp