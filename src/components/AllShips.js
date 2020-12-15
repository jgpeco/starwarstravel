import React from 'react'
import SingleShip from './SingleShip'

const AllShips = ({ allShips, showShips }) => {
    return (
        <>
            {
                allShips.length && showShips
                ? (
                    <div className="table ships-table">
                    <table>
                      <thead>
                        <tr>
                          <th className="table-primary">Name</th>
                          <th>MGLT/h<span className="hide-sm">our</span></th>
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
        </>
    )
}

export default AllShips