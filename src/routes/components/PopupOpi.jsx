import React from 'react'
import propTypes from 'prop-types'
import '../../styles/OpinionMenu.css'

const OpinPopUp = ({ style, activePopup }) => {
  const handleClose = () => activePopup('off')

  return (
    <div style={style}>
      <div className="opinion-menu">
        <button type="button" className="btn-close" onClick={handleClose}>
          {' '}
          x{' '}
        </button>
        <div className="option-pair">
          <h2 className="titulo-popup">Cuéntanos tu opinión</h2>
        </div>
        <div className="option-pair">
          <p>
            Gracias por utlizar Kodo Note.
            <br />
            <br />
            Como desarrolladores de la aplicación 
            tu opinión nos importa para poder hacer cambios en la plataforma y mejorar 
            la experiencia de nuestros usuarios al momento de usarla.
            <br />
            <br />
            Por ello, a continuación puedes encontrar una serie de preguntas, enunciados 
            e instrucciones para que podamos calificar tu experiencia y tengas la 
            oportunidad de expresar tu opinión. 
          </p>
          <form method="get">
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                ¿Cuánto tiempo lleva usando KodoNote? (meses)
              </label>
              <input id="opinion-p1" type="number" min ="0" />
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                ¿Con qué frecuencia utiliza KodoNote?
              </label>
              <select id="opinion-p2" list="Opi-frecuenciaUso" >
                <option value="1">Todos los días</option>
                <option value="2">Múltiples veces a la semana</option>
                <option value="3">Una vez a la semana</option>
                <option value="4">Varias veces en un mes</option>
                <option value="5">Rara vez</option>
              </select>
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                En una escala del uno al 10, ¿cómo ha sido su experiencia utilizando KodoNote?
              </label>
              <input id="opinion-p9" type="number" min ="1" max="10"/>
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                ¿Te ha ayudado KodoNote en tus estudios de programación y otros cursos?
              </label>
              <select id="opinion-p3" list="Opi-frecuenciaUso" >
                <option value="1">Sí</option>
                <option value="2">Medio</option>
                <option value="3">No</option>
              </select>
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                ¿Qué características de KodoNote consideras más valiosas?
              </label>
              <select id="opinion-p4" list="Opi-frecuenciaUso" >
                <option value="1">La personalización</option>
                <option value="2">El modo de apuntes de notas</option>
                <option value="3">El modo de organización de notas (cuadernos)</option>
              </select>
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                Si pudieras cambiar una función de KodoNote, ¿cuál sería y por qué?
              </label>
              <input id="option-p5" type="text"/>
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                Si pudieras agregar una función a KodoNote, ¿cuál sería y por qué?
              </label>
              <input id="option-p6" type="text"/>
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                En una escala del uno al 10, ¿qué tan probable es que recomiendes KodoNote a un amigo o conocido?
              </label>
              <input id="opinion-p7" type="number" min ="1" max="10"/>
            </div>
            <div className="option-pair">
              <label className="popup-text" htmlFor="display-mode-form">
                A continuación puede dejar cualquier otro comentario sobre KodoNote
              </label>
              <input id="option-p8" type="text"/>
            </div>
            <div className="option-pair">
              <button id="opinion-enviar" className="popup-opin-send" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

OpinPopUp.propTypes = {
  style: propTypes.node.isRequired,
  activePopup: propTypes.node.isRequired,
}

export default OpinPopUp