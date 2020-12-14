import React, {useState, useEffect} from 'react'
import fetchHelper from './services/ships'

import SingleShip from './components/SingleShip'

const App = () => {
  //user input (mglts)
  const [distance, setDistance] = useState('')
  //fetch ships
  const [allShips, setAllShips] = useState([])
  const [showShips, setShowShips] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [page, setPage] = useState(1)
  const [nextButton, setNextButton] = useState(false)
  const [prevButton, setPrevButton] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    getShips()
    // eslint-disable-next-line
  }, [page])

  const pageTracker = (data) => {
    if(data.previous) {
      setPrevButton(true)
    } else {
      setPrevButton(false)
    }
    if(data.next) {
      setNextButton(true)
    } else {
      setNextButton(false)
    }
  } 

  const shipsWithStopsGenerator = (ships) => {
    return ships.map(ship => {
      const newShip = {}
      newShip.name = ship.name
      newShip.MGLT = ship.MGLT
      newShip.stops = fetchHelper.calculateStops(ship, distance)
      newShip.id = ship.created
      return newShip
    })
  }

  const getShips = async () => {
    const data = await fetchHelper.getAllShips(page)
    
    const ships = data.results
    const shipsWithStops = shipsWithStopsGenerator(ships)
    setAllShips(shipsWithStops)
    pageTracker(data)
  }

  const handlePrevButton = () => {
    setPage(currPage => currPage - 1)
  }

  const handleNextButton = () => {
    setPage(currPage => currPage + 1)
  }

  const cleanForms = () => {
    setDistance('')
    setQuery('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getShips()
    setShowShips(true)
    setShowSearch(true)
    cleanForms()
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const data = await fetchHelper.searchOneShip(query)
    
    const ships = data.results
    const shipsWithStops = shipsWithStopsGenerator(ships)
    pageTracker(data)
    setShowShips(true)
    setAllShips(shipsWithStops)
    cleanForms()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Type the travel distance in MegaLights (MGLT)</p>
        <input
              id='input-distance'
              name='distance'
              placeholder='Type the distance...'
              value={distance}
              onChange={({ target }) => setDistance(Number(target.value))}
          />
          <button type='submit'>Calculate!</button>
      </form>

      { showSearch && 
            <form onSubmit={handleSearch}>
            <input
                    id='input-query'
                    name='query'
                    placeholder='Type the name of the starship'
                    value={query}
                    onChange={({ target }) => setQuery(target.value)}
                />
                <button type='submit'>Search</button>
            </form>
      }
        

      { allShips.length && showShips
          ? allShips.map(ship => <SingleShip key={ship.id} shipInfo={ship} />)
          : null
      }
      { prevButton ? <button onClick={handlePrevButton}>Previous Ships</button> : null }
      { nextButton && showShips ? <button onClick={handleNextButton}>Next Ships</button> : null }
    </div>
  );
}

export default App;
