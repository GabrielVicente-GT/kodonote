import getSpecifiedUserData from '../utils/getSpecifiedUserData'

const sampleData = [
  {
    content: 'Trial content',
    userId: '0',
  },
  {
    content: 'New trial content',
    userId: '1',
  },
  {
    content: 'Final trial content',
    userId: '2',
  }
]

describe('Dado un conjunto de cuadernos y un usuario objetivo', () => {

  it('Carga los datos de un usuario con ID específica', () => {
    expect(getSpecifiedUserData(sampleData, '0')).toStrictEqual([{ content: 'Trial content', userId: '0', }])
  })

  it('Carga los datos de un usuario con ID específica', () => {
    expect(getSpecifiedUserData(sampleData, '2')).toStrictEqual([{ content: 'Final trial content', userId: '2', }])
  })

  it('No carga los datos de otros usuarios', () => {
    expect(getSpecifiedUserData(sampleData, '0')).not.toStrictEqual([{ content: 'Final trial content', userId: '2', }])
  })

  it('No carga los datos de otros usuarios', () => {
    expect(getSpecifiedUserData(sampleData, '2')).not.toStrictEqual([{ content: 'Trial content', userId: '0', }])
  })
})
