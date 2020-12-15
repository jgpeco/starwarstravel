import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AllShips from './AllShips'

describe('<AllShips />', () => {
    const allShipsEmpty = []
    const showShipsFalse = false

    const allShipsFull = [
        {
            name: 'Test Ship',
            MGLT: 10,
            stops: 10,
            id: 123,
        },
        {
            name: 'Another Ship',
            MGLT: 20,
            stops: 20,
            id: 345,
        }
    ]
    const showShipsTrue = true


    let component

    test('if there is no ships and the showShip state is false, the component should not display data', () => {
        component = render(
            <AllShips
                allShips={allShipsEmpty}
                showShips={showShipsFalse}
            />
        )

        const div = component.container.querySelector('.ships-table')
        expect(div).toBeNull()
    })

    test('if showShips state is true but there is no ships, the component should not display data', () => {
        component = render(
            <AllShips
                allShips={allShipsEmpty}
                showShips={showShipsTrue}
            />
        )

        const div = component.container.querySelector('.ships-table')
        expect(div).toBeNull()
    })

    test('if there are ships and the showShip state is true, display data', () => {
        component = render(
            <AllShips
                allShips={allShipsFull}
                showShips={showShipsTrue}
            />
        )
        const div = component.container.querySelector('.ships-table')
        expect(div).toBeDefined()
        const th = component.container.querySelector('.table-primary')
        expect(th).toHaveTextContent('Name')
    })
})