import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Notebooks.css'

const Notebooks = ({
  id, Title, LastTimeUse, Classname, setNBmenu, Color,
}) => (
  <div key={id} className={Classname}>
    {Title === 'Agregar Cuaderno +' ? (
      <Link to="/main" className="link" onClick={() => setNBmenu(true)}>
        <h4>{Title}</h4>
      </Link>
    ) : (
      <Link
        to={Title === 'Agregar Cuaderno +' ? '/main' : '/editor'}
        className="link"
        style={{ backgroundColor: Color }}
      >
        <h4>{Title}</h4>
        <p>{LastTimeUse}</p>
      </Link>
    )}
  </div>
)

export default Notebooks
