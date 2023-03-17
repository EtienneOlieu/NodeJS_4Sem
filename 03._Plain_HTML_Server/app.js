const { response } = require("express");
const express = require("express")
const app = express()
app.use(express.static("public"))

const  { getTanks, addTank } = require("./util/tanks.js");
//const {getTanks, addTank} = tanksUtil.getTanks();

let visitorCount = 0;

/*___________Pages her______________*/

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});

app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html");
})

app.get("/proxy", (req, res) => {
    //make a request to https://www.google.com
    //serve the text
    fetch("https://www.google.com")
    .then(response => response.text())
    .then(result => res.send(result))    
})

/*___________API'er HER______________*/

app.get("/api/tanks", (req, res) => {
    res.send({ data: getTanks() });
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount })
});

app.get("/api/guards", (req, res) => {
    console.log(req.query)
    if (req.query.passport === 'theskyisblue') {
        return res.redirect("/api/tanks") //return her i stedet for else i if, for at spare på linjer.
    }
        res.send({message: "You are not allowed to see the tanks. Give us the secret password in the query string with key being passport."});
})

const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("Server is running on port:", PORT)
})