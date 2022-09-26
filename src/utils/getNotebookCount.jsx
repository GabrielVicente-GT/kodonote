const getNotebookCount = (notebooks) => notebooks.reduce((partialSum, a) => partialSum + a, 0)

export default getNotebookCount
