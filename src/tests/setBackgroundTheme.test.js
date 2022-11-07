import setBackgroundTheme from '../utils/setBackgroundTheme'

const proofSetter = (theme) => (theme.startsWith('theme') && theme.endsWith('.jpg'))

describe('Dado un tema a cambiar a tema principal', () => {
  it('Cambia el tema si es una URL válida.', () => {
    expect(setBackgroundTheme('theme-0X.jpg', proofSetter)).toBe(true)
  })
  it('No cambia el tema si la URL es inválida', () => {
    expect(setBackgroundTheme('not-a-theme.jpg', proofSetter)).toBe(false)
  })
  it('Cambia el tema si se coloca un archivo .jpg', () => {
    expect(setBackgroundTheme('theme.jpg', proofSetter)).toBe(true)
  })
  it('No cambia el tema si el archivo no tiene la extensión .jpg', () => {
    expect(setBackgroundTheme('theme.png', proofSetter)).toBe(false)
  })
})
