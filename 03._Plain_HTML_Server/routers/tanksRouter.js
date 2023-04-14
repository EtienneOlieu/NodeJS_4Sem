import { Router } from "express";
import router from "./visitorsRouter";



app.get("/api/tanks", (req, res) => {
    res.send({ data: getTanks() });
});


export default router;