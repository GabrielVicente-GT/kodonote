import addNotebookSection from '../utils/addNotebookSection'

describe('Teniendo un cuaderno y una nueva sección a agregar', () => {

  it('Agrega una sección de código cuando se da click en código', () => {
    expect(addNotebookSection([{ backgroundColor: 'rgb(255, 255, 255)' }], 'code'))
      .toStrictEqual([{ backgroundColor: 'rgb(255, 255, 255)' }, { backgroundColor: 'rgb(0, 0, 50)' }])
  })

  it('Agrega una sección de texto cuando se da click en texto', () => {
    expect(addNotebookSection([{ backgroundColor: 'rgb(255, 255, 255)' }], 'text'))
      .toStrictEqual([{ backgroundColor: 'rgb(255, 255, 255)' }, { backgroundColor: 'rgb(255, 255, 255)' }])
  })
})
