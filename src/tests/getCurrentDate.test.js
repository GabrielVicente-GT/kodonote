import getCurrentDate from '../utils/getCurrentDate'

test('Obtiene la fecha actual en un formato legible', () => {
  expect(getCurrentDate()).toBe('25/09/2022')
})
