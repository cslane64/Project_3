const express = require("express")
const PORT = 5000;

const app = express();

//Listen for requests from the front end and return
const api_routes = require ("./routes/api_routes");

app.use("/", api_routes);

//app.use(express.urlencoded({extended: true}));
//app.use(express.json());

console.log("Just added this")

//apiRoutes();

// app.get("/test", (req, res) => {
//     res.send("it worked");
// });

app.listen(PORT, () => console.log(`Listening on port %s`, PORT));