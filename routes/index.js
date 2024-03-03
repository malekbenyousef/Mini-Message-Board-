const express = require('express');
const router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;


router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});


router.post('/new', function(req, res, next) {
  let { user, text } = req.body;
  messages.push({ user, text, added: new Date() });
  res.redirect('/');
});