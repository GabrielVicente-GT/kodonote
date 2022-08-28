import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../styles/Notebooks.css'

const Notebooks = ({
  id,
  title,
  lastEdited,
  className,
  setNotebookMenu,
  color,
}) => (
  <div key={id} className={className}>
    {title === 'Agregar Cuaderno +' ? (
      <Link to="/main" className="link" onClick={() => setNotebookMenu(true)}>
        <h4>{title}</h4>
      </Link>
    ) : (
      <Link
        to={title === 'Agregar Cuaderno +' ? '/main' : '/editor'}
        className="link"
        style={{ backgroundColor: color }}
      >
        <h4>{title}</h4>
        <p>{lastEdited.toString()}</p>
      </Link>
    )}
  </div>
)

Notebooks.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  lastEdited: propTypes.instanceOf(Date).isRequired,
  className: propTypes.string.isRequired,
  setNotebookMenu: propTypes.func.isRequired,
  color: propTypes.string.isRequired,
}

export default Notebooks
