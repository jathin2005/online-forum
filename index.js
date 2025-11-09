// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Post = require("./Post");

const app = express();
const port = 3000;

// ====== Middleware ======
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ====== MongoDB Connection ======
mongoose.connect("mongodb+srv://chowdavaramjathin_db_user:H4A26d8wugJ7jvbu@cluster0.utdz7ta.mongodb.net/?appName=Cluster0")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Error:", err));

// ====== Routes ======

// Base route
app.get("/", (req, res) => {
    res.send("✅ Forum backend running successfully!");
});

// Get all posts
app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

// Create a new post
app.post("/posts", async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json({ error: "Failed to create post" });
    }
});

// Edit (update) a post
app.put("/posts/:id", async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content
        });
        res.json({ message: "Post updated" });
    } catch (err) {
        res.status(500).json({ error: "Failed to update post" });
    }
});

// Delete a post
app.delete("/posts/:id", async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Post deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete post" });
    }
});

// ====== Start Server ======
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
