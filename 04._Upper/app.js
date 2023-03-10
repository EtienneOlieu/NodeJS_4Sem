import express from "express";
const app = express();
import path from "path";
//import jokes from "./util/jokes.js";
app.use(express.static("public"));


//path er en import der ligger native i node. Skal bruges nu hvor hele systemet er et modul. VIGTIGT er IKKE at have en skråstreg foran stiens navn.
app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/quests", (req, res) => {
    res.sendFile(path.resolve("public/pages/quests/quests.html"));
});

app.get("/jokes", (req, res) => {
    res.sendFile(path.resolve("public/pages/jokes/jokes.html"))
})

app.get("/quotes", (req ,res) => {
    res.sendFile(path.resolve("public/pages/quotes/quotes.html"))
})

/* --- API --- */

app.get("api/quests", (req, res) => {
    
})

const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log(error);
    }
console.log("Server is running on port:", PORT);
});