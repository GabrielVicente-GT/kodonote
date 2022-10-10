const getSpecifiedUserData = (data, userId) => {
  const userData = data.filter((notebook) => (notebook.userId === userId))
  return userData
}

export default getSpecifiedUserData
