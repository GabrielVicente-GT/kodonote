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

const displayGrid = (option) => (option === 'off') ? gridBoard : noGridBoard

export default displayGrid
