import displayGrid from '../utils/changeGrid'

test('GridCSS change after press button', async () => {
    
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

    const result = displayGrid('off')
    expect(result.display).toBe('grid')
    expect(result).toEqual(tableroGridCSS)
    expect(typeof(result)).toBe('object')

    const result2 = displayGrid('on')
    expect(result2.display).toBe(undefined)
    expect(result2).toEqual(tableroNoGridCSS)

})
