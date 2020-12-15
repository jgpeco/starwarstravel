import React from 'react'

const DistanceForm = ({ handleSubmit, distance, handleChange }) => {
    return (
        <section className="distance">
            <div className="distance--title lead-title">
                Type the travel distance in Megalights (MGLT) and we will calculate the stops for you:
            </div>
            <form className='forms' onSubmit={handleSubmit}>
                <input
                        type='text'
                        id='input-distance'
                        name='distance'
                        placeholder='Type the distance...'
                        value={distance}
                        onChange={handleChange}
                    />
                    <button className='btn' type='submit'>Calculate!</button>
            </form>
            <small className='small--info'>Checkout below the amount of ressuply stops the starships in the Star Wars franchise needed to do to complete the distance provided. You can search for a specific ship by typing its name in the search box.</small>
        </section>
    )
}

export default DistanceForm