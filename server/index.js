const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();
const express = require("express");
const app = express();

const port = 3001;
const userRoutes = require("./routes/UserRoutes");

app.use(
  cors({
    origin: ["https://crud-app-frontend-six.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", userRoutes);
app.listen(port, (err) => {
  err ? console.log("err", err) : console.log(`server run on port ${port}`);
});
