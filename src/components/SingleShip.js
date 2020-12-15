import React from 'react'

const Ship = ({shipInfo}) => {
    const {name, MGLT, stops} = shipInfo 
    return (
      <>
        <tr>
          <td className="table-primary">
          {name}
          </td>
          <td>{MGLT}</td>
          <td>{stops}</td>
        </tr>
      </>
    )
}

export default Ship
