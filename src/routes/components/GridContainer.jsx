import React, { useState } from 'react'
import propTypes from 'prop-types'
import Notebooks from './Notebooks'
import data from '../../static/notebooks.json'
import AddPopUp from './AddPopUp'
import PopUp from './PopUp'
import '../../styles/Notebooks.css'

const GridContainer = ({ notes }) => {
  const [buttonPopupCuen, setButtonPopupCuen] = useState(false)

  const localizarNotebook = (Titlenotebook) =>
    data.filter((notebook) => notebook.Title === Titlenotebook)[0] || ' '

  const locatedNotes = localizarNotebook(notes)

  if (notes === ' ' || locatedNotes === ' ') {
    return (
      <div className="tablero">
        {data.map((cuaderno, index) => (
          <div id={index}>
            <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
              <AddPopUp />
            </PopUp>
            <Notebooks
              key={cuaderno.id}
              Title={cuaderno.Title}
              LastTimeUse={cuaderno.LastTimeUse}
              Classname={cuaderno.Classname}
              setNBmenu={setButtonPopupCuen}
              Color={cuaderno.Color}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="tablero">
      <div>
        <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
          <AddPopUp />
        </PopUp>
        <Notebooks
          key={notes.id}
          Title={notes.Title}
          LastTimeUse={notes.LastTimeUse}
          Classname={notes.Classname}
          setNBmenu={setButtonPopupCuen}
          Color={notes.Color}
        />
      </div>
    </div>
  )
}

GridContainer.propTypes = {
  notes: propTypes.string.isRequired,
}

export default GridContainer
