const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const connectdb = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors")


//rest obj
const app = express();

//MOngoDb Connection
connectdb()


//middleare
app.use(express.json());
app.use(moragan("dev"));
app.use(cors());

//routes

app.use("/api/v1/user", require("./routes/userRoute") )


//listen
const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`Server is Running on  ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white);
})
