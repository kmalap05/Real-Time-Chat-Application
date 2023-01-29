const express = require("express");
require("dotenv").config();
const { chats } = require("./data/data");

// Initialize Express App
const app = express();

// Config PORT Number
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:_id", (req, res) => {
  console.log(req.params._id);
  const singleChat = chats.find((chat) => chat._id === req.params._id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
