import React from 'react'
import '../../styles/Menu.css'

const PopUp = (props) => (props.trigger ? (
  <div className="popup">
    <button
      className="btn-close"
      onClick={() => props.setTrigger(false)}
      type="button"
    >
      x
    </button>
    {props.children}
  </div>
) : (
  ''
))

export default PopUp
