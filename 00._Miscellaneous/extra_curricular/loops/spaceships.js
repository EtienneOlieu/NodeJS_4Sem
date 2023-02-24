const spaceships = [
    {name: 'Chinese Weather Balloon', owner: undefined, isPriceless: false, cost: 1_000_000},
    {name: undefined, type: 'UFO', isPriceless: true, cost: Number.MAX_SAFE_INTEGER},
    {name: 'Apollo 13', versionNumber: 13, isPriceless: true, cost: 2_000_000}
]

//forEach er fin nok her, da vi ikke er interesserede i hvad der sker med data. Som udgangspunkt skal vi ikke bruge forEach
//spaceships.forEach((spaceship,index, array) => console.log(array))

//task for all spaceships make owner = china

const spaceShipsWithOwner = spaceships.map(spaceship => ({...spaceship, owner: 'China'}))
//OVEN OVER ER VIGTIG!!!
console.log(spaceShipsWithOwner)
console.log(spaceships)


//console.log(spaceShipsWithOwner)

// add a price of isPriceless: true

/*const spaceshipPrice = spaceships.map(spaceship => {spaceship.isPriceless = true;
return spaceship})*/

//spaceshipPrice.forEach(spaceship => console.log(spaceship))

/*
const pricelessSpaceships = spaceships.filter(spaceship => spaceships.isPriceless === true)
const notPricelessSpaceships = spaceships.filter(spaceship => spaceships.isPriceless === false)

console.log(pricelessSpaceships)
console.log(notPricelessSpaceships)
*/

/*
const mostBelowTwoMill = spaceships.filter(spaceship => spaceship.cost < 2_000_000)
console.log(mostBelowTwoMill)
*/

console.log('___________________________________________')

const oneCheapShip = spaceships.find(spaceship => spaceship.cost <= 2_000_000)

console.log(oneCheapShip)