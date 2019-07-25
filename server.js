const express = require("express")
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 5000;



//Listen for requests from the front end and return
const api_routes = require ("./routes/api_routes");


const app = express();
app.use("/", api_routes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

console.log("Just added this")

 

app.listen(PORT, () => console.log(`Listening on port %s`, PORT)); 