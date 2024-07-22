const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, userType } = req.body;
        console.log("Received data:", req.body);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, userType });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log("err", error);
        res.status(500).json({ error: "Registration failed" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "User doesn't exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Password incorrect" });
        }

        const token = jwt.sign(
            { userId: user._id, userType: user.userType },
            "your-secret-key",
            { expiresIn: "1h" }
        );

        res.cookie("AuthToken", token);
        res.status(200).json({
            message: "Login successful",
            token,
            userType: user.userType
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Login failed" });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("AuthToken");
    res.status(200).send("Logout successful");
});

module.exports = router;
