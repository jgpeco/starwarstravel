import React from 'react'

const SearchForm = ({handleSearch, query, handleChange}) => {
    return (
        <form onSubmit={handleSearch}>
        <input
                id='input-query'
                name='query'
                placeholder='Type the name of the starship'
                value={query}
                onChange={handleChange}
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchForm