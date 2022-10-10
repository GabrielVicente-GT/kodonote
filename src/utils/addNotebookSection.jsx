const addNotebookSection = (notebook, sectionType) => {
  const newSection = (sectionType === 'code') ? { backgroundColor: 'rgb(0, 0, 50)' } : { backgroundColor: 'rgb(255, 255, 255)' }
  const updatedNotebook = [...notebook, newSection]
  return updatedNotebook
}

export default addNotebookSection
