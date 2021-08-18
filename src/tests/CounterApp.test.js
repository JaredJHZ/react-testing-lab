import React from 'react'
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp />' , () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('Debe de mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de incrementar con el boton de mas 1', () => {
        wrapper.find('button').at(0).simulate('click')

        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe('11')

    })

    test('debe de decrementar con el -1', () => {

        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe('9')
    })

    test('Debe de restaurar el valor', () => {
        wrapper = shallow(<CounterApp value={105} />)
      
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')

        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe('105')
    } )


})