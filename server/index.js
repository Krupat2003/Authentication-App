const express = require("express");
const env = require("./config/envConfig");
const cors = require("cors");
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

//database connection
connect();
app.use(cors());

// add middleware 
app.use(express.json());

app.get("/", (req, res) => {
    res.json({img: 'Welcome to MyWebpage!!!'});
});

//user Routes
app.use('/api',userRoutes);

const port = env.PORT || 8000;

app.listen(port, () => {
    console.log(`Your server is running at port number: ${port}`);
});