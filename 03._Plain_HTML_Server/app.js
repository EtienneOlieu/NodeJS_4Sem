const { response } = require("express");
const express = require("express")
const app = express()
app.use(express.static("public"))
import router from "./routers/guardsRouter.js"
app.use 

const  { getTanks, addTank } = require("./util/tanks.js");
//const {getTanks, addTank} = tanksUtil.getTanks();

let visitorCount = 0;

/*___________Pages her______________*/

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
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






app.post("/login", (req, res) => {
    const loginName = req.body.username;
    const loginPassword = req.body.password;
    const validatedUser = users.find(user => user.username === loginName && user.password === loginPassword);
    if (validatedUser) {
        res.redirect("/admin");
    } else {
        res.redirect("/login/fail");
    }
});

const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("Server is running on port:", PORT)
})