import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SingleShip from './SingleShip'

describe('<SingleShip />', () => {
    const dummyShip = {
        name: 'Test Ship',
        MGLT: '10',
        stops: '10',
        id: '123456',
    }

    let component

    beforeEach(() => {
        component = render(
            <table>
                <tbody>
                    <SingleShip shipInfo={dummyShip} />
                </tbody>
            </table>
        )
    })

    test(`when rendered, SingleShip displays all the information about the ship`, () => {
        expect(component.container).toHaveTextContent('Test Ship')

        const td = component.container.querySelector('.table-primary')
        expect(td).toBeDefined()
        expect(td).toHaveTextContent('Test Ship')
    })
})