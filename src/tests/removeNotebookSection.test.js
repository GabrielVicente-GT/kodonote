import removeNotebookSection from '../utils/removeNotebookSection'

const sampleNotebook = [
  { type: 'text', content: 'React es una librería de Javascript' },
  { type: 'text', content: 'Sirve para desarrollar aplicaciones más mantenibles' },
  { type: 'code', content: 'import React from \'react\'' },
]

describe('Teniendo un cuaderno al cual se desea remover su última sección', () => {

  it('Devuelve un cuaderno sin su última sección', () => {
    expect(removeNotebookSection(sampleNotebook)).toStrictEqual([
      { type: 'text', content: 'React es una librería de Javascript' },
      { type: 'text', content: 'Sirve para desarrollar aplicaciones más mantenibles' },
    ])
  })

  it('No devuelve el mismo cuaderno sin eliminar nada', () => {
    expect(removeNotebookSection(sampleNotebook)).not.toStrictEqual(sampleNotebook)
  })
})
