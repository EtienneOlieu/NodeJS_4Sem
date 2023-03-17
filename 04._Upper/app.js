import express from "express";
const app = express();
import path from "path";
//import jokes from "./util/jokes.js";
import fs from "fs";
//import jokes from "./util/jokes.js";

app.use(express.static("public"));

/* COMPONENTS */
const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

/* PAGES */ 
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const jokes = fs.readFileSync("./public/pages/jokes/jokes.html").toString();
const quests = fs.readFileSync("./public/pages/quests/quests.html").toString();
const quotes = fs.readFileSync("./public/pages/quotes/quotes.html").toString();

/* CONSTRUCTED PAGES*/
const frontpagePage = navbar + frontpage + footer;
const jokesPage = navbar + jokes + footer;
const questsPage = navbar + quests + footer;
const quotesPage = navbar + quotes + footer;

//path er en import der ligger native i node. Skal bruges nu hvor hele systemet er et modul. VIGTIGT er IKKE at have en skråstreg foran stiens navn.
app.get("/", (req, res) => {
    res.send(frontpagePage);
}); 

app.get("/jokes", (req, res) => {
    res.send(jokesPage);
});

app.get("/quests", (req, res) => {
    res.send(questsPage);
})

app.get("/quotes", (req ,res) => {
    res.send(quotesPage);
})

/* --- API --- */

app.get("/api/jokes", (req, res) => {
    res.send({data: jokes})
    console.log(jokes.getJoke())
})

const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log(error);
    }
console.log("Server is running on port:", PORT);
});