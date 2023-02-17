const rocks = [
    {name: 'Pet rock', age: 2 },
    {name : 'Led Zeppelin', age: 50},
    {name : 'Dwayne Johnson', age: 47},
    {name : 'Neptune', age: 100_000_000_000}   
]

//assignment return rocks three that have even numbered ages

const evenAgedRocks =  rocks.filter(rock => rock.age %2 === 0)
console.log(evenAgedRocks)

//assignment make all the rocks one year older
//dont do this. Den ændrer på alle rock
const rocksAgedOneYear = rocks.forEach((rock) => {
    rock.age += 1
})

console.log(rocks)
//alternativt - det bedre valg, da det returnerer et nyt array. Bedre når det er noget vi ønsker at undgå side effects
// Åh nej, den er faktisk
const rocksAgedOneYearAlt1 = rocks.map(rock => {
    rock.age ++
    return rock
})

const rocksAgedOneYearGood = rocks.map(rock => {
    return {...rock, age: rock.age+1}
})

//den sygeste metode
const rocksAgedOneYearBest = rocks.map(rock => ({...rock, age: rock.age+1}))

//mikkels mærkelige metode - men ret god angiveligt
const rocksAgedOneYearAlt2 = rocks.map(rock => (
    {
        name: rock.name,
        age: rock.age +1
    }
))

console.log(rocksAgedOneYearAlt1)