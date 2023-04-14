import { Router } from "express";
const router = Router();

router.get("/auth/logout", (req, res) => {
    res.send({});
})

router.post("/auth/login", (req, res) =>{
    res.send({}); //bcrypt.compare
}) //bruger post selvom det går imod rest. Informationen gemmes på den måde i "body" hvor den er mere sikker.



export default router;