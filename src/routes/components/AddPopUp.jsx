import React, { useState, useContext } from 'react'
import propTypes from 'prop-types'
import { collection, addDoc } from 'firebase/firestore'
import getCurrentDate from '../../utils/getCurrentDate'
import { FirebaseContext } from '../../hooks/FirebaseProvider'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import '../../styles/AddNotebook.css'

const AddPopUp = ({ trigger }) => {
  const { db } = useContext(FirebaseContext)
  const { user } = useContext(UserAuthContext)

  const [newNotebookColor, setNewNotebookColor] = useState()
  const [newNotebookName, setNewNotebookName] = useState()

  const getNewColor = (event) => setNewNotebookColor(event.target.value)

  const getNewName = (event) => setNewNotebookName(event.target.value)

  const handleNotebookCreation = async () => {
    trigger(false)
    await addDoc(collection(db, 'Notebooks'), {
      color: newNotebookColor,
      lastEdited: getCurrentDate(),
      title: newNotebookName,
      userId: user.uid,
      notebook: [],
    })
  }

  return (
    <div className="add-notebook-popup">
      <div className="add-notebook-title">
        <h1>Crear cuaderno</h1>
      </div>
      <div className="add-notebook-options">
        <div className="add-notebook-option-pair">
          <label htmlFor="name-input">Nombre</label>
          <input type="text" id="name-input" onInput={getNewName} />
        </div>
        <div className="add-notebook-option-pair">
          <label htmlFor="color-input">Color</label>
          <input type="color" id="color-input" onChange={getNewColor} />
        </div>
        <div className="add-notebook-option-pair">
          <label htmlFor="autosave-input">Autoguardar</label>
          <input type="checkbox" id="autosave-input" />
        </div>
      </div>
      <div className="add-notebook-buttons">
        <button
          type="button"
          onClick={handleNotebookCreation}
        >
          Crear cuaderno
        </button>
        <button
          type="button"
          onClick={() => trigger(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

AddPopUp.propTypes = {
  trigger: propTypes.func.isRequired,
}

export default AddPopUp
