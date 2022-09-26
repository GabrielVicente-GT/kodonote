import { handleError, handleSubmit } from '../utils/loginMethods'

describe("Aparece un error de inicio de sesion", () => {
    test('Mostrar cual fue el problema', () => {
        const error = 'auth/wrong-password'

        const currentTest = handleError(error)

        expect(currentTest).toBe('case 1')
    })
   })

describe("Se inicia sesion", () => {
    test('Debe mostrar el correo electronico del usuario en cuestión', () => {
        const email = 'm4rkg12@gmail.com'

        const pw = 'jpegmafia'

        const currentUser = handleSubmit(email, pw)

        expect(currentUser).toBe('m4rkg12@gmail.com')
    })
   })

