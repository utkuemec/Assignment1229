let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our BusinessContacts Model
let BusinessContacts = require('../models/BusinessContacts');

let businessContactsController = require('../controllers/BusinessContacts');

router.get('/', businessContactsController.displayBusinessContactsList);

router.get('/add', businessContactsController.displayAddPage);

router.post('/add', businessContactsController.processAddPage);

router.get('/edit/:id', businessContactsController.displayEditPage);

router.post('/edit/:id', businessContactsController.processEditPage);

router.get('/delete/:id', businessContactsController.performDelete);

module.exports = router;