import React, {useState} from 'react'

const DistanceForm = ({handleSubmit, distance, handleChange}) => {

    return (
        <form onSubmit={handleSubmit}>
            <p>Type the travel distance in MegaLights (MGLT)</p>
            <input
                id='input-distance'
                name='distance'
                placeholder='Type the distance...'
                value={distance}
                onChange={handleChange}
            />
            <button type='submit'>Calculate!</button>
      </form>
    )
}

export default DistanceForm