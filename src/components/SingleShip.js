import React from 'react'

const Ship = ({shipInfo}) => {
    const {name, MGLT, stops} = shipInfo
    if(stops === 'Unknown') return (<p>{name} - No Data</p>)
  
    return (
      <div>
        <p>Name: {name}</p>
        <p>MGLT/hour: {MGLT}</p>
        <p>Ressuply Stops: {stops}</p>
      </div>
    )
}

export default Ship