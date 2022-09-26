import checkEmailValidity from '../utils/checkEmailValidity'

test('Obtiene la validez de una dirección de email', () => {
  expect(checkEmailValidity('tar20017@uvg.edu.gt')).toBe(true)
})
