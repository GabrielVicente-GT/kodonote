import setNotebookDisplay from '../utils/setNotebookDisplay'

const gridDisplay = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'center'
}

const flexDisplay = {
  display: 'flex',
  flexDirection: 'column'
}

describe('Dadas configuraciones para desplegar un cuaderno', () => {

  it('Despliega el cuaderno como grid si se da click en grid', () => {
    expect(setNotebookDisplay('grid')).toStrictEqual(gridDisplay)
  })

  it('Despliega el cuaderno como filas si se da click en filas', () => {
    expect(setNotebookDisplay('row')).toStrictEqual(flexDisplay)
  })
})
