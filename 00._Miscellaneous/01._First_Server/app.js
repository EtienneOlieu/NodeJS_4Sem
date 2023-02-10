const express = require("express")
const app = express()

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

app.listen(8080)
//fortæller Node hvilken port den skal lytte på. Skal altid ligge i bundengi