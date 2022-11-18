import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const handleError = (error) => {
  let msg = ''

  if (error === 'auth/wrong-password') {
    msg = 'case 1'
  }

  if (error === 'auth/invalid-email') {
    msg = 'case 2'
  }

  if (error === 'auth/user-not-found') {
    msg = 'case 3'
  }

  return msg
}

const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

const handleSubmit = async (loginEmail, loginPassword) => {
  
  let currentEmail = loginEmail

  try {

    await logIn(loginEmail, loginPassword)
    currentEmail = loginEmail

  } catch (error) {

    currentEmail = 'error'
  }

  return currentEmail
}

export { handleError, handleSubmit }
