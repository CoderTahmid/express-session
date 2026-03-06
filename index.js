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
    // const result = await userCollection.insertOne({ // basically amra userCollection e ekta specific data ke insert kortesi ekhane
    //     name: "Rakib",
    //     age: 123 
    // })


    /* find method */
    // const cursor = userCollection.find(); 
    // /*
    //     ei userCollection.find() amader onek gulo data dey, but amra jei data khujtesi 
    //     sheta dicche na. 
    //     basically ei userCollection.find() amader ekta cursor dicche (just like our mouse cursor)
    //     and ei cursor diye amra amder data khuje pabo
    // */
    // const result = await cursor.toArray();
    // console.log(result); // now that's gonna print all the data i've in my database

    /* updateMany and updateOne method */
    // const result = await userCollection.updateOne({age: 20}, {$set: {name: "TAHMID"}}); // ekhane jar jar age 20 tader jei name key ta ase tar value "TAHMID" kore dewa hoise
    // const result2 = await userCollection.updateMany(
    //     {age: {
    //         $gt: 20
    //     }},
    //     {
    //         $set: {
    //             name: "Age is greater than 20"
    //         }
    //     }
    // )
    // /* 
    //     ekhane basically jar jar age 20 er beshi tader name key'r value "Age is greater than 20" set kora hoise
    //     updateOne diye only ekta data ke update kora jay.
    //     and updateMany diye jei koyta 20 er beshi ase shobgula kei upate kora jay
    //     gt = greater than
    //*/
    // console.log(result);
    // console.log(result2);

    const result = await userCollection.deleteMany(
        {
            age: {$gt: 130}
        }
    )
    /*
        jar jar age 130 theke beshi, tader delete kore daw
    */
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