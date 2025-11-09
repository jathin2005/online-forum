Online Forum for Hobbyists and Enthusiasts

A lightweight full-stack forum web app built using Node.js, Express, and MongoDB, with a simple frontend for creating and viewing posts.

<p align="center"> <img src="https://img.shields.io/badge/Node.js-18+-green" /> <img src="https://img.shields.io/badge/Express.js-%20-lightgrey" /> <img src="https://img.shields.io/badge/MongoDB-Atlas-brightgreen" /> <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-blue" /> <img src="https://img.shields.io/badge/Status-Working-success" /> </p>
✅ Features

Create forum posts

View all posts

REST API backend

MongoDB Atlas cloud database

Simple, clean UI

Static frontend served directly from Express

CORS enabled

✅ Tech Stack
Frontend

HTML

CSS

JavaScript

Backend

Node.js

Express.js

Database

MongoDB Atlas (via Mongoose)

✅ Folder Structure
/project
│
├── index.js                # Backend server
├── package.json
│
├── public/
│   ├── index.html
│   └── script.js
│
└── node_modules/

✅ API Routes
GET /posts

Returns all forum posts.

POST /posts

Create a new post.

JSON body:

{
  "title": "Sample Title",
  "content": "This is the content of the post."
}

✅ How to Run the Project
1. Install dependencies
npm install

2. Start the backend
node index.js


or (auto-restart)

npx nodemon index.js

3. Open the frontend

Open in your browser:

http://localhost:3000/index.html
✅ Screenshots
<img width="1232" height="978" alt="image" src="https://github.com/user-attachments/assets/b57fad52-67da-4b62-b5b8-5ecc5957173f" />
✅ Future Improvements
Upvotes
Comments
User login / signup
Dark mode toggle
Animations / transitions
Flexbox/grid responsive design
Card shadows / smoother UI

✅ Author

Jathin
GitHub: https://github.com/jathin2005
