import express from "express";
const app = express();

function houseButler(req, res, next) { //dette er middleware - injiceres ind i routes og kaldes hver gang en route finder sted.
    console.log("This way...");
    next();
}

app.use("/room", houseButler); //beder applikationen om at afvikle middleware på alle associerede end points.

import roomRouter from "./routers/roomRouter.js"
app.use(roomRouter);

function guard(req, res ,next){ //Denne "guard" kunne være et database check eller en adgangskode kontrol.
    console.log("Are you allowed in?");
    if (req.query.name === "Anders"){
        req.myName = "Anders"
        return next();
    }
    res.send({message:"You are not allowed to enter"});
};

app.get("/frontdoor", (req, res) => {
    res.send({message: `Please enter ${req.myName}`});
});
app.route("/room", (req, res, next) => {
    //next(); //router til nærmeste match
    res.send({message: "I am in room 1"});
});

app.get("/room", (req, res) => {
    res.send({message: "I am in room 2"});
});

app.get("*", (req, res) => {
    res.send("<h1>404 - NOT FOUND</h1>") //en fall-back route som bør landes på hvis ikke den kan finde noget
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));