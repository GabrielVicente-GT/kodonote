import React from 'react'
import '../styles/Annotations.css'
import TextEditor from './TextEditor.js'

const Annotations = () => {
  
  const [notebook, setNotebook] = React.useState([])

  const addSection = (sectionType) => {
    setNotebook([{ sectionType, value: '' }, ...notebook])
  }

  const removeSection = () => {
    setNotebook((esq) => {
      const temp = [...esq]
      temp.shift()
      return temp
    })
  }

  console.log("notebook", notebook)

  return (
    <div className='laboratorioStyle'>
      <TextEditor/>
      <div className='editor'>
        <button className='boton' type="button" onClick={() => addSection('code')} >Agregar código</button>
        <button className='boton' type="button" onClick={() => addSection('text')} >Agregar nota</button>
        <button className='boton' type="button" onClick={removeSection} >Borrar sección</button>
      </div>
      <div className='paper'>
        <div className="estiloCompleto">
          {notebook.map((linea, indexA) => (
            <textarea value={linea.value} key={(indexA).toString()} className={(linea.sectionType === 'code') ? 'pruebaEmotion' : 'pruebaEmotion2'} onChange={(event) => {
              setNotebook((previousState) => {
                const temp = [...previousState]
                temp[indexA].value = event.target.value
                return temp
              })
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Annotations
