const models = require('../models');

module.exports = {
    getAll(res) {
        models.contacts.find({})
        .then(contacts => res.json())
        
    }
}