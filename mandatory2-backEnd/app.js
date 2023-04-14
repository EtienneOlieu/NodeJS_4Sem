import express from "express";
const app = express();

import path from "path"
app.use(express.static(path.resolve("../mandatory2-frontEnd/dist")))



const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    } else {
        console.log("App is running on port:", PORT)
    }
});