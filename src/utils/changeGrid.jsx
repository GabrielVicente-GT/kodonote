const tableroGridCSS = {
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
    color: '000',
}

const tableroNoGridCSS = {
    background: 'var(--accent-color-white)',
    padding: '20px',
    width: '100%',
    overflow: 'auto',
    height: 'auto',
    color: '000',
}

const displayGrid = (option) => {
    let cssValues = {}
    if (option === 'off') {
      cssValues = tableroGridCSS
    } else if (option === 'on') {
      cssValues = tableroNoGridCSS
    }
    return cssValues
}

export default displayGrid