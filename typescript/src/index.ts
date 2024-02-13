import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());


// DB
mongoose
.connect('mongodb+srv://admin:admin@wingsurvival.udq99yc.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch((error)=> console.log(error));