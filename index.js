const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nvyo0mv.mongodb.net/?appName=Cluster0`)

app.use(cors());
app.use(express.json());

const run = async () => {
    await client.connect();

    const db = client.db("Express");
    const userCollection = db.collection("user");
    
    /* insertOne operation */
    const result = await userCollection.insertOne({ // basically amra userCollection e ekta specific data ke insert kortesi ekhane
        name: "Rakib",
        age: 123 
    })
    
    console.log(result);


    console.log("The DB client is connected");
}

run();

app.get("/", (req, res) => {
    res.send("The server is working"); // er mane hocche je "/" ei path e gele ki data dekha jabe 
})

app.listen(5000, () => {
    console.log("The application is running");
})