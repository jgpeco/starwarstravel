import React from 'react'
import SingleShip from '../components/SingleShip'

const ShipsTable = ({allShips, showShips, prevButton, handlePrevButton, nextButton, handleNextButton }) => {
    return (
        <div>
            {
                allShips.length && showShips
                ? allShips.map(ship => <SingleShip key={ship.id} shipInfo={ship} />)
                : null
            }
            { prevButton ? <button onClick={handlePrevButton}>Previous Ships</button> : null }
            { nextButton && showShips ? <button onClick={handleNextButton}>Next Ships</button> : null }
        </div>
    )   
}

export default ShipsTable