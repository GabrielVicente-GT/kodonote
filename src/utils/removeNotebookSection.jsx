const removeNotebookSection = (notebook) => {
  const temp = [...notebook]
  temp.pop()
  return [...temp]
}

export default removeNotebookSection
