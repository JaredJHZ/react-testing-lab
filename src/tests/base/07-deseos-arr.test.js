import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base-pruebas/07-deses-arr'

describe('Pruebas en desestructuracion' , () => {
    test('debe regresar un string y un numero', () => {
        const [letras, numeros] = retornaArreglo()
        //expect(arr).toEqual(['ABC', 123])
        expect(typeof letras).toBe('string')

        expect(letras).toBe('ABC')

        expect(typeof numeros).toBe('number')

        expect(numeros).toBe(123)

    })
})