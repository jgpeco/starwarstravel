import React, {useState, useEffect} from 'react'
import fetchHelper from './services/ships'

import Navbar from './containers/Navbar'
import Header from './containers/Header'
import DistanceForm from './components/DistanceForm'
import SearchForm from './components/SearchForm'
import ShipsTable from './containers/ShipsTable'
import Footer from './containers/Footer'

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

  const handleDistanceSubmit = (e) => {
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

  const handleDistanceChange = ({ target }) => setDistance(Number(target.value))
  const handleQueryChange = ({ target }) => setQuery(target.value)

  return (
    <>
      <Navbar />
      <Header />
      <DistanceForm handleSubmit={handleDistanceSubmit} distance={distance} handleChange={handleDistanceChange} />
      { showSearch && 
        <SearchForm handleSearch={handleSearch} query={query} handleChange={handleQueryChange} />
      }

      <ShipsTable 
        allShips={allShips} 
        showShips={showShips}
        nextButton={nextButton}
        prevButton={prevButton}
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
      />

      <Footer />
    </>
  );
}

export default App;
