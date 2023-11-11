const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();
const express = require("express");
const app = express();

const port = process.env.PORT;
const userRoutes = require("./routes/UserRoutes");

app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", userRoutes);
app.listen(port, (err) => {
  err ? console.log("err", err) : console.log(`server run on port ${port}`);
});
