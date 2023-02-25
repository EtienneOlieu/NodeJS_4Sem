const express = require("express")
const app = express()
app.use(express.json())

// const app = require("express")() - Dette er en alternativ måde at gøre det på.

//route (entire thing)
//HTTP METHOD
//      |endpoint |callback function 
app.get("/", (req, res) => {
    res.send({message : "Our first route"})
})

let bicycleSpins = 0
app.get('/spinthebicycle', (req, res) => {
    bicycleSpins += 1;
    res.send({ message : `people have spun the bicylce wheel ${bicycleSpins} times.`})
})

app.get('/kickthedinosaur', (req, res) => {
    res.send({
        message : 'You kick the dinosaur, and it goes "Ow ow ow".'
    })
})

//We can også sende html
app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about page where I put all my pants</h3>
    `)
})

// /bat?adjective=spooky
app.get("/bat",(req, res) => {
    res.send({ message: `The bat is ${req.query.adjective}`})
})

// /bottle/large
app.get("/bottle/:bottleSize", (req,res) => {
    req.params
    res.send({ bottleSize:req.params.bottleSize })
})

app.post("/package", (req, res) => {
    console.log(req.body)
    res.send({ message: req.body })
})

app.get("/time/time", (req, res) => {
    res.send({ 
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimestamp: Date.now()
    });
})

app.get("/time/day", (req,res) => {
    const today = new Date().getDay()
    console.log(today)
    const options = { weekday: "long" };
    res.send({
        date: Intl.DateTimeFormat("da-dk", options).format(today)
    });
});
//gyldige datoer

console.log(new Date())
console.log(Date())
console.log(Date.now())

app.listen(8080)
//fortæller Node hvilken port den skal lytte på. Skal altid ligge i bundengi