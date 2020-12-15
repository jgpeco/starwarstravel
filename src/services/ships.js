import axios from 'axios'
const baseUrl = `https://swapi.dev/api`

const calculateStops = (ship, distance) => {
    if(ship.consumables === 'unknown' || ship.MGLT === 'unknown') return 'Unknown'

    const mglt = Number(ship.MGLT)
    const hoursToArrive = distance / mglt

    const consumables = ship.consumables

    //gets just the number of days, weeks, months or years. it will be converted below
    const consumablesQuantity = Number(consumables.split(' ')[0])
    let convert = 0

    //converts the consumable quantity to hours
    if(ship.consumables){
      if(consumables.includes('day')) convert = 24
      if(consumables.includes('week')) convert = 168
      if(consumables.includes('month')) convert = 720
      if(consumables.includes('year')) convert = 8760
    }

    const consumablesInHours = consumablesQuantity * convert
    return Math.floor(hoursToArrive / consumablesInHours)
  }

  const getAllShips = async (page) => {
    const response = await axios.get(`${baseUrl}/starships/?page=${page}`)
    return response.data
  }

  const searchOneShip = async (query) => {
    const response = await axios.get(`https://swapi.dev/api/starships/?search=${query}`)
    return response.data
  }

  export default { calculateStops, getAllShips, searchOneShip }