import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroes'

describe('Test for imp-exp', () => {
    test('debe de retornar un heroe por ID', () => {
        const id = 1
        const heroe = getHeroeById(id)
        const heroeData = heroes.find(heroe => heroe.id === id)
        expect(heroe).toEqual(heroeData)

    })

    test('undefined si heroe no existe', () => {
        const id = 10
        const heroe = getHeroeById(id)
        expect(heroe).toBe(undefined)
    })

    test('debe de retornar un arreglo con los heroes de dc', () => {
        const heroesFiltrados = getHeroesByOwner("DC")
        const heroesIndexed = [heroes[0], heroes[2], heroes[3]]
        expect(heroesFiltrados).toEqual(heroesIndexed)
    })

    test('debe de retornar un arreglo con los heroes de marvel', () => {
        const lengthHeroes = getHeroesByOwner("Marvel")
        expect(lengthHeroes.length).toBe(2)
    })
})