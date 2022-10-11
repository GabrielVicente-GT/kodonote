import addNotebookSection from '../utils/addNotebookSection'

const sampleNotebook = [
  { type: 'text', content: 'React es una librería de Javascript' },
  { type: 'text', content: 'Sirve para desarrollar aplicaciones más mantenibles' },
  { type: 'code', content: 'import React from \'react\'' },
]

describe('Teniendo un cuaderno y una nueva sección a agregar', () => {

  it('Agrega una sección de código cuando se da click en código', () => {
    expect(addNotebookSection(sampleNotebook, 'code'))
      .toStrictEqual([...sampleNotebook, { type: 'code', content: '' }])
  })

  it('Agrega una sección de texto cuando se da click en texto', () => {
    expect(addNotebookSection(sampleNotebook, 'text'))
      .toStrictEqual([...sampleNotebook, { type: 'text', content: '' }])
  })

  it('No agrega una sección de código cuando se da click en texto', () => {
    expect(addNotebookSection(sampleNotebook, 'text'))
      .not.toStrictEqual([...sampleNotebook, { type: 'code', content: '' }])
  })

  it('No agrega una sección de texto cuando se da click en código', () => {
    expect(addNotebookSection(sampleNotebook, 'code'))
      .not.toStrictEqual([...sampleNotebook, { type: 'text', content: '' }])
  })
})
