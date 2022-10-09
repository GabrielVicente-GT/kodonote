import displayGrid from '../utils/changeGrid'

const gridBoard = {
  background: 'var(--accent-color-white)',
  display: 'grid',
  gridTemplateRows: 'repeat(4, 150px)',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '20px',
  gridAutoFlow: 'row',
  padding: '20px',
  width: '100%',
  overflow: 'auto',
  height: 'auto',
  color: '000'
}

const noGridBoard = {
  background: 'var(--accent-color-white)',
  padding: '20px',
  width: '100%',
  overflow: 'auto',
  height: 'auto',
  color: '000'
}

const onGridResult = displayGrid('off')
const offGridResult = displayGrid('on')

test('Cambio del display a grid', () => {
  expect(onGridResult.display).toBe('grid')
})

test('Igualdad del resultado y los estilos esperados', () => {
  expect(onGridResult).toEqual(gridBoard)
})

test('Tipo del resultado obtenido luego del click', () => {
  expect(typeof(onGridResult)).toBe('object')
})

test('Cambio del display a uno sin grid', () => {
  expect(offGridResult.display).toBe(undefined)
})

test('Igualdad del resultado y los nuevos estilos esperados', () => {
  expect(offGridResult).toEqual(noGridBoard)
})

test('Tipo del nuevo resultado obtenido luego del click', () => {
  expect(typeof(offGridResult)).toBe('object')
})
