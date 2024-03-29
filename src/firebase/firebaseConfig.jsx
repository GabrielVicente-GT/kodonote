import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfigInfo = {
  apiKey: 'AIzaSyDDJcbo1oRvSTTT_FcLJ8cPTRoVq0gVFlc',
  authDomain: 'kodonote.firebaseapp.com',
  projectId: 'kodonote',
  storageBucket: 'kodonote.appspot.com',
  messagingSenderId: '223135808540',
  appId: '1:223135808540:web:9b595e4b74c4a14b89f3d9',
  measurementId: 'G-EVB7GZ1F7T',
}

export { firebaseConfigInfo }

const app = initializeApp(firebaseConfigInfo)
export const auth = getAuth(app)
