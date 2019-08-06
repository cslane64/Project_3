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
        console.log(username);
        
     
         db.User.findOne({ where: { username: username } }).then((username) => {
            console.log(username);
        // //   var bcrypt = require('bcrypt');
        // //   bcrypt.compare(password, user.password, function(err, result) {
        // //   console.log(user.password);
          if (username) {
            let returnedObj = {
               //
               id: username.id,
               username: username.username
     
             };
     
            res.json(returnedObj);
     
           } else {
             console.log("didn't find username and password")
            res.send("Sorry, no user name found.");
          }
         })
    })

    router.post("/api/register", (req, res) => {
      let newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        //password: req.body.password,
        localityID: req.body.locality
      }
      let newUser = {
        username: req.body.emailAddress,
        password: req.body.password
      } 
        console.log(req.body);
        console.log(newContact);
        db.Contact.create(newContact)   
        .then(() => {
            db.User.create(newUser)
            console.log("User Created")
        })
        .then(() => {
          console.log("Contact created");
            res.send("You have been registered");
        })
      
      
    })
     //working now
      //})
    
 //}

module.exports = router;