const express = require("express")
const app = express()
app.use(express.static("public"))

const  { getTanks, addTank } = require("./util/tanks.js");
//const {getTanks, addTank} = tanksUtil.getTanks();

let visitorCount = 0;

/* Pages */

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

//___________API'er HER______________

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks });
});

app.get("/api/guards", (req,res) => {
    res.send({ data: guards});
})

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