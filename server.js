const express = require("express");
const ejs = require("ejs");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(morgan("dev"));
app.set("view engine", ejs)
app.use(express.static("./public"));



// routes
const indexRoutes = require("./routes/index");
const postRoutes = require("./routes/post");

// routes use
app.use("/", indexRoutes)

app.use("/post", postRoutes)

app.listen(PORT, () => console.log(`App is listening to PORT ${PORT}`))