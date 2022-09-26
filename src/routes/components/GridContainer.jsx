import React, { useState, useEffect, useContext } from 'react'
import { query, collection, onSnapshot } from 'firebase/firestore'
import propTypes from 'prop-types'
import { FirebaseContext } from '../../hooks/FirebaseProvider'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import { ThemeContext } from '../../hooks/ThemeProvider'
import Notebook from './Notebook'
import '../../styles/Notebooks.css'
import AddPopUp from './AddPopUp'

const GridContainer = ({ style }) => {
  const { db } = useContext(FirebaseContext)
  const { user } = useContext(UserAuthContext)
  const { theme } = useContext(ThemeContext)

  const [notebooks, setNotebooks] = useState([])
  const [activateNewNotebook, setActivateNewNotebook] = useState(false)

  useEffect(() => {
    if (db) {
      onSnapshot(query(collection(db, 'Notebooks')), (snapshot) => {
        const userNotebooks = []
        snapshot.docs.forEach((document) => {
          if (document.data().userId === user.uid) {
            userNotebooks.push(document.data())
          }
        })
        setNotebooks(userNotebooks)
      })
    }
  }, [db])

  useEffect(() => {
    console.log(theme.backgroundTheme.source)
  }, [])

  return (
    <div className="tablero" style={{ ...style, backgroundImage: `url(${theme.backgroundTheme.source})` }}>
      {(activateNewNotebook) ? (
        <div className="add-popup-container">
          <AddPopUp setActive={setActivateNewNotebook} />
        </div>
      ) : (
        null
      )}
      <div className="notebook add-notebook">
        <button type="button" className="add-notebook-button" onClick={() => setActivateNewNotebook(true)}>
          Agregar cuaderno
        </button>
      </div>
      {notebooks.length &&
        notebooks.map((notebook, index) => (
          <div id={index}>
            <Notebook
              id={index}
              title={notebook.title}
              lastEdited={notebook.lastEdited}
              className="notebook"
              color={notebook.color}
            />
          </div>
        ))
      }
    </div>
  )
}

GridContainer.propTypes = {
  style: propTypes.objectOf(node).isRequired,
}

export default GridContainer
