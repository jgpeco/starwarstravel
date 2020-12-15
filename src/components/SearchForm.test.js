import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm'

describe('<SearchForm />', () => {
    const handleSearch = jest.fn(e => e.preventDefault())
    const handleChange = jest.fn()
    const dummyQuery = 'ship'

    let component

    beforeEach(() => {
        component = render(
            <SearchForm
                handleSearch={handleSearch}
                handleChange={handleChange}
                query={dummyQuery}
            />
        )
    })

    test(`renders the search form correctly`, () => {
        const form = component.container.querySelector('.forms')
        expect(form).toBeDefined()
        const button = component.getByText('Search')
        expect(button).toBeDefined()
    })

    test('when clicked, button needs to call the right function', async () => {
        const form = component.container.querySelector('.forms')
        fireEvent.submit(form)
        await expect(handleSearch.mock.calls).toHaveLength(1)
    })
})