import getNotebookCount from '../utils/getNotebookCount'

test('Obtiene la cuenta de todos los cuadernos creados en la base de datos', () => {
  expect(getNotebookCount([2, 3, 6, 4])).toBe(15)
})

test('Obtiene la cuenta de todos los cuadernos creados en la base de datos', () => {
  expect(getNotebookCount([2, 4, 6, 8, 10])).toBe(30)
})
