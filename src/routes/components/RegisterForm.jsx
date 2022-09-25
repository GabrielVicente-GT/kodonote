import React, { useContext, useState } from 'react'
import propTypes from 'prop-types'
import { UserAuthContext } from '../../hooks/UserAuthProvider'
import Information from '../../images/info.png'
import '../../styles/LoginPage.css'

const RegisterForm = ({
  setWelcome,
  giveLogin,
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
  registerPasswordConfirm,
  setRegisterPasswordConfirm,
  bgImage,
}) => {
  const { registerUser } = useContext(UserAuthContext)

  const [registerError, setRegisterError] = useState('')
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const handleError = (error) => {
    if (error === 'auth/weak-password') {
      setRegisterError('La contraseña debe tener al menos 6 caracteres')
    } else if (error === 'auth/invalid-email') {
      setRegisterError('Has ingresado un email inexistente o inválido')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (termsAgreed) {
      try {
        if (registerPassword === registerPasswordConfirm) {
          await registerUser(registerEmail, registerPassword)
        } else {
          alert('Las contraseñas ingresadas no coinciden')
        }
        giveLogin()
        setWelcome('¡Te has registrado!')
      } catch (error) {
        handleError(error.code)
      }
    }
  }

  const handleEnterSubmit = async () => {
    if (termsAgreed) {
      try {
        if (registerPassword === registerPasswordConfirm) {
          await registerUser(registerEmail, registerPassword)
        } else {
          alert('Las contraseñas ingresadas no coinciden')
        }
        giveLogin()
        setWelcome('¡Te has registrado!')
      } catch (error) {
        setRegisterError('')
      }
    }
  }

  document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') handleEnterSubmit()
  })

  return (
    <div className="logreg-form">
      <div
        className="logreg-form-image-alt"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="logreg-form-image-shadow-alt">
          <h1>El primer paso para tomar apuntes es registrarte</h1>
        </div>
      </div>
      <div className="logreg-form-info">
        <h1 className="lf-titulo">Regístrate</h1>
        {registerError && <p className="error">{registerError}</p>}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
          onChange={(event) => {
            setRegisterEmail(event.target.value)
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Contrase&ntilde;a"
          required=""
          id="input-password"
          onChange={(event) => {
            setRegisterPassword(event.target.value)
          }}
        />
        <input
          input="true"
          type="password"
          name="password"
          placeholder="Confirmar contrase&ntilde;a"
          required=""
          id="input-confirm-password"
          onChange={(event) => {
            setRegisterPasswordConfirm(event.target.value)
          }}
        />
        <div className="terms">
          <label htmlFor="terms-input">Acepto los términos y condiciones</label>
          <input
            type="checkbox"
            id="terms-input"
            onChange={(event) => setTermsAgreed(event.target.value)}
          />
          <button type="button" className="terms-button" onClick={() => setShowTerms(true)}>
            <img src={Information} alt="Information" />
          </button>
          {(showTerms) ? (
              <div className="terms-popup">
                <div className="terms-popup-menu">
                  <div className="terms-title">
                    <h1>Términos y condiciones</h1>
                  </div>
                  <div className="terms-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe aperiam impedit, quos, unde vel dolores, commodi qui porro expedita optio modi sit odio itaque! Dolorem, consectetur. Dolor, nam cumque?
                    Molestiae quo eum repellendus itaque ullam sapiente est, et perspiciatis fuga maxime sint culpa obcaecati vero? Est, illum. Culpa, repudiandae voluptatum corrupti nulla voluptatibus impedit nesciunt odit natus non quae?
                    Libero officia ullam quos amet blanditiis architecto cumque nisi harum error, quas aliquam enim aut consequatur. Vitae, placeat fugiat? Atque quisquam sint aspernatur perferendis harum? Consequuntur sit sunt repellat pariatur.
                    Doloribus, nulla. Nemo laborum voluptates repellat animi ducimus, repellendus praesentium alias non eveniet quos eius est quo earum amet! Ut pariatur iste, quo quibusdam consectetur vel rem laboriosam aspernatur aliquid!
                    Corrupti, iusto obcaecati fuga maiores et ut quasi itaque id, adipisci expedita a officiis? Omnis, suscipit quae cum laborum natus ipsum, tenetur, velit quod error nemo laudantium. Quia, deserunt tempora!
                    Quae hic molestiae beatae, sequi reiciendis deserunt voluptates dolorem sit ducimus, eligendi necessitatibus obcaecati assumenda? Odit tempora iusto excepturi tenetur totam eum vitae qui dolorem et mollitia eaque, eveniet magni?
                    Incidunt beatae animi corrupti assumenda vero. Soluta quisquam obcaecati incidunt eligendi tempora in illo deserunt eum! Asperiores reiciendis molestias, dolores quaerat consequuntur autem velit vel, officiis possimus, perspiciatis laboriosam error?
                    Quam ad modi quae aspernatur voluptatum libero iusto aperiam eos saepe a tempore distinctio dolore impedit corporis, possimus repellat! Iusto culpa nemo, repudiandae repellendus pariatur quae qui sint perferendis nesciunt!
                    Quaerat dolor consequatur exercitationem debitis tempora molestias voluptatum eligendi fuga aliquid. Vitae saepe illo unde cum eius facilis dolorum minus accusamus tenetur, quam quibusdam nam repellendus quia ea nihil sed.
                    Quae deserunt corporis aliquid nulla dolorum maxime nostrum obcaecati, architecto ea illum numquam! Eaque fuga illo distinctio, consequuntur dolorem commodi labore ratione eos quis nobis, quo deleniti dicta dignissimos omnis.
                    Quae hic molestiae beatae, sequi reiciendis deserunt voluptates dolorem sit ducimus, eligendi necessitatibus obcaecati assumenda? Odit tempora iusto excepturi tenetur totam eum vitae qui dolorem et mollitia eaque, eveniet magni?
                    Incidunt beatae animi corrupti assumenda vero. Soluta quisquam obcaecati incidunt eligendi tempora in illo deserunt eum! Asperiores reiciendis molestias, dolores quaerat consequuntur autem velit vel, officiis possimus, perspiciatis laboriosam error?
                    Quam ad modi quae aspernatur voluptatum libero iusto aperiam eos saepe a tempore distinctio dolore impedit corporis, possimus repellat! Iusto culpa nemo, repudiandae repellendus pariatur quae qui sint perferendis nesciunt!
                    Quaerat dolor consequatur exercitationem debitis tempora molestias voluptatum eligendi fuga aliquid. Vitae saepe illo unde cum eius facilis dolorum minus accusamus tenetur, quam quibusdam nam repellendus quia ea nihil sed.
                    Quae deserunt corporis aliquid nulla dolorum maxime nostrum obcaecati, architecto ea illum numquam! Eaque fuga illo distinctio, consequuntur dolorem commodi labore ratione eos quis nobis, quo deleniti dicta dignissimos omnis.
                  </div>
                  <div className="terms-close-button">
                    <button type="button" className="terms-popup-close-button" onClick={() => setShowTerms(false)}>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              null
            )}
        </div>
        <button type="button" className="form-btn-is" onClick={handleSubmit}>
          Registrarse
        </button>
        <span>
          ¿Ya tienes una cuenta? Inicia sesión{' '}
          <button type="button" className="link-button" onClick={giveLogin}>
            aquí
          </button>
        </span>
      </div>
    </div>
  )
}

RegisterForm.propTypes = {
  setWelcome: propTypes.func.isRequired,
  giveLogin: propTypes.func.isRequired,
  registerEmail: propTypes.string.isRequired,
  setRegisterEmail: propTypes.func.isRequired,
  registerPassword: propTypes.string.isRequired,
  setRegisterPassword: propTypes.func.isRequired,
  registerPasswordConfirm: propTypes.string.isRequired,
  setRegisterPasswordConfirm: propTypes.func.isRequired,
  bgImage: propTypes.string.isRequired,
}

export default RegisterForm
