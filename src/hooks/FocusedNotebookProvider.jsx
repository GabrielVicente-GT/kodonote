import React, { createContext, useState, useMemo } from 'react'
import propTypes from 'prop-types'

const FocusedNotebookContext = createContext()

const FocusedNotebookProvider = ({ children }) => {
  const [focusedNotebook, setFocusedNotebook] = useState({
    userId: "",
    color: "",
    title: "",
  })

  const state = useMemo(() => ({ focusedNotebook, setFocusedNotebook }), [focusedNotebook])

  return (
    <FocusedNotebookContext.Provider value={state}>
      {children}
    </FocusedNotebookContext.Provider>
  )
}

FocusedNotebookProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export { FocusedNotebookContext }
export default FocusedNotebookProvider
