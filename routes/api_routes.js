const router = require('express').Router();
// const Contact = require("../db/models").Contact;
// const User = require("../db/models").User;
// const Locality = require("../db/models").Locality;
var db = require("../models");
//const contacts_controller = require ("../controllers/contacts_controller");

// send data to FE in an array

router.get("/api/contacts", (req, res) => {
    db.Contact.findAll({}).then(function() {
        res.json();
        console.log(res);
    })
    //contacts_controller.getAll(res);
    

});
// db.Event.findAll({}).then(function (dbExamples) {
//     res.json(dbExamples);

module.exports = router;