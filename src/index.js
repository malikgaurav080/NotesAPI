const express = require("express");
const app = express();
const userRouter = require("./routes/route"); 


const mongoose = require("mongoose");

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) =>{
    res.send("ApI Working Fine");
});

const PORT = 5000;
mongoose.connect("mongodb://127.0.0.1/UserData")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})


