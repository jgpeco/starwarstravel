import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import DistanceForm from './DistanceForm'

describe('<DistanceForm />', () => {
    const handleSubmit = jest.fn(e => e.preventDefault())
    const handleChange = jest.fn()
    const distance = 100000

    let component

    beforeEach(() => {
        component = render(
            <DistanceForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                distance={distance}
            />
        )
    })

    test('the distance form is rendered correctly', () => {
        const title = component.container.querySelector('.distance--title')
        expect(title).toHaveTextContent('Type the travel distance')

        const form = component.container.querySelector('.forms')
        expect(form).toBeDefined()
    })

    test('when clicked, the button to calculate calls the right handle', async () => {
        const form = component.container.querySelector('.forms')
        fireEvent.submit(form)
        await expect(handleSubmit.mock.calls).toHaveLength(1)
    })
})