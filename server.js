const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);

async function dbConnect() {
    await client.connect();
    return client.db("forumDB").collection("posts");
}

app.post("/api/post", async (req, res) => {
    const { name, message } = req.body;

    if (!name || !message) {
        return res.json({ success: false, message: "Missing fields" });
    }

    const posts = await dbConnect();
    await posts.insertOne({ name, message, time: new Date() });

    res.json({ success: true });
});

app.get("/api/posts", async (req, res) => {
    const posts = await dbConnect();
    const data = await posts.find().sort({ time: -1 }).toArray();
    res.json(data);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
   