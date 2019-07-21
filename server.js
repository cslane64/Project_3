const express = require("express")
const PORT = 5000;

const app = express();

//Listen for requests from the front end and return


console.log("Just added this")

app.get("/test", (req, res) => {
    res.send("it worked");
});

app.listen(PORT, () => console.log(`Listening on port %s`, PORT));