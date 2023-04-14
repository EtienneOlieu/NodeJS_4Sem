import dotenv from "dotenv/config";


console.log(process.env.TEST);

import express from "express";
const app = express();
import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));
import path from "path"
app.use(express.static(path.resolve("../06._svelte-family/dist")))

import session from "express-session";
//Denne app.use metode skal gentages. Kan findes ved express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

// eskempel på string der kan godtages hernede: /gotham/:batman?hobby=Beating the poor
app.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    req.session.hobby = req.query.hobby;
    res.send({message: `Hi ${req.session.name}`});
});

app.get("/gotham", (req, res) => {
    if(!req.session.name && !req.session.hobby){
        return res.send({message: "Error. You are not welcome in this city."})
    }
    res.send({message: `I remember you ${req.session.name} and your hobby is ${req.session.hobby}.`})
})

app.get("leavegotham", (req, res) => {
    req.session.destroy(()=>{
        res.send({});
    })
})

app.get("/piblings", (req, res) => {
    res.send({data: ["John", "Mark"]});
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error);
    }
console.log("Server is running on PORT:", PORT);
}) 