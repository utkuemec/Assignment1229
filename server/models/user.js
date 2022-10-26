// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        
        password: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        },
        
        email_address: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
       },
       Number: 
       {
            type: Number,
            default: ''
            ,
            trim: true,
            required: 'Number is required'
       },

       Job: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Job is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);