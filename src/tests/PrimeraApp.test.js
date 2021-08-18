import React from 'react'
import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import PrimeraApp from "../PrimeraApp"
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp />' , () => {
//  with react own test library
    // test('Debe de mostrar hola soy jared', () => {
    //     const saludo = "Hola soy Jared"
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />)
    //     expect(getByText(saludo)).toBeInTheDocument()
    // })

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = "Un saludo!"
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        expect(wrapper).toMatchSnapshot()

    })

    test('Debe de mostrar el subtitulo', () => {
        const saludo = 'Hola soy goku'
        const subtitulo = "Soy un subtitulo"
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo= {subtitulo}
            />
        )

        const textoParrafo = wrapper.find("p").text()
        expect(textoParrafo).toBe(subtitulo)
    })
})