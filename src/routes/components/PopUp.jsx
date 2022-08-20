import React from 'react'
import propTypes from 'prop-types'
import '../../styles/Menu.css'

const PopUp = ({ trigger, setTrigger, children }) =>
  trigger ? (
    <div className="popup">
      <button
        className="btn-close"
        onClick={() => setTrigger(false)}
        type="button"
      >
        x
      </button>
      {children}
    </div>
  ) : (
    ''
  )

PopUp.propTypes = {
  trigger: propTypes.bool.isRequired,
  setTrigger: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
}

export default PopUp
