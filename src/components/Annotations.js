import React from 'react'
import '../styles/Annotations.css'
import TextEditor from './TextEditor.js'


const Annotations = () => {
  
  const [esquemaTotal, setesquemaTotal] = React.useState(['0'])

  const AddCodeSection = () => {
    setesquemaTotal(['+',...esquemaTotal])
  }

  const AddNormalSection = () => {
    setesquemaTotal(['-',...esquemaTotal])
  }
  const RemoveSection = () => {
    setesquemaTotal((esq) => {
      const temp = [...esq]
      const y = temp.findIndex((row) => row.indexOf('0') > -1)
      if(y>-1){
        temp[y-1]='0'
      }
      return temp
    })
  }

  return (
      <div className='laboratorioStyle'>
        <TextEditor/>
        <div  className='editor'>
          <button className='boton' type="button" onClick={AddCodeSection} >Agregar código</button>
          <button className='boton' type="button" onClick={AddNormalSection} >Agregar nota</button>
          <button className='boton' type="button" onClick={RemoveSection} >Borrar sección</button>
        </div>
        <div className='paper'>
          <div className="estiloCompleto">
            {
              esquemaTotal.map((linea, indexA) => {
                if (linea === '+') {
                  return <textarea key={(indexA).toString()} className='pruebaEmotion' />
                } else if (linea === '-') {
                  return <div className='espacio' key={(indexA).toString()}>
                            <textarea key={(indexA).toString()} className='pruebaEmotion2'/>
                        </div>
                          
                }
                return null
              })
          }
          </div>
        </div>
      </div>
    
  )
}

export default Annotations
