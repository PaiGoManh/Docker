const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");

const authRoute=require('./routes/auth')


app.use(cookieParser())

app.use(express.json());

app.use(
  cors({ 
    origin: "http://localhost:5173",
  })
);



app.use("/", routes);
app.use("/",authRoute)

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://mongodb_kba:27017/kba_courses");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
