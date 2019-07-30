const express = require("express")
const bodyParser = require('body-parser');
const path = require('path');


const PORT = 5000;

//CREATE USER - 
// var User = require("./models").User;
// User.create({
//     username: "Chris",
//     password: "password"
// }).then(() => {
//     console.log("User created");
// });

//Listen for requests from the front end and return
const api_routes = require ("./routes/api_routes");


const app = express();
app.use("/", api_routes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));



// db.sequelize.sync({ force: true }).then(function() {
//     app.listen(PORT, () => console.log(`Listening on port %s`, PORT));
//     });

    app.listen(PORT, () => console.log(`Listening on port %s`, PORT));