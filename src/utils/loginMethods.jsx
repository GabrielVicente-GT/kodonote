import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const handleError = (error) => {
  let msg = ''

  if (error === 'auth/wrong-password') {
    console.log('Contraseña incorrecta')
    msg = 'case 1'
  }

  if (error === 'auth/invalid-email') {
    console.log('Has ingresado un email inexistente o invalido')
    msg = 'case 2'
  }

  if (error === 'auth/user-not-found') {
    console.log('Este correo no está registrado')
    msg = 'case 3'
  }

  return msg
}

const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

const handleSubmit =  (loginEmail, loginPassword) => {
  let currentEmail = loginEmail
  console.log(currentEmail)

  try {

    logIn(loginEmail, loginPassword)
    currentEmail = loginEmail

  } catch (error) {

    console.log(error.code)
    currentEmail = loginEmail
  }

  return currentEmail
}

export { handleError, handleSubmit }
