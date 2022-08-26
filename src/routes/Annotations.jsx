import React, { useState, useEffect, useContext } from 'react'
import { query, collection, onSnapshot, addDoc } from 'firebase/firestore'
import { FirebaseContext } from '../hooks/FirebaseProvider'
import '../styles/Annotations.css'

const Annotations = () => {
  const [notebook, setNotebook] = useState({ notebook: [] })
  const { db } = useContext(FirebaseContext)

  useEffect(() => {
    if (db) {
      onSnapshot(query(collection(db, 'Notebooks')), (snapshot) => {
        setNotebook(snapshot.docs[0].data())
      })
    }
  }, [db])

  const addSection = (sectionType) => {
    if (notebook.notebook.length === 0) {
      setNotebook({ notebook: [{ sectionType, value: '' }] })
    } else {
      setNotebook({
        notebook: [...notebook.notebook, { sectionType, value: '' }],
      })
    }
  }

  const removeSection = () => {
    setNotebook((previousNotebook) => {
      const temp = [...previousNotebook.notebook]
      temp.pop()
      return { notebook: temp }
    })
  }

  const saveNotebook = async () => {
    await addDoc(collection(db, 'Notebooks'), { notebook: notebook.notebook })
    alert('¡Cuaderno guardado!')
  }

  console.log('notebook', notebook.notebook)

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
        <button className="boton" type="button" onClick={saveNotebook}>
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
                contentBlock.sectionType === 'code'
                  ? 'code-area'
                  : 'notes-area'
              }
              onChange={(event) => {
                setNotebook((previousState) => {
                  console.log('previousState', previousState)
                  const temp = [...previousState.notebook]
                  temp[index].value = event.target.value
                  return { notebook: temp }
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
