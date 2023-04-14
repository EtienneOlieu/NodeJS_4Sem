import { Router } from "express";
const router = Router();

app.get("/api/guards", (req, res) => {
    console.log(req.query)
    if (req.query.passport === 'theskyisblue') {
        return res.redirect("/api/tanks") //return her i stedet for else i if, for at spare på linjer.
    }
        res.send({message: "You are not allowed to see the tanks. Give us the secret password in the query string with key being passport."});
})

export default router;