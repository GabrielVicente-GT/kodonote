const gridDisplay = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'center'
}

const flexDisplay = {
  display: 'flex',
  flexDirection: 'column'
}

const setNotebookDisplay = (option) => (option === 'grid') ? gridDisplay : flexDisplay

export default setNotebookDisplay
