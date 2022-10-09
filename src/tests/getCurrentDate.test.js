import getCurrentDate from '../utils/getCurrentDate'

test('Obtiene la fecha actual en un formato legible', () => {
  expect(getCurrentDate()).toBe('09/10/2022')
})
