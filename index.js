const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("The server is working");
})

app.listen(5000, () => {
    console.log("The application is running");
})