let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let BusinessContacts = require('../models/BusinessContacts');

module.exports.displayBusinessContactsList = (req, res, next) => {
    BusinessContacts.find((err, BusinessContacts) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessContacts/list', 
            {title: 'BusinessContacts', 
            BusinessContacts: BusinessContacts,
            displayName: req.user ? req.user.displayName : ''
        });      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('businessContacts/add', {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''
})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBusinessContacts = BusinessContacts({
        "username": req.body.username,
        "password": req.body.password,
        "email_address": req.body.email_address,
        "number": req.body.number,
        "job": req.body.job
    });

    BusinessContacts.create(newBusinessContacts, (err, BusinessContacts) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/businessContacts-list');
        }
    });

}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BusinessContacts.findById(id, (err, businessContactsToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('businessContacts/edit', {title: 'Edit BusinessContacts', businessContacts: businessContactsToEdit,
            displayName: req.user ? req.user.displayName : ''
        })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBusinessContacts = BusinessContacts({
        "_id": id,
        "username": req.body.username,
        "password": req.body.password,
        "email_address": req.body.email_address,
        "number": req.body.number,
        "job": req.body.job
    });

    BusinessContacts.updateOne({_id: id}, updatedBusinessContacts, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/businessContacts-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BusinessContacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
      
             res.redirect('/businessContacts-list');
        }
    });
}