import switchDisplay from '../utils/switchDisplay'

describe('Dada una opción para desplegar el menú', () => {
    it('Despliega el menú como grid si esa es la opción', () => {
        expect(switchDisplay('grid')).toStrictEqual({ width: '100%', height: '100vh', displayMode: 'grid' })
    })
})