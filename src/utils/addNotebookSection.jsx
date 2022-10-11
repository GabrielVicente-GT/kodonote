const addNotebookSection = (notebook, sectionType) => {
  const newSection = { type: sectionType, content: '' }
  const updatedNotebook = [...notebook, newSection]
  return updatedNotebook
}

export default addNotebookSection
