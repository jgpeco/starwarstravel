import fetchHelper from './ships'

describe('CalculateStops function', () => {
    const millenniunFalcon = {
        MGLT: '75',
        consumables: '2 months',
    }

    const yWing = {
        MGLT: '80',
        consumables: '1 week',
    }

    const rebelTransport = {
        MGLT: '20',
        consumables: '6 months',
    }

    const distance = 1000000

    test('when passing 1.000.000 MGLTs of distance to the Millennium Falcon ship, should return 9', () => {
        const stops = fetchHelper.calculateStops(millenniunFalcon, distance)
        expect(stops).toBe(9)
    })

    test('when passing 1.000.000 MGLTs of distance to the Y-Wing ship, should return 74', () => {
        const stops = fetchHelper.calculateStops(yWing, distance)
        expect(stops).toBe(74)
    })

    test('when passing 1.000.000 MGLTs of distance to the Rebel Transport ship, should return 11', () => {
        const stops = fetchHelper.calculateStops(rebelTransport, distance)
        expect(stops).toBe(11)
    })

})