import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';


describe('Testimg for 02-template-string' , () => {
    test('getSaludo should return Hola Jared when passing jared as parameter' , () => {
        const name = "Jared"
        const saludo = getSaludo(name)

        expect(saludo).toBe("Hola "+name)
    })

    test("getSaludo should return Hola coco when no passing parameter", () => {
        const saludo = getSaludo()
        expect(saludo).toBe("Hola coco")
    })
})