import React from 'react'
import SingleShip from '../components/SingleShip'

const ShipsTable = ({allShips, showShips, prevButton, handlePrevButton, nextButton, handleNextButton }) => {
    return (  
        <section className='ships'>
           <div className="ships--grid">
            {
                allShips.length && showShips
                ? (
                    <div className="table ships-table">
                    <table>
                      <thead>
                        <tr>
                          <th className="table-primary">Name</th>
                          <th>MGLT/hour</th>
                          <th>Ressuply Stops</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allShips.map(ship => <SingleShip key={ship.id} shipInfo={ship} />)}
                      </tbody>
                      </table>
                      </div>
                )
                : null
            }
                <div className="ships--grid__navigation">
                    { prevButton ? <button className='btn btn-small' onClick={handlePrevButton}>Previous Ships</button> : null }
                    { nextButton && showShips ? <button className='btn btn-small' onClick={handleNextButton}>Next Ships</button> : null }
                </div>
            </div>
        </section>  
    )   
}

export default ShipsTable