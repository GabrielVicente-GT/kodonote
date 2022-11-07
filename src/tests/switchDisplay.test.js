import switchDisplay from '../utils/switchDisplay'

describe('Dada una opción para desplegar el menú', () => {
    it('Despliega el menú como grid si esa es la opción', () => {
        expect(switchDisplay('grid')).toStrictEqual({ width: '100%', height: '100vh', displayMode: 'grid' })
    })
    it('No despliega el menú como grid si esta no es su opción', () => {
        expect(switchDisplay('flex')).not.toStrictEqual({ width: '100%', height: '100vh', displayMode: 'grid' })
    })
    it('Despliega el menú como flex si se pasa cualquier otra opción', () => {
        expect(switchDisplay('flex')).toStrictEqual({ width: '100%', height: '100vh', displayMode: 'flex' })
    })
})