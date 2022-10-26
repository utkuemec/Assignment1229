var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' },
  
  
  );
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/businessContacts_list', function(req, res, next) {
  res.render('businessContacts_list', { title: 'BusinessContacts' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.get('/Login', function(req, res, next) {
  res.render('Login', { title: 'Login' });
});

router.get('/Login2', function(req, res, next) {
  res.render('Login2', { title: 'Login2' });
});

router.get('/Update', function(req, res, next) {
  res.render('Update', { title: 'Update' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/Projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

router.get('/Services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});
module.exports = router;
