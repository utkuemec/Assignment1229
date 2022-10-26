let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', {title: 'BusinessContacts'});
}

module.exports.displayLoginPage = (req, res, next) => {
    res.render('index', {title: 'Login'});
}

module.exports.displayUpdatePage = (req, res, next) => {
    res.render('index', {title: 'Update'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'about'});
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact'});
}