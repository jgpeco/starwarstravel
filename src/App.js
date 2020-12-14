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
  const [allShips, setAllShips] = useState([])
  const [page, setPage] = useState(0)
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

  return (
    <div>
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
