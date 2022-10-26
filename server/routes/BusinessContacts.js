let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// connect to our BusinessContacts Model
let BusinessContacts = require('../models/BusinessContacts');

let passport = require('passport');

let businessContactsController = require('../controllers/BusinessContacts');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


router.get('/', businessContactsController.displayBusinessContactsList);

router.get('/add', businessContactsController.displayAddPage);

router.post('/add', businessContactsController.processAddPage);

router.get('/edit/:id', businessContactsController.displayEditPage);

router.post('/edit/:id', businessContactsController.processEditPage);

router.get('/delete/:id', businessContactsController.performDelete);

module.exports = router;