const router = require('express').Router();
// const Contact = require("../db/models").Contact;
// const User = require("../db/models").User;
// const Locality = require("../db/models").Locality;
var db = require("../models");
//const contacts_controller = require ("../controllers/contacts_controller");

// send data to FE in an array

router.get("/api/contacts", (req, res) => {
   db.Contact.findAll({}).then(function(contacts) {
        res.json(contacts);
        //console.log(contacts);
    })
    
});

// router.post("/api/SignIn", req, res) => {
    router.post("/api/SignIn", (req, res) => {
        console.log(req.body);
        let username = req.body.data.username;
        let password = req.body.data.password;
        console.log(req.body.data.username);
        
     
         db.User.findOne({ where: { username: username } }).then((username) => {
        //      console.log(username);
        // //   var bcrypt = require('bcrypt');
        // //   bcrypt.compare(password, user.password, function(err, result) {
        // //   console.log(user.password);
          if (username) {
            let returnedObj = {
               userid: user.id,
               name: user.name
     
             };
     
            res.json(returnedObj);
     
           } else {
            res.send("This post route worked");
          }
         })
    })
     
      //})
    
 //}

module.exports = router;