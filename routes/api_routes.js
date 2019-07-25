const router = require('express').Router();
const Contact = require("../models").Contact;
const User = require("../models").User;
const Locality = require("../models").Locality;
const contacts_controller = require ("../controllers/contacts_controller");

router.get("/api/contacts", (req, res) => {

    contacts_controller.getAll(res);
    console.log("contacts");

});


module.exports = router;