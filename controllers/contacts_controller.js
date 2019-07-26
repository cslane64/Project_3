const {Contact} = require('../models');
//const db = require('../db/models');
module.exports = {
    getAll(res) {
        Contact.findAll({})
        .then(contacts => res.json())
        
    }
}

