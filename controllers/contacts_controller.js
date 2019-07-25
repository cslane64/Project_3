const {Contact} = require('../db/models');
//const db = require('../db/models');
module.exports = {
    getAll(res) {
        db.Contact.findAll({})
        .then(contacts => res.json())
        
    }
}

