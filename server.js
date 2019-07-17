const express = require("express")
const PORT = 5000;

const app = express();

console.log("Just added this")

app.listen(PORT, () => console.log(`Listening on port %s`, PORT));