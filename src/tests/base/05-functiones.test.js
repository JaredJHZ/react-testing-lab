import '@testing-library/jest-dom'
import { getUser , getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto' , () => {
        const userTest = {
            uid:'ABC123',
            username:'El_Papi1502'
        }

        const user = getUser()

        expect(user).toEqual(userTest)

    })

    test('getUsuarioActivo debe de retornar un objecto que contenga el nombre de Jared', () => {
        const userTest = {
            uid:'ABC567',
            username:'Jared'
        }

        const userActivo = getUsuarioActivo('Jared')

        expect(userActivo).toEqual(userTest)
    })

})