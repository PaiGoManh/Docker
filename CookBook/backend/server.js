const express = require("express");
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth');
const recipeRoutes = require('./Routes/recipe');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use('/', authRoutes);
app.use('/', recipeRoutes);

mongoose.connect('mongodb://localhost:27017/Cookbooknew', { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Mongodb Database Connected");
});

const Port = 5000;
app.listen(Port, () => {
    console.log(`Server connected on port ${Port}`);
});
