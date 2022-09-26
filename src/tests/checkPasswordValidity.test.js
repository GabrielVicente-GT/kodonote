import checkPasswordValidity from '../utils/checkPasswordValidity'

test('Obtiene la validez de una contraseña creada', () => {
  expect(checkPasswordValidity('1234567890')).toBe(true)
})

test('Obtiene la validez de una contraseña creada', () => {
  expect(checkPasswordValidity('123456')).toBe(false)
})
