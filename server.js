const express = require("express");
const app = express();
const path = require("path");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(__dirname));

let users = [];

// Register
app.post("/register", (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.send("Registered Successfully");
});

// Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        res.redirect("/exam.html");
    } else {
        res.send("Invalid Credentials ❌");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});