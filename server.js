const express = require("express")
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;


const api_routes = require ("./routes/api_routes"); 
const auth_routes = require ("./routes/auth_routes");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use("/", api_routes);

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.use(express.static(path.join(__dirname, 'public')));

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("App now listening on port:  ", PORT);
    });
});
//app.listen(PORT, () => console.log(`Listening on port %s`, PORT));