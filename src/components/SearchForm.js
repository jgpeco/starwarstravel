import React from 'react'

const SearchForm = ({handleSearch, query, handleChange}) => {
    return (
        <form className='forms' onSubmit={handleSearch}>
            <input
                type='text'
                id='input-query'
                name='query'
                placeholder="Type a startship name..."
                value={query}
                onChange={handleChange}
            /> 
            <button className='btn' type='submit'>Search</button>
        </form>
    )
}

export default SearchForm