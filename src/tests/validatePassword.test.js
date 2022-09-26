import validatePassword from '../utils/validatePassword'

test('Valida que las dos contraseñas fueran iguales', () => {
  expect(validatePassword('0123456789', '0123456789')).toBe(true)
})

test('Valida que las dos contraseñas fueran iguales', () => {
  expect(validatePassword('123456', '0123456')).toBe(false)
})
