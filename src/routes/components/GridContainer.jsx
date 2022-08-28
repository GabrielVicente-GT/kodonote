import React, { useState, useEffect, useContext } from 'react'
import { query, collection, onSnapshot } from 'firebase/firestore'
import { FirebaseContext } from '../../hooks/FirebaseProvider'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import Notebooks from './Notebooks'
import AddPopUp from './AddPopUp'
import PopUp from './PopUp'
import '../../styles/Notebooks.css'

const GridContainer = () => {
  const { db } = useContext(FirebaseContext)
  const { user } = useContext(UserAuthContext)

  const [notebooks, setNotebooks] = useState([])
  const [accountPopupButton, setAccountPopupButton] = useState(false)

  useEffect(() => {
    if (db) {
      onSnapshot(query(collection(db, 'Notebooks')), (snapshot) => {
        const userNotebooks = []
        snapshot.docs.forEach((document) => {
          console.log('Document', document.data())
          if (document.data().userId === user.uid) {
            console.log('User document date', document.data().lastEdited)
            userNotebooks.push(document.data())
          }
        })
        setNotebooks(userNotebooks)
      })
    }
  }, [db])

  console.log('User Notebooks', notebooks)

  return (
    <div className="tablero">
      <Notebooks 
        id={-1}
        title="Agregar Cuaderno +"
        lastTimeEdited=""
        className="notebook add-notebook"
        setNotebookMenu={setAccountPopupButton}
        color="#333"
      />
      {(notebooks.length) && notebooks.map((notebook, index) => (
        <div id={index}>
          <PopUp trigger={accountPopupButton} setTrigger={setAccountPopupButton}>
            <AddPopUp />
          </PopUp>
          <Notebooks
            id={index}
            title={notebook.title}
            lastTimeEdited={notebook.lastEdited}
            className="notebook"
            setNotebookMenu={setAccountPopupButton}
            color={notebook.color}
          />
        </div>
      ))}
    </div>
  )
}

export default GridContainer
