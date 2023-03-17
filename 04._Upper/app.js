import express from "express";
const app = express();
app.use(express.static("public"));
import templateEngine from "./util/templateEngine.js";

const frontpage =  templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "UPPER | Welcome"
});

const quests = templateEngine.readPage("./public/pages/quests/quests.html");
const questsPage = templateEngine.renderPage(quests, {
    tabTitle: "UPPER | Quests"
});

const quotes = templateEngine.readPage("./public/pages/quotes/quotes.html");
const quotesPage = templateEngine.renderPage(quotes, {
    tabTitle: "UPPER | Quotes"
});

//path er en import der ligger native i node. Skal bruges nu hvor hele systemet er et modul. VIGTIGT er IKKE at have en skråstreg foran stiens navn.
app.get("/", (req, res) => {
    res.send(frontpagePage);
}); 

app.get("/jokes", async (req, res) => {
   const jokesPage = await templateEngine.renderJokePage();
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