
import express from "express"
import connectDb from "./config/db.js";
const app = express();


// connect mongodb
connectDb();

app.use(express.json());
const port = 50464;
app.get('/', function (req, res) {
    res.send('Hello World')
})

// api
 
app.listen(port, () => {
    console.log("backend is running");
})