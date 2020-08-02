// Setup empty JS object to act as endpoint for all routes
projectData = {};
const PORT = 3000;
// Require Express to run server and routes
const express  = require("express");
const cors = require("cors");
const bodyParser =  require("body-parser");
const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));



//https://api.openweathermap.org/data/2.5/weather?zip=90201&appid=c2bfc6aa40b0491490c453c42271fe9d
// Setup Server

app.listen(PORT, () =>console.log(`App listening on port ${PORT}`)); // seting up the server 


app.get('/getData', (req, res) => {   
    res.send(projectData)
});

app.post('/addData', (req, res) => {
    let body = req.body;
    
    projectData["date"] = body.date
    projectData["feelings"] = body.feelings
    projectData["temp"] = body.temp
    console.log(projectData)
    res.send(projectData)
});