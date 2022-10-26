let mongoose = require('mongoose');


let businessContactsModel = mongoose.Schema({
    username: String,
    password: String,
    email_address: String,
    number: Number,
    job: String
},
{
    collection: "businessContacts"
});

module.exports = mongoose.model('BusinessContacts', businessContactsModel);
