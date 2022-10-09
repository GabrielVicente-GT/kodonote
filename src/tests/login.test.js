import { handleError, handleSubmit } from '../utils/loginMethods'

describe("Contraseña incorrecta en inicio de sesion", () => {
    test('Mostrar cual fue el problema', () => {
        const error = 'auth/wrong-password'

        const currentTest = handleError(error)

        expect(currentTest).toBe('case 1')
    })
   })

describe("Valor irreconocible en inicio de sesion", () => {
    test('Mostrar cual fue el problema', () => {
        const error = 'auth/invalid-email'

        const currentTest = handleError(error)

        expect(currentTest).toBe('case 2')
    })
   })

describe("Correo no registrado en inicio de sesion", () => {
    test('Mostrar cual fue el problema', () => {
        const error = 'auth/user-not-found'

        const currentTest = handleError(error)

        expect(currentTest).toBe('case 3')
    })
   })

describe("Se inicia sesion", () => {
    test('Debe mostrar el correo electronico del usuario en cuestión', async () => {
        const email = 'm4rkg12@gmail.com'

        const pw = 'jpegmafia'

        const currentUser = await handleSubmit(email, pw)

        expect(currentUser).toBe('m4rkg12@gmail.com')
    })
   })

   describe("Se ingresan usuarios validos", () => {
    test('No permitir el inicio de sesion', async () => {
        const email = 'aaaa'

        const pw = 'aaaa'

        const currentUser = await handleSubmit(email, pw)

        expect(currentUser).toBe('error')
    })
   })

