import { Router } from "express";
const router = Router();

router.get("/test", (req, res) => {
    res.send({message:"the test works!"})
})

export default router;