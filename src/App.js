import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Ship = ({shipInfo}) => {
  return (
    <div>
      <p>Name: {shipInfo.name}</p>
      <p>MGLT: {shipInfo.MGLT}</p>
      <p>Consumables Time: {shipInfo.consumables}</p>
    </div>
  )
}

const App = () => {
  //user input (mglts)
  const [distance, setDistance] = useState(0)
  //fetch ships
  const [allShips, setAllShips] = useState([])
  const [page, setPage] = useState(1)
  const [nextButton, setNextButton] = useState(false)
  const [prevButton, setPrevButton] = useState(false)

  useEffect(() => {
    getAllShips()
    // eslint-disable-next-line
  }, [page])

  const getAllShips = async () => {
    const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`)
    const { data } = response
    
    const ships = data.results
    setAllShips(ships)

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

  const handleGetButton = () => {
    setPage(1)
  }

  const handlePrevButton = () => {
    setPage(currPage => currPage - 1)
  }

  const handleNextButton = () => {
    setPage(currPage => currPage + 1)
  }

  const calculateStops = (ship) => {
    const mglt = Number(ship.MGLT)
    const hoursToArrive = distance / mglt

    const consumables = ship.consumables

    //gets just the number of days, weeks, months or years. it will be converted below
    const consumablesQuantity = Number(consumables.split(' ')[0])
    let convert = 0
    
    //converts the consumable quantity to hours
    if(ship.consumables && ship.consumables !== 'unknown'){
      if(consumables.includes('day')) convert = 24
      if(consumables.includes('week')) convert = 168
      if(consumables.includes('month')) convert = 720
      if(consumables.includes('year')) convert = 8760
    } else {
      return 'Unknown'
    }

    const consumablesInHours = consumablesQuantity * convert
    return Math.round(hoursToArrive / consumablesInHours)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`)
    const { data } = response
    
    const ships = data.results
    const shipsWithStops = ships.map(ship => ship.stops = calculateStops(ship))

    setAllShips(ships)
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
              onChange={({ target }) => setDistance(target.value)}
          />
          <button type='submit'>Calculate!</button>
      </form>
        

      { allShips.length ?
          allShips.map(ship => 
            <Ship key={ship.url} shipInfo={ship} />
          ) :
          <button onClick={handleGetButton}>Click to get all the ships</button>
      }
      { prevButton ? <button onClick={handlePrevButton}>Previous Ships</button> : null }
      { nextButton ? <button onClick={handleNextButton}>Next Ships</button> : null }
    </div>
  );
}

export default App;
