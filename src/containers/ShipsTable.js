import React from 'react'
import AllShips from '../components/AllShips'
import NavigationButtons from '../components/NavigationButtons'


const ShipsTable = ({ allShips, showShips, prevButton, handlePrevButton, nextButton, handleNextButton }) => {
    return (
        <section className='ships'>
           <div className="ships--grid">
                <AllShips
                  allShips={allShips}
                  showShips={showShips}
                />
                <NavigationButtons
                  showShips={showShips}
                  prevButton={prevButton}
                  handlePrevButton={handlePrevButton}
                  nextButton={nextButton}
                  handleNextButton={handleNextButton}
                />
            </div>
        </section>
    )
}

export default ShipsTable