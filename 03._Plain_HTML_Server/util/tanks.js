const { tanks } = require("./tanks.json");

function getTanks(){
    return tanks;
}

function addTank(tank){
    tanks.push(tank);
    return tanks;
}

module.exports = {
    getTanks,
    addTank
}


/*const tanks = [
    {name: "Leopard", nationality: "Germany", version: "1"},
    {name: "Centurion", nationality: "United Kingdom", year: 1946},
    {name: "Sho't", nationality: "Israel", year: 1960},
    {name: "Strv", nationality: "Sweden", year: 1967},
    {name: "Olifant", nationality: "South Africa", year: 1974},
    {name: "Bernardini MB-3 Tamoyo", nationality: "Brazil", year: 1983},
    {name: "Zulifaqir I", nationality: "Iran", year: 1994},
    {name: "Ramses II", nationality: "Egypt", year: 2005},
    {name: "AMX-40", nationality: "France", year: 1983},
    {name: "Pokpung-ho II", nationality: "North Korea", year: 1992},
    {name: "Landkreauzer P 1500 Monster", nationality: "Germany", year: 1942},
    {name: "T-42", nationality: "Russia", year: 1932},
    {name: "M1 Abrams", version: "M1"}
]*/