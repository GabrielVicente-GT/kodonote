const switchDisplay = (option) => {
    const display = { width: '100%', height: '100vh' }
    const mode = (option === 'grid') ? option : 'flex'
    return { ...display, displayMode: mode }
}

export default switchDisplay
