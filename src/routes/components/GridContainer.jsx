import React, { useState, useEffect, useContext } from 'react'
import propTypes from 'prop-types'
import { query, collection, onSnapshot } from 'firebase/firestore'
import { FirebaseContext } from '../../hooks/FirebaseProvider'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import Notebooks from './Notebooks'
import AddPopUp from './AddPopUp'
import PopUp from './PopUp'
import '../../styles/Notebooks.css'

const GridContainer = ({ notes }) => {
  const { db } = useContext(FirebaseContext)
  const { user } = useContext(UserAuthContext)

  const [notebooks, setNotebooks] = useState([])
  const [buttonPopupCuen, setButtonPopupCuen] = useState(false)

  useEffect(() => {
    if (db) {
      onSnapshot(query(collection(db, 'Notebooks')), (snapshot) => {
        const userNotebooks = []
        snapshot.docs.forEach((document) => {
          console.log('Document', document.data())
          if (document.data().userId === user.uid) {
            console.log('User document date', document.data().lastEdited.toDate())
            userNotebooks.push(document.data())
          }
        })
        setNotebooks(userNotebooks)
      })
    }
  }, [db])

  console.log('User Notebooks', notebooks)

  return (notes === '') ? (
    <div className="tablero">
      {notebooks.map((notebook, index) => (
        <div id={index}>
          <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
            <AddPopUp />
          </PopUp>
          <Notebooks
            id={0}
            title={notebook.title}
            lastTimeEdited={notebook.lastEdited.toDate()}
            className="notebook"
            setNotebookMenu={setButtonPopupCuen}
            color={notebook.color}
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="tablero">
      <div>
        <PopUp trigger={buttonPopupCuen} setTrigger={setButtonPopupCuen}>
          <AddPopUp />
        </PopUp>
        <Notebooks
          id={0}
          title="Agregar Cuaderno"
          lastTimeEdited=""
          className="notebook"
          setNotebookMenu={setButtonPopupCuen}
          color="#777"
        />
      </div>
    </div>
  )
}

GridContainer.propTypes = {
  notes: propTypes.string.isRequired,
}

export default GridContainer
