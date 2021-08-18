import '@testing-library/jest-dom'
import { getImagen } from '../../base-pruebas/11-async-await'

describe('async await testing', () => {
    test('Debe de retornar el url de la imagen' , async (done) => {
        const url = await getImagen()
        expect(url.includes('https://')).toBe(true)
        done()
    })
})