const router = require('express').Router();
// const Contact = require("../db/models").Contact;
// const User = require("../db/models").User;
// const Locality = require("../db/models").Locality;
var db = require("../models");
//const contacts_controller = require ("../controllers/contacts_controller");

router.get("/api/contacts", (req, res) => {
    db.Contact.findAll({}).then(function(contacts) {
        res.json(contacts);
    })
    //contacts_controller.getAll(res);
    console.log("contacts");

});
// db.Event.findAll({}).then(function (dbExamples) {
//     res.json(dbExamples);

module.exports = router;