import express from "express";
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
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

const contact = templateEngine.readPage("./public/pages/contact/contact.html");
const contactPage = templateEngine.renderPage(contact, {
    tabTitle: "UPPER | Contact"
})

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

app.get("/contact", (req, res) => {
    res.send(contactPage);
})

/* --- API --- */

app.get("/api/jokes", (req, res) => {
    res.send({data: jokes})
    console.log(jokes.getJoke())
})

app.post("/api/contact", (req, res) => {
    res.redirect("/");
    console.log(req.body)
})

console.log(process.env.ENV)

const PORT = Number(process.env.PORT) || 8082; //Henter port fra env eller giver en default port hvis ingen bliver defineret, af den ene eller anden årsag.
app.listen(PORT, (error) => {
    if (error){
        console.log(error);
    }
console.log("Server is running on port:", PORT);
});