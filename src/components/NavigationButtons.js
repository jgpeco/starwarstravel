import React from 'react'

const NavigationButtons = ({ showShips, prevButton, handlePrevButton, nextButton, handleNextButton }) => {
    return (
        <>
            <div className="ships--grid__navigation">
                <div className="prevButton-wrapper">
                    { prevButton
                    ? <button className='btn btn-small' onClick={handlePrevButton}>Previous Ships</button>
                    : null }
                </div>
                <div className="nextButton-wrapper">
                    { nextButton && showShips
                    ? <button className='btn btn-small' onClick={handleNextButton}>Next Ships</button>
                    : null }
                </div>
            </div>
        </>
    )
}

export default NavigationButtons