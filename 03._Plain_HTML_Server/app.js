const express = require("express")
const app = express()
app.use(express.static("public"))

const tanks = [
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
]

let visitorCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});

//___________API'er HER______________

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks })
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount })
});

const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("Server is running on port:", PORT)
})