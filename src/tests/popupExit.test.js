import buttonExit from '../utils/popupsExit'

test('State change after press button', async () => {
    
    const result = buttonExit('On')
    expect(result).toBe(true)

    const result2 = buttonExit('Off')
    expect(result2).toBe(false)

})
