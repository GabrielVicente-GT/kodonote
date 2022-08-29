import React, { useState, useContext } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import moment from 'moment'
import { FirebaseContext } from '../../hooks/FirebaseProvider'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import '../../styles/Menu.css'

const AddPopUp = () => {
  const { db } = useContext(FirebaseContext)
  const { user } = useContext(UserAuthContext)

  const [newNotebookColor, setNewNotebookColor] = useState()
  const [newNotebookName, setNewNotebookName] = useState()

  const getNewColor = (event) =>
    setNewNotebookColor(event.target.value)

  const getNewName = (event) =>
    setNewNotebookName(event.target.value)

  const handleNotebookCreation = async () => {
    await addDoc(collection(db, 'Notebooks'), {
      color: newNotebookColor,
      lastEdited: moment().format('DD/MM/YYYY'),
      title: newNotebookName,
      userId: user.uid,
      notebook: []
    })
  }

  return (
    <div className="popup-body">
      <div
        className="popup preferences-link-popup hide"
        id="preferences-link-popup"
      >
        <div className="popup-body">
          <div className="option-pair">
            <h2 className="titulo-popup">Cuadernos</h2>
          </div>
          <div className="option-pair">
            <label className="popup-text" htmlFor="identation-input">
              Nombre del cuaderno:{' '}
            </label>
            <input type="text" id="name-input" onInput={getNewName} />
          </div>
          <div className="option-pair">
            <label className="popup-text" htmlFor="identation-input">
              Color del cuaderno:{' '}
            </label>
            <input type="color" id="color-input" onChange={getNewColor} />
          </div>
          <button
            type="button"
            className="CreateNotebook"
            id="InputColor"
            onClick={handleNotebookCreation}
          >
            Crear cuaderno
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPopUp
