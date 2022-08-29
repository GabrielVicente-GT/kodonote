import React, { useState, useEffect, useContext } from 'react'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from 'firebase/firestore'
import { FirebaseContext } from '../hooks/FirebaseProvider'
import { FocusedNotebookContext } from '../hooks/FocusedNotebookProvider'
import '../styles/Annotations.css'

const Annotations = () => {
  const { db } = useContext(FirebaseContext)
  const { focusedNotebook } = useContext(FocusedNotebookContext)

  const [notebookId, setNotebookId] = useState()
  const [notebook, setNotebook] = useState({
    userId: focusedNotebook.userId,
    color: focusedNotebook.color,
    title: focusedNotebook.title,
    lastEdited: '',
    notebook: [],
  })
  

  useEffect(() => {
    if (db) {
      onSnapshot(query(collection(db, 'Notebooks')), (snapshot) => {
        snapshot.docs.forEach((document) => {
          const data = document.data()
          if (
            data.userId === focusedNotebook.userId &&
            data.title === focusedNotebook.title
          ) {
            setNotebook(data)
            setNotebookId(document.id)
          }
        })
      })
    }
  }, [db])

  const addSection = (sectionType) => {
    if (notebook.notebook.length === 0) {
      setNotebook({ ...notebook, notebook: [{ sectionType, value: '' }] })
    } else {
      setNotebook({
        ...notebook,
        notebook: [...notebook.notebook, { sectionType, value: '' }],
      })
    }
  }

  const removeSection = () => {
    setNotebook((previousNotebook) => {
      const temp = [...previousNotebook.notebook]
      temp.pop()
      return { ...notebook, notebook: temp }
    })
  }

  const saveNotebook = async (title) => {
    console.log('Notebook title', title)
    const userNotebook = doc(db, 'Notebooks', notebookId)
    const newFields = { ...notebook, notebook: notebook.notebook }
    await updateDoc(userNotebook, newFields)
    alert('¡Cuaderno guardado!')
  }

  return (
    <div className="laboratorioStyle">
      <div className="editor">
        <button
          className="boton"
          type="button"
          onClick={() => addSection('code')}
        >
          Agregar código
        </button>
        <button
          className="boton"
          type="button"
          onClick={() => addSection('text')}
        >
          Agregar nota
        </button>
        <button className="boton" type="button" onClick={removeSection}>
          Borrar sección
        </button>
        <button
          className="boton"
          type="button"
          onClick={() => saveNotebook(notebook.title)}
        >
          Guardar cuaderno
        </button>
      </div>
      <div className="paper">
        <div className="estiloCompleto">
          {notebook.notebook.map((contentBlock, index) => (
            <textarea
              value={contentBlock.value}
              key={index.toString()}
              className={
                contentBlock.sectionType === 'code' ? 'code-area' : 'notes-area'
              }
              onChange={(event) => {
                setNotebook((previousState) => {
                  console.log('previousState', previousState)
                  const temp = [...previousState.notebook]
                  temp[index].value = event.target.value
                  return { ...notebook, notebook: temp }
                })
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Annotations
