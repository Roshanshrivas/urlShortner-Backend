const express = require("express");
const app = express();
const urlRouter = require('./routes/url');
const URL = require("./models/Url");

//dotenv 
require("dotenv").config()
const PORT = process.env.PORT

//Convert JSON
app.use(express.json());


//server start
app.listen(PORT, () => {
    console.log(`Server start at ${PORT}`)
})

//ConnectDataBase
const connectDB = require("./config/connectDB")
connectDB();



//Router
app.use("/url", urlRouter);


app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
   {
        shortId,
   },
   {
    $push: {
        visitHistory: {
            timestamp: Date.now(),
        },
    },
   },
);
    res.redirect(entry.redirectURL);
});


