import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import { FocusedNotebookContext } from '../../hooks/FocusedNotebookProvider'
import '../../styles/Notebooks.css'

const Notebook = ({
  id,
  title,
  lastEdited,
  className,
  setNotebookMenu,
  color,
}) => {
  const { user } = useContext(UserAuthContext)
  const { setFocusedNotebook } = useContext(FocusedNotebookContext)

  return (
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
          onClick={() => {
            setFocusedNotebook({
              userId: user.uid,
              color,
              title,
            })
          }}
        >
          <h4>{title}</h4>
          <p>{lastEdited}</p>
        </Link>
      )}
    </div>
  )
}

Notebook.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  lastEdited: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  setNotebookMenu: propTypes.func.isRequired,
  color: propTypes.string.isRequired,
}

export default Notebook
