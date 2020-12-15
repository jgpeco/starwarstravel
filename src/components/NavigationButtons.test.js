import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import NavigationButtons from './NavigationButtons'

describe('<NavigationButtons />', () => {
    const showShipsFalse = false
    const showShipsTrue = true
    const prevButtonFalse = false
    const prevButtonTrue = true
    const nextButtonFalse = false
    const nextButtonTrue = true
    const handlePrevButton = jest.fn()
    const handleNextButton = jest.fn()

    let component

    test('prevButton should not render if its state is false', () => {
        component = render(
            <NavigationButtons
                showShips={showShipsTrue}
                prevButton={prevButtonFalse}
                handlePrevButton={handlePrevButton}
                nextButton={nextButtonTrue}
                handleNextButton={handleNextButton}
            />
        )
        const divParent = component.container.querySelector('.prevButton-wrapper')
        expect(divParent).toBeDefined()
        expect(divParent.children.length).toBe(0)
    })

    test('prevButton should render if its state is true', () => {
        component = render(
            <NavigationButtons
                showShips={showShipsTrue}
                prevButton={prevButtonTrue}
                handlePrevButton={handlePrevButton}
                nextButton={nextButtonTrue}
                handleNextButton={handleNextButton}
            />
        )
        const button = component.getByText('Previous Ships')
        expect(button).toBeDefined()
    })

    test('prevButton call the right handler if clicked', () => {
        component = render(
            <NavigationButtons
                showShips={showShipsTrue}
                prevButton={prevButtonTrue}
                handlePrevButton={handlePrevButton}
                nextButton={nextButtonTrue}
                handleNextButton={handleNextButton}
            />
        )
        const button = component.getByText('Previous Ships')
        fireEvent.click(button)
        expect(handlePrevButton.mock.calls).toHaveLength(1)
    })

    test('nextButton should not render if its state is false', () => {
        component = render(
            <NavigationButtons
                showShips={showShipsTrue}
                prevButton={prevButtonFalse}
                handlePrevButton={handlePrevButton}
                nextButton={nextButtonFalse}
                handleNextButton={handleNextButton}
            />
        )
        const divParent = component.container.querySelector('.nextButton-wrapper')
        expect(divParent).toBeDefined()
        expect(divParent.children.length).toBe(0)
    })

    test('nextButton should not render if showShips is falsy, even if its state is true', () => {
        component = render(
            <NavigationButtons
                showShips={showShipsFalse}
                prevButton={prevButtonFalse}
                handlePrevButton={handlePrevButton}
                nextButton={nextButtonTrue}
                handleNextButton={handleNextButton}
            />
        )
        const divParent = component.container.querySelector('.nextButton-wrapper')
        expect(divParent).toBeDefined()
        expect(divParent.children.length).toBe(0)
    })

    test('nextButton should render if its state is true and showShips is true', () => {
        component = render(
            <NavigationButtons
                showShips={showShipsTrue}
                prevButton={prevButtonFalse}
                handlePrevButton={handlePrevButton}
                nextButton={nextButtonTrue}
                handleNextButton={handleNextButton}
            />
        )
        const button = component.getByText('Next Ships')
        expect(button).toBeDefined()
    })

    test('nextButton call the right handler if clicked', () => {
        component = render(
            <NavigationButtons
                showShips={showShipsTrue}
                prevButton={prevButtonFalse}
                handlePrevButton={handlePrevButton}
                nextButton={nextButtonTrue}
                handleNextButton={handleNextButton}
            />
        )
        const button = component.getByText('Next Ships')
        fireEvent.click(button)
        expect(handleNextButton.mock.calls).toHaveLength(1)
    })

})