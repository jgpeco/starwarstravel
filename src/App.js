import React, {useState} from 'react'
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
  const [nextButton, setNextButton] = useState('')
  const [prevButton, setPrevtButton] = useState('')

  const getAllShips = async () => {
    const response = await axios.get(`https://swapi.dev/api/starships/?page=2`)
    const { data } = response
    
    const ships = data.results
    setAllShips(ships)

    if(data.previous) setPrevtButton(data.previous)
    if(data.next) setNextButton(data.next)
  }

  const handleGetButton = () => {
    getAllShips()
  }

  const handlePrevButton = () => {
    console.log('hi from prev button')
  }

  const handleNextButton = () => {
    console.log('hi from next button')
  }

  return (
    <div>
      <button onClick={handleGetButton}>Click to get all the ships</button>
      { allShips ?
          allShips.map(ship => 
            <Ship key={ship.url} shipInfo={ship} />
          ) :
          null
      }
      { prevButton ? <button onClick={handlePrevButton}>Previous Ships</button> : null }
      { nextButton ? <button onClick={handleNextButton}>Next Ships</button> : null }
    </div>
  );
}

export default App;
